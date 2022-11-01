import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie, MovieDetail } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly API_KEY = `157f9eb7`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(map((response: any) => response.Search)
      );
  }

  getMovieDetails(imdbId: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }
}
