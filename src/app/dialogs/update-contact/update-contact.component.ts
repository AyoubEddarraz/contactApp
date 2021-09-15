import { ContactService } from './../../services/contact.service';
import { ContactResponse } from './../../interfaces/contact-response';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  response: ContactResponse | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ContactResponse , private FB: FormBuilder , public dialogRef: MatDialogRef<UpdateContactComponent> , private contactService: ContactService, private store: Store ) { }

  ngOnInit(): void {
    this.addContactForm.patchValue(this.data);
  }

  addContactForm = this.FB.group({
    id: [''],
    contactName: ['', [Validators.required]],
    contactNumero: ['' , [Validators.required]]
  })

  updateContact = () => {
    this.contactService.updateContact(this.addContactForm.value).subscribe(data => {
      this.contactService.getAllTodos().subscribe(response => {
        this.store.changeContacts(response);
      })
    });
  }

}
