import { Address } from "./address.class";
import { uuid } from 'uuidv4';

export class Contact {
    public id: string;
    public firstName: string;
    public lastName: string;
    public namesufix?: string;
    public email: string;
    public phone: string;
    public address?: Address;

    constructor(data: any) {
        this.id = data.id ?? uuid();
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.namesufix = data.namesufix ?? undefined;
        this.email = data.email;
        this.phone = data.phone;
        if(data.address){
            this.address = data.address;
        }
    }
}
