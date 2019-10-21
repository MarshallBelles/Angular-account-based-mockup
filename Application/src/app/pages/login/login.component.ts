import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  loginPassword(username, password) {
    this.as.emailLogIn(username, password);
  }

  loginGoogle() {
    this.as.googleLogIn();
  }

  loginAnonymous() {
    this.as.anonymousLogIn();
  }

  done() {
    this.router.navigateByUrl('/');
  }

}
