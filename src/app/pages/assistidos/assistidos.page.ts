import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieStorageService } from 'src/app/services/movie-storage.service';

@Component({
  selector: 'app-assistidos',
  templateUrl: './assistidos.page.html',
  styleUrls: ['./assistidos.page.scss'],
})
export class AssistidosPage implements OnInit {

  movies: Promise<Array<Movie>>;

  constructor(private userService: MovieStorageService) { }

   ngOnInit() {

    this.movies = this.userService.getAllCheckmarks();

  }

}
