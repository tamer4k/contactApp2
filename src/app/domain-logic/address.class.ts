import { uuid } from 'uuidv4';


export class Address{
    public id: string;
    public street: string;
    public houseNumber: number;
    public houseNumberSuffix?: string;
    public city: string;
    public zip: string;

    constructor(data: any) {
        this.id = data.id ?? uuid();
        this.street = data.street;
        this.houseNumber = data.housenumber;
        this.houseNumberSuffix = data.housenumbersuffix ?? undefined;
        this.city = data.city;
        this.zip = data.zip;
    }

}
