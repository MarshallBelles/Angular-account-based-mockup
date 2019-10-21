import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  loggedIn: boolean;
  authWatcher: Observable<any>;
  
  constructor(private as: AuthenticationService) {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
