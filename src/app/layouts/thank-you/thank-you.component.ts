import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  movieData;
  adultTicket;
  childTicket;
  seniorTicket;
  time;
  totalTickets;
  constructor(private route: ActivatedRoute, private service: MoviesService, private router: Router) {

    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get('title'))[0]
      console.log(this.movieData)
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.adultTicket = params.get('adultTicket');
      this.childTicket = params.get('childTicket');
      this.seniorTicket= params.get('seniorTicket');
      this.time= params.get('time');
      this.totalTickets= this.adultTicket + this.childTicket +  this.seniorTicket;
    })
  }

}
