import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatChipsModule, MatAutocompleteModule, MatInputModule, MatRippleModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule,  } from '@angular/material';
import {MatCardModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule} from '@angular/material';


import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { APP_BASE_HREF } from '@angular/common';
//import { CreatenoteComponent } from './service/createnote/createnote.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { UpdateNoteComponent } from './component/update-note/update-note.component';
import { IconsComponent } from './component/icons/icons.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { AddnoteComponent } from './component/addnote/addnote.component';

@NgModule({
  declarations: [
    AppComponent,
   // CreatenoteComponent,
    DashboardComponent,
    GetAllNotesComponent,
    CreatenoteComponent,
    UpdateNoteComponent,
    IconsComponent,
    LogoutComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    AddnoteComponent,
//ForgetpasswordComponent,
   // UpdateNoteComponent,
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,FormsModule,MatIconModule,
    MatToolbarModule,MatSidenavModule,MatCardModule,
    BrowserAnimationsModule,MatSnackBarModule,
    MatMenuModule,MatTooltipModule,
    MatListModule,MatChipsModule,
    MatAutocompleteModule,
    FlexLayoutModule,ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatRippleModule,MatCheckboxModule,MatDialogModule, HttpClientModule 
  ],entryComponents:[
    UpdateNoteComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
