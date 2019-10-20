import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ResultsComponent } from './pages/results/results.component';
import { ResultsRecordComponent } from './pages/results-record/results-record.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';


const routes: Routes = [
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/search', component: SearchComponent},
  {path: '/results', component: ResultsComponent},
  {path: '/results/:record_id', component: ResultsRecordComponent},
  {path: '/about', component: AboutComponent},
  {path: '/profile', component: ProfileComponent},
  {path: '/login', component: LoginComponent},
  {path: '/logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
