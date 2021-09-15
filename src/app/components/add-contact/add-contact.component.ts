import { ContactResponse } from './../../interfaces/contact-response';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private FB: FormBuilder, private contactService: ContactService, private snackBar: MatSnackBar , private route: Router) {}

  ngOnInit(): void {
  }

  addContactForm = this.FB.group({
    contactName: ['', [Validators.required]],
    contactNumero: ['' , [Validators.required]]
  })

  addNewContact(){
    let contact = this.addContactForm.value;
    this.contactService.addNewContact(contact).subscribe((response: ContactResponse) => {
      this.snackBar.open(`contact '${response.contactName}'' added` , "hide" , {
        duration: 3000
      })
      this.route.navigate(["/contact"])
    })
  }



}
