import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { usersGuard } from './Guards/users.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[usersGuard],component:DashboardComponent,children:[
    {path:'',redirectTo:'addUser',pathMatch:'full'},
    {path:'addUser',component:AddUsersComponent},
    {path:'**',component:NotFoundComponent},
  ]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
