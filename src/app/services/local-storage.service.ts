import { Injectable } from '@angular/core';
import { Contact } from '../domain-logic';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }



   public setItem(key: string, value: Contact[]): void {
      const valueStr = JSON.stringify(value);
      localStorage.setItem(key, valueStr);
    }


   public getItem(key: string): Contact[] | null {
      const data = localStorage.getItem(key); 
      if(data){
        const parsed = JSON.parse(data);
        return parsed;
      }
      return null;
    }


   public removeItem(key: string): void {
      localStorage.removeItem(key);
    }


   public clear(): void {
      localStorage.clear();
    }

   public addItem(key: string, contact: Contact): void {
      const existingContacts = this.getItem(key) ?? [];
      existingContacts.push(contact);
      this.setItem(key, existingContacts);
    }

    public updateItem(key: string, updatedItem: Contact): void {
    const items = this.getItem(key) ?? [];
    const index = items.findIndex(item => item.id === updatedItem.id);

    if (index !== -1) {
      items[index] = updatedItem;
      this.setItem(key, items);
    }
    }

}

