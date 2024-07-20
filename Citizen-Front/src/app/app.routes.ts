import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PollsComponent } from './polls/polls.component';
import { ReportIncidentComponent } from './report-incident/report-incident.component';
import { AIChatComponent } from './ai-chat/ai-chat.component';
import { CitizenViewsComponent } from './citizen-views/citizen-views.component';
import { ProfileComponent } from './profile/profile.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CitizenDashboardComponent } from './citizen-dashboard/citizen-dashboard.component';
import { DisplayIncidentsComponent } from './display-incidents/display-incidents.component';
import { GvnDashboardComponent } from './gvn-dashboard/gvn-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordChangedComponent } from './password-changed/password-changed.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { EducateComponent } from './educate/educate.component';
import { HomeComponent } from './home/home.component';
import { AddPollComponent } from './add-poll/add-poll.component';


export const routes: Routes = [
  
  { path: '', component: GettingStartedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-poll', component: AddPollComponent },
  { path: 'display-incidents', component: DisplayIncidentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'report-incident', component: ReportIncidentComponent },
  { path: 'ai-chat', component: AIChatComponent },
  { path: 'citizen-views', component: CitizenViewsComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'educate', component:EducateComponent  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'citizen-dashboard', component: CitizenDashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'password-changed', component: PasswordChangedComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'gvn-dashboard', component: GvnDashboardComponent },
  { path: 'display-incidents', component: DisplayIncidentsComponent },
  { path: '**', redirectTo: '/home' }
];
