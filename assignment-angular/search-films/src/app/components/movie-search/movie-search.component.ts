import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {

  query: string = '';
  movies$: Observable<Array<Movie>>;

  constructor(private readonly movieService: MovieService) {}

  getSearchResults() {
    this.movies$ = this.movieService.searchMovie(this.query);
  }

}
