import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  readonly baseUrl = 'https://api.themoviedb.org/3';
  readonly apiKey = '89b32f4e80352e03253cdf7553800b79';

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
    );
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }

  searchMovie(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`
    );
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideo(id: any) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getMovieCast(id: any) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }
}
