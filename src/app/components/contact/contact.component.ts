import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
@Input() contactInput;

  isDelete = false;
  constructor(public contactService: ContactService, private toasterService: ToastrService) {
  }

  ngOnInit(): void {

    // console.log(this.contactService.contacts);
    // console.log(this.contactInput);

  }

  confirmDelete(contact){
    this.contactService.deleteContact(contact);
    this.toasterService.error(`Contact Deleted Successfully.`)
  }
}
