import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { LoginComponent } from './components/login/login.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "" , redirectTo: "contact" , pathMatch: "full" },
  { path: "contact" , component: ContactComponent},
  { path: "addcontact" , component: AddContactComponent},
  { path: "contactDetails" , component: ContactDetailsComponent},
  { path: "login" , component: PageNotFoundComponent},
  { path: "singup" , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
