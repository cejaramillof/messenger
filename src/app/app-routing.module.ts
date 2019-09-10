import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ConversationComponent} from './conversation/conversation.component';
import {ProfileComponent} from './profile/profile.component';

// routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'conversation', component: ConversationComponent },
  {path: 'profile', component: ProfileComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
