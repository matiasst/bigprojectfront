import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Iuser } from '../interfaces/iuser';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})
export class DisplayUserDataComponent implements OnInit {

  users: Iuser[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.apiService.getUsers().subscribe((users: Iuser[]) => this.users = users);
    } catch (error) {
      console.log(error);

    }
  }

}
