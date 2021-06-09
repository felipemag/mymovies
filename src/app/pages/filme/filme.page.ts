import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { Credits } from 'src/app/models/credits';
import { Movie } from 'src/app/models/movie';
import { Providers } from 'src/app/models/providers';
import { MovieStorageService } from 'src/app/services/movie-storage.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  movie: Movie;
  recommendations: Movie[];
  credits: Credits;
  providers: Providers;
  isCheckmarked = false;
  isAddedToList = false;
  loading: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private loadingCtrl: LoadingController,
    private movieStorageService: MovieStorageService,
    private router: Router,
  ) { }

   async ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.getMovieDetail(id);

    await this.movieStorageService.getCheckmark(id).then((result) => {
      if (result != null){
        this.isCheckmarked = true;
      }
    });
    await this.movieStorageService.getFromMovieList(id).then((result) => {
      if (result != null){
        this.isAddedToList = true;
      }
    });
  }

  onMovieDetail(id: number) {
    this.router.navigate(['filme', id]);
  }

  removeLoad(){
    if(!this.movie.poster_path){
      this.loading.dismiss();
    }
  }

  async getMovieDetail(id: number) {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando detalhes do filme...',
      translucent: true,
      spinner: 'crescent', 
    });
    this.loading.present();

    this.movieService.getMovieDetails(id).subscribe(res => {
      this.movie = res;
      
    });

    this.movieService.getRecommendations(id).subscribe(res => {
      this.recommendations = res;
    });

    this.movieService.getCredits(id).subscribe(res => {
      this.credits = res;
    });

    this.movieService.getProviders(id).subscribe(res => {
      this.providers = res;
    });
  }

  toggleAddToList() {
        if(this.isAddedToList){
          this.movieStorageService.removeFromMovieListk(this.movie.id);
          this.isAddedToList = false;
        }
        else{
          this.movieStorageService.insertToMovieList(this.movie);
          this.isAddedToList = true;
        }
  }

  toggleCheckmarked() {
    if(this.isCheckmarked){
      this.movieStorageService.removeCheckmark(this.movie.id);
      this.isCheckmarked = false;
    }
    else{
      this.movieStorageService.insertCheckmark(this.movie);
      this.isCheckmarked = true;
    }
}

}
