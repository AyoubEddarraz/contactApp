import { ContactResponse } from './../../interfaces/contact-response';
import { ContactService } from './../../services/contact.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'src/app/Store/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-contact',
  templateUrl: './remove-contact.component.html',
  styleUrls: ['./remove-contact.component.scss']
})
export class RemoveContactComponent implements OnInit {

  constructor(private store: Store , private contactService: ContactService , @Inject(MAT_DIALOG_DATA) public data: ContactResponse) { }

  ngOnInit(): void {
  }

  deleteContact() {
    try {
      this.contactService.deleteContact(this.data.id).subscribe((response) => {
        console.log(response);
      })
    } catch (err) {
      console.error(err)
    }
    this.contactService.getAllTodos().subscribe(data => {
      this.store.changeContacts(data);
    })
  }

}
