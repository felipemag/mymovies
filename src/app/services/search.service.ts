import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';
 
 
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'https://api.themoviedb.org/';
  apiKey = '5098ff7d7f8c4d8b959a597264f29c16'; 
  language = 'pt-BR';

  constructor(private http: HttpClient) { }
 
  searchMovies(query:string): Observable<Movie[]> {
      if(query != ""){
        return this.http.get(`${this.url}3/search/movie?api_key=${this.apiKey}&language=${this.language}&query=${query}`).pipe(
            map(results => results['results'])
          );
      }
  }
 
}