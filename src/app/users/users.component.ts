import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  ngOnInit() {
    console.log(this.route.snapshot.data['message']);
    this.route.data.subscribe(
      (data: Data) => {
        console.log(data['message']);
      }
    );
  }
}
