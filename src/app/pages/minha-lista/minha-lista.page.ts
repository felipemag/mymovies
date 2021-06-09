import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieStorageService } from 'src/app/services/movie-storage.service';

@Component({
  selector: 'app-minha-lista',
  templateUrl: './minha-lista.page.html',
  styleUrls: ['./minha-lista.page.scss'],
})
export class MinhaListaPage implements OnInit {

  movies: Promise<Array<Movie>>;

  constructor(private userService: MovieStorageService) { }

    ngOnInit() {

    this.movies = this.userService.getMovieList();

  }

}
