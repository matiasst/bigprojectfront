import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})
export class DisplayUserDataComponent implements OnInit {

  users: any[] = []

  constructor() {

    this.users =  [
      {firstName: 'Tommy', lastName: 'Johnson', phone: '254789', email: 'tjohnson@gmail.com'},
      {firstName: 'Katy', lastName: 'Wright', phone: '148961', email: 'kwright@gmail.com'},
      {firstName: 'Rlph', lastName: 'Baker', phone: '321489', email: 'rbaker@gmail.com'},
      {firstName: 'Samy', lastName: 'Timber', phone: '567849', email: 'stimber@gmail.com'},
    ]

  }

  ngOnInit(): void {
  }

}
