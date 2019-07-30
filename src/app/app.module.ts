import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './componenet/dashbord/dashbord.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule,  } from '@angular/material';
import {MatCardModule} from '@angular/material'
import {enableProdMode} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,FormsModule,MatIconModule,
    MatToolbarModule,MatSidenavModule,MatCardModule,BrowserAnimationsModule,FlexLayoutModule,
    MatMenuModule,MatTooltipModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
