import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { SearchService } from 'src/app/services/search.service';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {

  results: Observable<Movie[]>;
  queryText = '';
  showSearchbar: boolean;

  constructor(private movieService: MovieService, private searchService: SearchService) {}

  ngOnInit() {
    this.showSearchbar = false;
    this.results = this.movieService.getNowPlaying();
  }

  updateFilter() {
    this.results = this.searchService.searchMovies(this.queryText);
  }

}

