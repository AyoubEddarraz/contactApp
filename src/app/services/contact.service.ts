import { ContactRequest } from './../interfaces/contact-request';
import { ContactResponse } from './../interfaces/contact-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  private URL: String = "http://localhost:8080/api/v1/todos";

  getAllTodos(): Observable<ContactResponse[] | any> {
    return this.httpClient.get(`${this.URL}`);
  }

  addNewContact(contact:ContactRequest) :Observable<ContactResponse | any> {
    return this.httpClient.post<ContactResponse>(`${this.URL}`, contact);
  }

  updateContact(contact:ContactResponse) : Observable<ContactResponse | any>{
    return this.httpClient.put(`${this.URL}/${contact.id}` , contact);
  }

  deleteContact(id:number) : Observable<string | any> {
    return this.httpClient.delete(`${this.URL}/${id}`);
  }


}
