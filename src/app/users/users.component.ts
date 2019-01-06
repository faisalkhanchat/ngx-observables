import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: any;
  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
    console.log(this.users);
  }

}
