import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollsComponent } from './polls/polls.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { DisplayIncidentsComponent } from './display-incidents/display-incidents.component';
import { CommonModule } from '@angular/common';
// import { EducateComponent } from './educate/educate.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddPollComponent } from './add-poll/add-poll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddPollComponent,LoginComponent,LogoutComponent,AdminDashboardComponent, RegisterComponent,PollsComponent,NavbarComponent,HomeComponent,GettingStartedComponent,TermsAndConditionsComponent,DisplayIncidentsComponent,CommonModule,AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
isExcludedRoute() {
throw new Error('Method not implemented.');
}
  title = 'Citizen-Front';
}
