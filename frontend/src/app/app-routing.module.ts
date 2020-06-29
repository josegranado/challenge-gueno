import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'view/:cuit', component: ViewComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
