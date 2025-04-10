import { Injectable } from '@angular/core';
import { Contact } from '../domain-logic/contact.class';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
    console.log(this.contacts);
  }

  private contacts: Contact[] = [
    {
    id: '123',
    firstName: 'John',
    lastName: 'Doe',
    namesufix: 'Mr.',
    email: 'john.doe@example.com',
    phone: '0625253023',
    address: {
      id: '1',
      street: 'Main Street 1',
      city: 'Amsterdam',
      zip: '1000AA',
      houseNumber: 1,
      houseNumberSuffix: 'A',
    }
  },
  {
    id: '123',
    firstName: 'John',
    lastName: 'Doe',
    namesufix: 'Mr.',
    email: 'john.doe@example.com',
    phone: '0625253023',
    address: {
      id: '1',
      street: 'Main Street 1',
      city: 'Amsterdam',
      zip: '1000AA',
      houseNumber: 1,
      houseNumberSuffix: 'A',
    }
  }
];

}
