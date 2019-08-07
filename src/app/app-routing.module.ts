import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { IconsComponent } from './component/icons/icons.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
//import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { UpdateNoteComponent } from './component/update-note/update-note.component';



import { CreatenoteComponent } from './component/createnote/createnote.component';
import { AuthenticationService } from './service/authentication.service';


const router: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ResetpasswordComponent},
  //{path:'reset',component:ForgetpasswordComponent},
  { path: 'dashboard', component: DashboardComponent,
  children:[
     
    {
      path:"createnote",component:CreatenoteComponent},
    {path:'getnote',component:GetAllNotesComponent},
     {path:'updatenote',component:UpdateNoteComponent}
  ] },
  
  { path: 'icons', component: IconsComponent }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
