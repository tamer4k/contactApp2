import { Routes } from '@angular/router';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactAddComponent } from './contact/contact-add/contact-add.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';

export const routes: Routes = [
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactListComponent},
  { path: 'contacts/add', component: ContactAddComponent },
  {path: 'contacts/:id', component: ContactDetailsComponent},
  { path: 'contacts/:id/edit', component: ContactEditComponent }
  
];
