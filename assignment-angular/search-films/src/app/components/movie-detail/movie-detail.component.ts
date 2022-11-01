import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Movie, MovieDetail } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetails$: Observable<MovieDetail>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieDetails$ = this.route.queryParams.pipe(
      map(queryParams => queryParams["movieId"]),
      switchMap(imdbId => this.movieService.getMovieDetails(imdbId)),
      switchMap((movie: MovieDetail) =>
        this.movieService.searchMovie(movie.Title).pipe(
          map((similarMovies: Array<Movie>) =>
            similarMovies.filter(
              (similarMovie: Movie) => similarMovie.Title !== movie.Title
            )
          ),
          map((similarMovies: Array<Movie>) => ({
            ...movie,
            similarMovies
          }))
        )
      )
    );
  }
}
