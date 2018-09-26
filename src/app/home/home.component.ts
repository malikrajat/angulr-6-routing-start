import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: Router,
    private currentPage: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  loadServer() {
    // this.route.navigate(['/server'], { queryParams: { allowEdit: 1 }, fragment: 'loading', relativeTo: this.currentPage, queryParamsHandling: 'preserve'});
    this.route.navigate(['/server']);
  }

}
