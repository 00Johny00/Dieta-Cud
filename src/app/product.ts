export class Product {
    name:string;
    amount: number;
    unit:string
    localicationInStore:string;
    suggestedPortion: string
    suggestedPortionUnit: string 

    constructor(name: string, amount: number,    unit:string, localicationInStore:string, suggestedPortion: string,suggestedPortionUnit: string){
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.localicationInStore = localicationInStore
        this.suggestedPortion = suggestedPortion
        this.suggestedPortionUnit = suggestedPortionUnit
    }
}