import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { Credits } from '../models/credits';
import { Providers } from '../models/providers';
 
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://api.themoviedb.org/';
  apiKey = '5098ff7d7f8c4d8b959a597264f29c16'; 
  language = 'pt-BR';

  constructor(private http: HttpClient) { }
 
  getNowPlaying(): Observable<Movie[]> {
    return this.http.get(`${this.url}3/movie/now_playing?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map(results => results['results'])
    );
  }

  getPopulars(): Observable<Movie[]> {
    return this.http.get(`${this.url}3/movie/popular?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map(results => results['results'])
    );
  }

  getUpcoming(): Observable<Movie[]> {
    return this.http.get(`${this.url}3/movie/upcoming?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map(results => results['results'])
    );
  }

  getGenres(): Observable<Movie[]> {
    return this.http.get(`${this.url}3/genre/movie/list?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map(results => results['genres'])
      );
  }

  getCredits(id:number): Observable<Credits> {
    return this.http.get(`${this.url}3/movie/${id}/credits?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map(results => results['cast'])
      );
  }

  getProviders(id:number): Observable<Providers> {
    return this.http.get(`${this.url}3/movie/${id}/watch/providers?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map(results => results['results']['BR'])
      );
  }

  getMovieDetails(id:number) : Observable<Movie>{
    return this.http.get<Movie>(`${this.url}3/movie/${id}?api_key=${this.apiKey}&language=${this.language}`);
  } 

  getRecommendations(id:number) : Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.url}3/movie/${id}/recommendations?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map(results => results['results']));
  } 
 
}