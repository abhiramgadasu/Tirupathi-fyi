import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacessComponent } from './placess.component';

const routes: Routes = [{ path: '', component: PlacessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacessRoutingModule { }
