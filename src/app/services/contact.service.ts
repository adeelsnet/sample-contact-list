import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { WeekDay } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [
    {
      id: 1,
      fName: 'Adeel',
      lName: 'Ahmed',
      telNum: 1123456789,
      email: 'abc@gmail.com',
      date: new Date()
    },
    {
      id: 2,
      fName: 'Ahmed',
      lName: 'Adeel',
      telNum: 1123456789,
      email: 'def@gmail.com',
      date: new Date()
    },
    {
      id: 3,
      fName: 'Jamil',
      lName: 'Ahmed',
      telNum: 1123456789,
      email: 'ghi@gmail.com',
      date: new Date()
    }
  ]
  constructor() { }

  deleteContact(contact) {
    let index = this.contacts.indexOf(contact);
    // console.log(contact);
    this.contacts.splice(index, 1);
  }
}
