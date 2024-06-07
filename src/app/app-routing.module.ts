import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'events', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
  { path: 'services', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
  { path: 'placess', loadChildren: () => import('./placess/placess.module').then(m => m.PlacessModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'userlists', loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistModule) },
  { path: 'Companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
