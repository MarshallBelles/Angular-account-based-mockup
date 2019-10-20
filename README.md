# account-based-mockup
Account Based Mockup

This is one approach of a yelp-like website.
* Angular.io front-end framework
* Stubbed Search service - backend work needed
* Progressive Web App (PWA) - can be saved to device home screen

Authentication service is using Google Firebase Authentication
Search service is stubbed but would idealy be replaced to make requests to a backend elasticsearch server.

This site is deployed on the Google Firebase platform
[Visit the example site](https://account-based-mockup.firebaseapp.com/)

### Platform
Angular CLI: 8.3.12

Node: 10.16.3

OS: win32 x64

### Pages:
  /home
  
  /search
  
  /results - 5 demo records
  
  /results/:record_id
  
  /about
  
  /profile
  
  /login
  
  /logout
  

Services:
* Authentication (Google Firebase)
* Search (stubbed)

## Getting Started
1. Download and install Nodejs version 10.x.x
2. Clone this repository
3. From the command prompt or terminal, CD into the Application directory
4. Execute `npm install` to install dependencies
5. Test out the app by executing `npm s -o`

### Setup Google Authentication
1. Navigate to https://firebase.google.com and sign in or create a new account.
2. Navigate to an existing project or create a new project
3. Navigate to the project settings > General > Your apps and create a new app
4. Click "Config" and Copy the firebaseConfig credentials
5. Open the authentication.service.ts file in your favorite IDE
6. Paste in your credentials
7. Back in the firebase console, naviage to Authentication > Sign-in methods
8. Enable the Email/Password Sign-in method
9. You may wish to also enable Anonymous as it is great for testing

Node is inherently multi-platform and can run on Windows/Linux/MacOSX across a variety of architectures.

Read more about [Angular.IO](https://angular.io)
