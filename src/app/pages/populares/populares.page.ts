import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.page.html',
  styleUrls: ['./populares.page.scss'],
})
export class PopularesPage implements OnInit {

  results: Observable<Movie[]>;
  queryText = '';
  showSearchbar: boolean;


  constructor(private movieService: MovieService, private searchService: SearchService) { }

  ngOnInit() {
    this.showSearchbar = false;
    this.results = this.movieService.getPopulars();

  }

  updateFilter() {
    this.results = this.searchService.searchMovies(this.queryText);
  }

}
