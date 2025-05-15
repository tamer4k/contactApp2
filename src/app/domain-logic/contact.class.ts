import { Address } from "./address.class";
import { v4 as uuidv4 } from 'uuid';

export class Contact {
    
    static id(id: any) {
        throw new Error('Method not implemented.');
    }
    public id: string;
    public firstName: string;
    public lastName: string;
    public namesufix?: string;
    public email: string;
    public phone: string;
    public address?: Address;

    constructor(data?: Partial<Contact>) {
        this.id = data?.id ?? uuidv4();
        this.firstName = data?.firstName ?? '';
        this.lastName = data?.lastName ?? '';
        this.namesufix = data?.namesufix;
        this.email = data?.email ?? '';
        this.phone = data?.phone ?? '';
        this.address = data?.address ?? new Address();
    }
}
