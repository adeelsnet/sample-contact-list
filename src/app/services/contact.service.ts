import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

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
      email: 'abc@gmail.com'
    },
    {
      id: 2,
      fName: 'Ahmed',
      lName: 'Adeel',
      telNum: 1123456789,
      email: 'def@gmail.com'

    },
    {
      id: 3,
      fName: 'Jamil',
      lName: 'Ahmed',
      telNum: 1123456789,
      email: 'ghi@gmail.com'

    }
  ]
  constructor() { }

  deleteContact(contact) {
    let index = this.contacts.indexOf(contact);
    // console.log(contact);
    this.contacts.splice(index, 1);
  }
}
