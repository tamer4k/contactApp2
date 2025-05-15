import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { Contact } from '../../domain-logic';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector: 'app-contact-list',
    imports: [CommonModule],
    templateUrl: './contact-list.component.html',
    styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit, OnDestroy{
    #contactService = inject(ContactService);
    #router = inject(Router);
    #unsubscribe$ = new Subject<void>();
    

    protected contacts: Contact[] = [];

    public ngOnInit(): void {
        this.getContacts();
    }

    protected getContacts(): void{
        this.#contactService.getContacts()
            .pipe(takeUntil(this.#unsubscribe$))
            .subscribe(data => {
                this.contacts = data;
            });
    }

    protected goToContact(id: string){
      this.#router.navigate(['contacts',id]);
    }

    goToAddPage(): void {
        this.#router.navigate(['contacts/add']);
      }

    public ngOnDestroy(): void {
        this.#unsubscribe$.next();
        this.#unsubscribe$.complete();
    }




    

   
}
