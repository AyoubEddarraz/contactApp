import { UpdateContactComponent } from './../../dialogs/update-contact/update-contact.component';
import { RemoveContactComponent } from './../../dialogs/remove-contact/remove-contact.component';
import { ContactService } from './../../services/contact.service';
import { ContactResponse } from './../../interfaces/contact-response';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts : ContactResponse[] = [];
  contactsFiltered: ContactResponse[] = [];

  constructor(private contactService: ContactService , private dialog: MatDialog , private snackBar: MatSnackBar, private store: Store) {}

  ngOnInit(): void {
    // get data and transfer to store
    this.getContact();

    // subscribe in store if data chnaged get the last value of data
    this.store.contacts.subscribe(data => {
      this.contacts = data;
      this.contactsFiltered = data;
    })
  }

  getContact() {
    this.contactService.getAllTodos().subscribe(data => this.store.changeContacts(data));
  }

  // Search Section
  search : string = "";

  filterContact() {
    this.contactsFiltered = this.contacts.filter(contact => {
      return contact.contactName.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
    });
  }

  clearSearchInput = () => {
    this.search = "";
    this.contactsFiltered = this.contacts;
  }


  // Crud Operations
  deleteContact = (contact:ContactResponse) => {
    const dialogRef = this.dialog.open(RemoveContactComponent , {
      data: contact
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.snackBar.open(`contact '${contact.contactName}' deleted` , "hide" , {
          duration: 3000
        });
        this.contactService.getAllTodos().subscribe(data => {
          this.store.changeContacts(data);
        })
      }
      else console.log("Cancel");
    })
  }

  updateContact = (contact:ContactResponse) => {
    const dialogRef = this.dialog.open(UpdateContactComponent , {
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== null) {
        this.clearSearchInput();
        this.snackBar.open(`contact '${contact.contactName}' updated` , "hide" , {
          duration: 3000
        });
      }
    })
  }


}
