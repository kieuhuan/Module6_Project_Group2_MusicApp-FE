import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {CreatedSongListComponent} from './song/created-song-list/created-song-list.component';
import {LoginComponent} from './auth/login/login.component';
import {HomepageComponent} from './home/homepage/homepage.component';



const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
