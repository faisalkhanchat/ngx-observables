import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    const myNumber = Observable.interval(1000);
    myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

  }

  onLoadServer(id: number) {
    alert('asdf');
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.logIn();
  }
  onLogout() {
    this.authService.logIn();
  }

}
