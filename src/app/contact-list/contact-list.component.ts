import { Component, OnInit } from '@angular/core';
import { IContact } from './contact';
import { ContactService } from '../shared/contact.service';

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
  contacts: IContact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getConacts()
      .subscribe();
    this.filteredContacts = this.contacts;
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
