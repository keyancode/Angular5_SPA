import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonarComponent } from './donar/donar.component';
import { LoginComponent } from './login/login.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    DonarComponent,
    LoginComponent,
    BloodrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
