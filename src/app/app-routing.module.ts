import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/Main/main/main.component';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'user', loadChildren: () => import('./modules/User/user.module').then(m => m.UserModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/Dashboard/dashboard.routes').then(m => m.routes) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }