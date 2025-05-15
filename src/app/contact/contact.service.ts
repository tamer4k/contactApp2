import { inject, Injectable } from '@angular/core';
import { Contact } from '../domain-logic/contact.class';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    #localStorageService = inject(LocalStorageService);

    #contacts: any[] = [
        {
            id: uuidv4(),
            firstName: 'Elon',
            lastName: 'Musk',
            namesufix: 'Mr.',
            email: 'elon.musk@tesla.com',
            phone: '0611122233',
            address: {
                id: uuidv4(),
                street: 'Innovation Street 1',
                city: 'Amsterdam',
                zip: '1011AB',
                houseNumber: 1,
                houseNumberSuffix: 'A',
            }
        },
        {
            id: uuidv4(),
            firstName: 'Taylor',
            lastName: 'Swift',
            namesufix: 'Ms.',
            email: 'taylor.swift@music.com',
            phone: '0622233344',
            address: {
                id: uuidv4(),
                street: 'Melody Avenue 2',
                city: 'Rotterdam',
                zip: '3012BC',
                houseNumber: 2,
                houseNumberSuffix: 'B',
            }
        },
        {
            id: uuidv4(),
            firstName: 'Cristiano',
            lastName: 'Ronaldo',
            namesufix: 'Mr.',
            email: 'cristiano.ronaldo@football.com',
            phone: '0633344455',
            address: {
                id: uuidv4(),
                street: 'Champion Road 7',
                city: 'Utrecht',
                zip: '3513CD',
                houseNumber: 7,
                houseNumberSuffix: 'C',
            }
        },
        {
            id: uuidv4(),
            firstName: 'Emma',
            lastName: 'Watson',
            namesufix: 'Ms.',
            email: 'emma.watson@movies.com',
            phone: '0644455566',
            address: {
                id: uuidv4(),
                street: 'Magic Street 9',
                city: 'Eindhoven',
                zip: '5614DE',
                houseNumber: 9,
                houseNumberSuffix: 'D',
            }
        },
        {
            id: uuidv4(),
            firstName: 'Lionel',
            lastName: 'Messi',
            namesufix: 'Mr.',
            email: 'lionel.messi@football.com',
            phone: '0655566677',
            address: {
                id: uuidv4(),
                street: 'Goal Lane 10',
                city: 'Groningen',
                zip: '9715EF',
                houseNumber: 10,
                houseNumberSuffix: 'E',
            }
        }
    ];

    constructor(){
        const contacts = this.#localStorageService.getItem('contacts');
        console.log(contacts);
      if(!contacts){
        this.#localStorageService.setItem('contacts',this.#contacts);
      }
    }

    public getContacts(): Observable<Contact[]>{
        
        const contacts = this.#localStorageService.getItem('contacts');
        const tmpArr: Contact[] = [];
        if(contacts){
            contacts.forEach((contact: any) => {
                tmpArr.push(new Contact(contact));
            })
        }
        return of(tmpArr);
    }

    public getContactById(id: string): Observable<Contact | undefined> {
        return this.getContacts().pipe(
            map((contacts: Contact[]) => contacts.find(contact => contact.id === id))
        );
    }


    public deleteContact(id: string): Observable<Contact | undefined> {
        const contacts = this.#localStorageService.getItem('contacts') ?? [];
        const contactToDelete = contacts.find(contact => contact.id === id);
        const updated = contacts.filter(contact => contact.id !== id);
        this.#localStorageService.setItem('contacts', updated);
        debugger
        return of(contactToDelete);
    }

    public addContact(contact: Contact): Observable<Contact[]> {
    this.#localStorageService.addItem('contacts', contact);
    return this.getContacts();
    }

    public updateContact(updatedContact: Contact): Observable<Contact[]> {
    this.#localStorageService.updateItem('contacts', updatedContact);
    return this.getContacts();
    }
    
}
