import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  @Input() public movies:any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  onMovieDetail(id: number) {
    this.router.navigate(['filme', id]);
  }

}
