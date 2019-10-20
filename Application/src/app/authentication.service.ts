import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZ-gm9qZ_4uutRHOrF2-caRTIM6sE2U9c",
  authDomain: "account-based-mockup.firebaseapp.com",
  databaseURL: "https://account-based-mockup.firebaseio.com",
  projectId: "account-based-mockup",
  storageBucket: "account-based-mockup.appspot.com",
  messagingSenderId: "1064700680024",
  appId: "1:1064700680024:web:8a3b84538d123f4859372d",
  measurementId: "G-6W1336K8MD"
};

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


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticator: any;
  constructor() {
    this.authenticator = app.auth();
  }

  public isAuthenticated():boolean {
    return false;
  }
  public logIn() {}
  public logOut() {}
}
