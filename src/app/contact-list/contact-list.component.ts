import { Component, OnInit } from '@angular/core';
import { IContact } from './contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  isImageVisible = true;

  pageTitle = 'Contacts List';
  listFilter: string;

  get ListFilter(): string {
    return  this.listFilter;
  }
  set ListFilter(value: string) {
    this.listFilter = value;
    this.filteredContacts = this.listFilter !== '' ?
    this.performFilter(this.listFilter) :
    this.contacts;
  }

  filteredContacts: IContact[];
  contacts: IContact[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      phone: '555-888-1234',
      address: 'Main str. 5',
      profileFilled: 5,
      imageUrl: '',
      imageWidth: 50,
      imageMargin: 2
    }, {
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '555-456-4321',
      address: 'Main str. 6',
      profileFilled: 4,
      imageUrl: '',
      imageWidth: 50,
      imageMargin: 2
    }
  ];

  constructor() {
    this.filteredContacts = this.contacts;
   }

  ngOnInit() {
  }

  imageClicked(): void {
    this.isImageVisible = !this.isImageVisible;
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    return this.contacts.filter((contact: IContact) => {
      return contact.firstName.toLowerCase().indexOf(filterBy) !== -1;
    });
  }
}
