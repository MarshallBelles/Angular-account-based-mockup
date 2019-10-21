import { Injectable, OnInit, OnDestroy, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

/* const firebaseConfig = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>',
  appId: '<your-app-id>',
  measurementId: '<your-measurement-id>'
} */

const app = firebase.initializeApp(firebaseConfig);
const googleProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit, OnDestroy {
  authenticator: any;
  authenticated: boolean;
  constructor(private ngZone: NgZone, private router: Router) {
    this.authenticator = app.auth();
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public emailLogIn(email, password) {
    this.authenticator.signInWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.ngZone.run(() => this.router.navigateByUrl('/')).then();
      })
      .catch((err)=>{alert(err.message)});
  }

  public anonymousLogIn() {
    this.authenticator.signInAnonymously()
      .then((user)=>{
        localStorage.setItem('user', JSON.stringify(user));
        this.ngZone.run(() => this.router.navigateByUrl('/')).then();
      })
      .catch((err)=>{alert(err.message)});
  }

  public googleLogIn() {
    this.authenticator.signInWithPopup(new googleProvider)
      .then((user)=>{
        localStorage.setItem('user', JSON.stringify(user));
        this.ngZone.run(() => this.router.navigateByUrl('/')).then();
      })
      .catch((err)=>{alert(err.message)});
  }

  public logOut() {
    this.authenticator.signOut();
    localStorage.removeItem('user');
  }
}
