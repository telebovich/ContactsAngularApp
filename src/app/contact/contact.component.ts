import { Component, OnInit } from '@angular/core';
import { IContact } from '../shared/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: IContact;
  constructor() { }

  ngOnInit() {
  }

}
