import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './pages/callback/callback.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SecretPageComponent} from './pages/secret-page/secret-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'callback', component: CallbackComponent},
  { path: 'secret', component: SecretPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
