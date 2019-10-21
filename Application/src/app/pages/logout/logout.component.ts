import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private as: AuthenticationService) {
    this.as.logOut();
  }

  ngOnInit() {
  }

}
