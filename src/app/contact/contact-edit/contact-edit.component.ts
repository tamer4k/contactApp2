import { Component, OnInit } from '@angular/core';
import { Contact } from '../../domain-logic';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.scss'
})
export class ContactEditComponent implements OnInit{
contact: Contact = new Contact();

constructor(    
  private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContactById(id).subscribe(c => {
        if (c) this.contact = new Contact(c);
      });
    }
  }
  
  onSubmit(): void {
    this.contactService.updateContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

}
