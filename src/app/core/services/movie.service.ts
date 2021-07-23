import { Injectable } from '@angular/core';
import { MovieCard } from 'src/app/shared/models/movieCard';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRevenueMovies(): Observable<MovieCard[]> {
    //Make an AJAX Http call to API https://localhost:44347/api/Movies/toprevenue
    return this.http.get(`${environment.apiUrl}Movies/toprevenue`)
                    .pipe(map( resp => resp as MovieCard[]));
  }

  getMovieDetails(id: number): Observable<Movie>{
    return this.http.get(`${environment.apiUrl}Movies/${id}`)
                    .pipe(map(resp => resp as Movie));
  }
}
