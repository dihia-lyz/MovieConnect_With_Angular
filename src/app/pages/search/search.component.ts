import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  searchedMovies: any[] = [];

  constructor(private movieApiService: MovieApiService) {}

  submitSearch(): void {
    console.log('form input is ', this.searchForm);

    this.movieApiService
      .searchMovie(this.searchForm.value)
      .subscribe((result) => {
        console.log('result', result);
        this.searchedMovies = result.results;
      });
  }
}
