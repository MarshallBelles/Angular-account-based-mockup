import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private ngZone: NgZone, private router: Router, private as: AuthenticationService) {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        // you can be here
      } else {
        // you need to log in
        this.ngZone.run(() => this.router.navigateByUrl('/login')).then();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

}
