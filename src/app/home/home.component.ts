import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/movieCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies!: MovieCard[];

  constructor(private movieService: MovieService) { }

  // This is part of Component Life Cycle Hooks
  // certain events
  ngOnInit(): void {
    //An ngOnInit() is a good place for a component to fetch its initial data.
    this.movieService.getTopRevenueMovies()
                     .subscribe(m => { 
                       this.movies = m; 
                       console.table(this.movies);
                      })
  }



  // Youtube, chaneels user can subscribe
  // Channel1 => upload a new video => User => Subscribe to that channel, you can recieve the notofication
  // Publish/Subscribe => 
  // Observer pattern 
  // JS async 
  // C# async/await => Task => Promise
  // Http Call, Ajax call, Promises...
  // AngularJS => Promises
  // Angular => Observables => Rxjs => LINQ Methods =>
  // HttpClinet => HttpModule => Observables
  // Instead, you can use a series of operators to transform values as needed
  // var list  = empllist.where( e => e.salry> 3000).Whare();
  // subscribe() 

  // lazy collections over time

  // filter is equivalent to Where
  // map is equivalent to Select
  // every is equivalent to All
  // some is equivalent to Any
  // reduce is "kinda" equivalent to Aggregate (and also can be used to Sum)

}
