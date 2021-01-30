import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  movieData;
  adultTicket = 1;
  adultPrice = 15.68

  childTicket = 0;
  childPrice= 12.01

  seniorTicket = 0;
  seniorPrice= 11.25
  time = '3:00PM'

  
  constructor(private route: ActivatedRoute, private service: MoviesService, private router: Router) {

    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get('title'))[0]
      console.log(this.movieData)
    });
  }

  ngOnInit(): void {
  }

  chooseTime(time) {
    this.time = time;
    console.log(time)
  }
  clickedChair(slug, index) {
    let totalTickets =
    (this.adultTicket) +
    (this.seniorTicket) +
    (this.childTicket);
    this.service.reserveChair(slug, index, totalTickets)
    console.log('clicked chair')
  }

  clickedContinue() {
    console.log(this.movieData)
    this.router.navigate(['movies', this.movieData.slug, 'schedule', 'checkout', 'thank-you'], {
      queryParams: {
        adultTicket: this.adultTicket,
        childTicket: this.childTicket,
        seniorTicket: this.seniorTicket,
        time: this.time
      }
    });
  }
}
