import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  lName: string;
  fName: string;
  telNum: number;
  contactEmail: string;

  constructor(public contactService: ContactService, private toasterService: ToastrService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  value = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getInputErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
  }

  onSubmit() {
    // console.log('clicked');
    let id = this.contactService.contacts.length + 2;
    const newContact: Contact = {
      id: id,
      fName: this.fName,
      lName: this.lName,
      telNum: this.telNum,
      email: this.contactEmail,
    }
    // console.log(newContact);
    this.toasterService.success(`Contact Added Successfully.`)
    this.contactService.contacts.unshift(newContact);
  }
}
