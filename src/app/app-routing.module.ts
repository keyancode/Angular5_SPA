import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonarComponent } from './donar/donar.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { UniversalGaurdGuard } from './universal-gaurd.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component :LoginComponent},
  {path:'donar',component :DonarComponent, canActivate : [UniversalGaurdGuard]},
  {path:'donar/:id',component :DonarComponent},
  {path:'request',component :BloodrequestComponent, canDeactivate : [UniversalGaurdGuard]},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
