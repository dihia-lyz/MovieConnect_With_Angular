import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  movieVideo: any;
  movieCast: any;

  constructor(
    private service: MovieApiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let paramId = this.router.snapshot.paramMap.get('id');
    console.log(typeof paramId);

    this.getMovie(paramId);
    this.getMovieCast(paramId);
    this.getMovieVideo(paramId);
  }

  getMovie(id: any): void {
    this.service.getMovie(id).subscribe((result) => {
      this.movie = result;
      console.log('result', result);
    });
  }

  getMovieVideo(id: any): void {
    this.service.getMovieVideo(id).subscribe((result: any) => {
      console.log(result, 'videos result#');
      result?.results.map((element: any) => {
        if (element.type == 'Trailer') {
          this.movieVideo = element.key;
        }
        console.log(this.movieVideo, 'key#');
      });
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result: any) => {
      console.log('cast movie', result.cast);

      this.movieCast = result.cast;
    });
  }
}
