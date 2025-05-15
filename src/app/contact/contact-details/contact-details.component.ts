import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../../domain-logic';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent implements OnDestroy{
  #contactService = inject(ContactService);
  #route = inject(ActivatedRoute);
  #unsubscribe$ = new Subject<void>();
  #router = inject(Router);
  
  protected contact!: Contact;

  constructor(  private route: ActivatedRoute,
  private contactService: ContactService){
    this.#route.params
    .pipe(takeUntil(this.#unsubscribe$))
    .subscribe(params => {
      if(params['id']){
        this.#getContactById(params['id']);
      }
    });

      const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.contactService.getContactById(id).subscribe(c => {
      if (c) this.contact = c;
    });
  }
  }

   #getContactById(id: string): void{

      this.#contactService.getContactById(id)
          .pipe(takeUntil(this.#unsubscribe$))
          .subscribe((contact: Contact | undefined) => {
            if(contact){
              this.contact = contact;
            }
              
          });
  }

  public deleteContact(): void {
    if (!this.contact) return;
    this.#contactService.deleteContact(this.contact.id)
      .pipe(takeUntil(this.#unsubscribe$))
      .subscribe((contact: Contact| undefined) => {
        console.log(contact);
        if(contact){
         this.#router.navigate(['/contacts']);
        }
      });
  }

  public goBack(): void {
    this.#router.navigate(['/contacts']);
  }

  public  editContact(): void {
    this.#router.navigate(['/contacts', this.contact.id, 'edit']);
  }

  public ngOnDestroy(): void {
      this.#unsubscribe$.next();
      this.#unsubscribe$.complete();
  }

}
