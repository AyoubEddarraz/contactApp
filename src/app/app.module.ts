import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { NavListComponent } from './components/nav-list/nav-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemoveContactComponent } from './dialogs/remove-contact/remove-contact.component';
import { UpdateContactComponent } from './dialogs/update-contact/update-contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactComponent,
    ContactDetailsComponent,
    LoginComponent,
    SingUpComponent,
    NavListComponent,
    RemoveContactComponent,
    UpdateContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
