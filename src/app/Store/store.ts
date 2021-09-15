import { ContactResponse } from './../interfaces/contact-response';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Store {

  private contactsSubject = new BehaviorSubject<ContactResponse[]>([]);
  contacts = this.contactsSubject.asObservable();
  changeContacts = (value : ContactResponse[]) => this.contactsSubject.next(value);

}
