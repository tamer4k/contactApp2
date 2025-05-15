import { v4 as uuidv4 } from 'uuid';


export class Address{
    public id: string;
    public street: string;
    public houseNumber: number;
    public houseNumberSuffix?: string;
    public city: string;
    public zip: string;

  constructor(data?: Partial<Address>) {
    this.id = data?.id ?? uuidv4();
    this.street = data?.street ?? '';
    this.city = data?.city ?? '';
    this.zip = data?.zip ?? '';
    this.houseNumber = data?.houseNumber ?? 0;
    this.houseNumberSuffix = data?.houseNumberSuffix;
  }

}
