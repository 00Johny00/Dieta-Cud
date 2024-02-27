import { Product } from "./product";

export class Dish {

    name: string
    products:Product[];
    typeOfDish:string;
    selected?:boolean;

    constructor(name: string, products: Product[],typeOfDish:string){
        this.name = name
        this.products = products
        this.typeOfDish = typeOfDish
        this.selected = false;
    }
}


 export interface Day {
    name: string;
    dishes: Dish[];
  }

export  interface Week {
    number: number;
    days: Day[];
  }