import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private hService = HttpService) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.movies = this.hService.getMovieList()
  }

  deleteMovie(id: number): void {
    this.hService.deleteMovie(id).subscribe()
  }

}
