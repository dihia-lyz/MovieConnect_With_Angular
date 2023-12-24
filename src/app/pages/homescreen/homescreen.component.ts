import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
})
export class HomescreenComponent implements OnInit {
  movies: any[] = [];
  trendingMovies: any[] = [];

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.fetchAllMovies();
    this.fetchTrendingMovies();
  }

  fetchAllMovies(): void {
    this.movieApiService.bannerApiData().subscribe((result) => {
      this.movies = result.results;
      console.log(this.movies);
    });
  }

  fetchTrendingMovies(): void {
    this.movieApiService.getTrendingMovies().subscribe((result) => {
      console.log('data', result);

      this.trendingMovies = result.results;
      console.log('trending' + JSON.stringify(this.trendingMovies));
    });
  }
}
