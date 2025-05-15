import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { v4 as uuidv4 } from 'uuid'; 
import { Router } from '@angular/router';
import { Contact } from '../../domain-logic';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-add.component.html',
  styleUrl: './contact-add.component.scss'
})

  
export class ContactAddComponent {

  contact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    namesufix: '',
    email: '',
    phone: '',
    address: {
      id: '',
      street: '',
      city: '',
      zip: '',
      houseNumber: 0,
      houseNumberSuffix: ''
    }
  };

  constructor(private contactService: ContactService, private router: Router ) {}

  onSubmit(): void {
    this.contact.id = uuidv4();
    this.contact.address!.id = uuidv4();

    this.contactService.addContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

  public resetForm(): void {
    this.contact = {
      id: '',
      firstName: '',
      lastName: '',
      namesufix: '',
      email: '',
      phone: '',
      address: {
        id: '',
        street: '',
        city: '',
        zip: '',
        houseNumber: 0,
        houseNumberSuffix: ''
      }
    };
  }
}


