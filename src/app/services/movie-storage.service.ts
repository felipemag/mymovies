import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieStorageService {
  private checkmarkKeyPrefix = 'MOVIES_CHECKMARKS/';
  private movieListKeyPrefix = 'MOVIES_LIST/';

  
  constructor(private storage: Storage) { }

  public insertToMovieList(movie: Movie) {
    return this.saveToMovieList(movie);
  }

  public updateToMovieList(movie: Movie) {
    return this.saveToMovieList(movie);
  }

  private saveToMovieList(movie: Movie) {
    return this.storage.set(`${this.movieListKeyPrefix + movie.id}`, movie);
  }

  public removeFromMovieListk(movieId: number) {
    return this.storage.remove(`${this.movieListKeyPrefix + movieId}`);
  }

  public getFromMovieList(movieId: number): Promise<Movie> {
    return this.storage.get(`${this.movieListKeyPrefix + movieId}`);
  }

  public async getMovieList(): Promise<Movie[]> {
    let movies: Array<Movie> = [];
    await this.storage.forEach((v, key, i)=>{
      if(key.startsWith(this.movieListKeyPrefix)){
          movies.push(v);
      }
    });

    return movies;

  }

  public insertCheckmark(movie: Movie) {
    return this.saveCheckmark(movie);
  }

  public updateCheckmark(movie: Movie) {
    return this.saveCheckmark(movie);
  }

  private saveCheckmark(movie: Movie) {
    return this.storage.set(`${this.checkmarkKeyPrefix + movie.id}`, movie);
  }

  public removeCheckmark(movieId: number) {
    return this.storage.remove(`${this.checkmarkKeyPrefix + movieId}`);
  }

  public getCheckmark(movieId: number): Promise<Movie> {
    return this.storage.get(`${this.checkmarkKeyPrefix + movieId}`);
  }

  public async getAllCheckmarks(): Promise<Movie[]> {
    let movies: Array<Movie> = [];
    await this.storage.forEach((v, key, i)=>{
      if(key.startsWith(this.checkmarkKeyPrefix)){
          movies.push(v);
      }
    });

    return movies;

  }

}