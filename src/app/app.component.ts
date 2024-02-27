import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Day, Dish, Week } from './dish';
import { CommonModule } from '@angular/common';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'dieta-app';
  wholeDietWeeks:Week[] = data;


//   weeks = ['Pierwszy','Drugi','Trzeci','Czwarty']
    selectedDishes:Dish[] = [];
    productsToBuy:Product[] = [];
    openAccordion: boolean[] = [];
    productsToBuyLater:Product[] = [];
    allLocations = LocalicationInStore;

  toggleSelection(dish: Dish) {
    dish.selected = !dish.selected;
    this.updateProductsToBuy();
  }

  selectWholeDay(day: Day) {
    day.dishes.forEach(dish => dish.selected = true);
    this.updateProductsToBuy();
    }

    updateProductsToBuy() {
        const allDishes: Dish[] = this.wholeDietWeeks.flatMap(week => week.days.flatMap(day => day.dishes));
        const selectedDishes = allDishes.filter(dish => dish.selected);
        this.productsToBuy =  selectedDishes.flatMap((dishes) => dishes.products);
    }

    removeProduct(product: Product) {
        this.productsToBuy = this.productsToBuy.filter(productInList => productInList !== product);
    }

    toDoProduct(product:Product){
        this.productsToBuyLater.push(product);
        this.removeProduct(product);
    }
    removeProductLater(product: Product) {
        this.productsToBuyLater = this.productsToBuyLater.filter(productInList => productInList !== product);
    }
}

export enum LocalicationInStore{
    LODOWKA = "Lodówka",
    OWOCE = "Owoce i Warzywa",
    PIECZYWO = "Pieczywo",
    MĄKI = "Mąki i orzechy i konserwy",
    PRZYPRAWY = "Przyprawy",
    KONSERWY = "Konserwy i przetwory",
}

const data:Week[] = [
    {   number:1,
        days:[
            {
                name:"Poniedziałek",
                dishes:[
                    {
                        name: "KANAPKI Z SEREM ŻÓŁTYM, AWOKADO I OGÓRKIEM KISZONYM",
                        products: [
                            {
                                name: "Ser żółty",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Plasterek"
                            },
                            {
                                name: "Awokado",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.7",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Chleb żytni razowy",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Pieczywo",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Kromka"
                            },
                            {
                                name: "Ogórek kiszony",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Masło",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Plasterek"
                            },
                            {
                                name: "Sałata lodowa",
                                amount: 20,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Liść"
                            }
                        ],
                    typeOfDish: "Śniadanie",
                    },


                    {
                        name: "OWSIANKA Z JABŁKIEM I MASŁEM ORZECHOWYM",
                        products: [
                            {
                                name: "Jogurt naturalny",
                                amount: 150,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "7.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Jabłko",
                                amount: 150,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Płatki owsiane",
                                amount: 40,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Masło orzechowe",
                                amount: 23,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Cynamon",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Drugie Śniadanie",
                    },

                    {
                        name: "LECZO Z INDYKIEM I CUKINIĄ",
                        products: [
                            {
                                name: "Pomidory z puszki (krojone)",
                                amount: 400,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Porcja"
                            },
                            {
                                name: "Mięso z piersi indyka, bez skóry",
                                amount: 250,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "2.5",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Cukinia",
                                amount: 150,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Cebula",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Papryka czerwona",
                                amount: 70,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Czosnek",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Ząbek"
                            },
                            {
                                name: "Zioła prowansalskie",
                                amount: 3,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Sól biała",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Obiad",
                    },
                    {
                        name: "ŁAGODNA SAŁATKA Z BROKUŁEM, FETĄ I KUKURYDZĄ",
                        products: [
                            {
                                name: "Brokuły",
                                amount: 250,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Sałata lodowa",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "6",
                                suggestedPortionUnit: "Liść"
                            },
                            {
                                name: "Kukurydza, konserwowa",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "8",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Ser typu 'Feta'",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Lodówka'",
                                suggestedPortion: "1.2",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Podwieczorek",
                    },

                    {
                        name: "JAJECZNICA Z SUSZONYMI POMIDORAMI",
                        products: [
                            {
                                name: "Jaja kurze całe",
                                amount: 168,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Suszone pomidory",
                                amount: 14,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Masło ekstra",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Czosnek",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Ząbek"
                            },
                            {
                                name: "Bazylia (świeża)",
                                amount: 4,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Listek"
                            }
                        ],
                        typeOfDish: "Kolacja",
                    },
                    


                ]
            },
            {
                name:"Wtorek",
                dishes:[
                    {
                        name: "Jajecznica na pomidorze",
                        products: [
                            {
                                name: "Jaja kurze całe",
                                amount: 168,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Pomidor",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Chleb żytni razowy",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Pieczywo",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Kromka"
                            },
                            {
                                name: "Roszponka",
                                amount: 25,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1.2",
                                suggestedPortionUnit: "Garść"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 20,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Sól biała",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Śniadanie",
                        },
                        {
                        name: "Owianka na Jabłku i Awokado",
                        products: [
                            {
                                name: "Jabłko",
                                amount: 150,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Mleko spożywcze, 1.5% tłuszczu",
                                amount: 125,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Szklanka"
                            },
                            {
                                name: "Awokado",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.7",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Masło orzechowe",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Wiórki kokosowe",
                                amount: 12,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Płatki owsiane",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "DRUGIE ŚNIADANIE",
                        },
                        {
                        name: "Makaron z suszonmi pomidorami",
                        products: [
                            {
                                name: "Cebula",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Makaron pełnoziarnisty",
                                amount: 80,
                                unit: "g",
                                localicationInStore: "Makarony",
                                suggestedPortion: "1.1",
                                suggestedPortionUnit: "Szklanka"
                            },
                            {
                                name: "Mleczko kokosowe (21%)",
                                amount: 40,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Suszone pomidory",
                                amount: 28,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Curry",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "5",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Czosnek",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Ząbek"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 4,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Bazylia (świeża)",
                                amount: 3,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Listek"
                            },
                            {
                                name: "Sól biała",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Obiad",
                        },
                        {
                        name: "Banan z czekoladą",
                        products: [
                            {
                                name: "Banan",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Migdały",
                                amount: 25,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1.7",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Czekolada gorzka",
                                amount: 24,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Kostka"
                            }
                        ],
                        typeOfDish: "Podwieczorek",
                        },
                        {
                        name: "Sałatka z brokuła",
                        products: [
                            {
                                name: "Brokuły",
                                amount: 200,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.4",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Papryka czerwona",
                                amount: 70,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Polędwica sopocka",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Plasterek"
                            },
                            {
                                name: "Kasza bulgur",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "4.6",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Roszponka",
                                amount: 50,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2.5",
                                suggestedPortionUnit: "Garść"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Kurkuma",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "0.4",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Kolacja",
                        }    
                ]
            },{
                name:"Środa",
                dishes:[
                    {
                        name: "ŚNIADANIE",
                        products: [
                            {
                                name: "Banan",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Czarne jagody, mrożone",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Mrożonki",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Opakowanie"
                            },
                            {
                                name: "Mleczko kokosowe (21%)",
                                amount: 80,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Płatki owsiane",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Orzechy włoskie",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Śniadanie",
                    },
                    {
                        name: "DRUGIE ŚNIADANIE",
                        products: [
                            {
                                name: "Sałata lodowa",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "6",
                                suggestedPortionUnit: "Liść"
                            },
                            {
                                name: "Łosoś, wędzony",
                                amount: 75,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "2.5",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Rzodkiewka",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ser typu 'Feta'",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "1.2",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Roszponka",
                                amount: 25,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1.2",
                                suggestedPortionUnit: "Garść"
                            },
                            {
                                name: "Koper ogrodowy",
                                amount: 16,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Szczypiorek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Dynia, pestki, łuskane",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Drugie Śniadanie",
                    },
                    {
                        name: "OBIAD",
                        products: [
                            {
                                name: "Mięso z ud kurczaka, bez skóry",
                                amount: 250,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "2.5",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Ziemniaki",
                                amount: 210,
                                unit: "g",
                                localicationInStore: "Warzywniak",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Warzywa na patelnię z brokułami",
                                amount: 200,
                                unit: "g",
                                localicationInStore: "Warzywniak",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Porcja"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Sok cytrynowy",
                                amount: 6,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Oregano (suszone)",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "0.3",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Obiad",
                    },
                    {
                        name: "PODWIECZOREK",
                        products: [
                            {
                                name: "Banan",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Masło orzechowe",
                                amount: 50,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "3.3",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Podwieczorek",
                    },
                    {
                        name: "KOLACJA",
                        products: [
                            {
                                name: "Pomidor",
                                amount: 180,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ser twarogowy półtłusty",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Opakowanie"
                            },
                            {
                                name: "Bułki grahamki",
                                amount: 65,
                                unit: "g",
                                localicationInStore: "Pieczywo",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Szpinak",
                                amount: 25,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Garść"
                            },
                            {
                                name: "Słonecznik, nasiona, łuskane",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Masło ekstra",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Kolacja",
                    }

                ]
            },{
                name:"Czwartek",
                dishes:[
                    {
                        name: "Omlet",
                        products: [
                            {
                                name: "Jaja kurze całe",
                                amount: 168,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Kukurydza, konserwowa",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Konserwy",
                                suggestedPortion: "8",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Pomidory koktajlowe",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Chleb żytni razowy",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Pieczywo",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Kromka"
                            },
                            {
                                name: "Masło ekstra",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Curry",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Śniadanie",
                    },
                    {
                        name: "DRUGIE ŚNIADANIE",
                        products: [
                            {
                                name: "Borówki amerykańskie",
                                amount: 125,
                                unit: "g",
                                localicationInStore: "Mrożonki",
                                suggestedPortion: "2.5",
                                suggestedPortionUnit: "Garść"
                            },
                            {
                                name: "Banan",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ryż brązowy",
                                amount: 50,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "3.3",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Nasiona chia",
                                amount: 15,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Cynamon",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Drugie Śniadanie",
                    },
                    {
                        name: "OBIAD",
                        products: [
                            {
                                name: "Pieczarka uprawna, świeża",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Jogurt naturalny",
                                amount: 100,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Jaja kurze całe",
                                amount: 56,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Polędwica sopocka",
                                amount: 45,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Plasterek"
                            },
                            {
                                name: "Mąka pszenna (typ 2000, pełnoziarnista)",
                                amount: 45,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Mąka żytnia, typ 1400",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Obiad",
                    },
                    {
                        name: "PODWIECZOREK",
                        products: [
                            {
                                name: "Gruszka",
                                amount: 260,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Jogurt naturalny",
                                amount: 150,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "7.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Płatki owsiane",
                                amount: 25,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Orzechy włoskie",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Wiórki kokosowe",
                                amount: 12,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Podwieczorek",
                    },
                    {
                        name: "KOLACJA",
                        products: [
                            {
                                name: "Papryka czerwona",
                                amount: 140,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ogórek",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ser typu 'Feta'",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Lodówka",
                                suggestedPortion: "1.2",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Kiełki rzodkiewki",
                                amount: 24,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 15,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Ocet jabłkowy z dojrzałych jabłek",
                                amount: 3,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Oregano (suszone)",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "0.3",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Bazylia (suszona)",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "0.2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Kolacja",
                    }
                ]
            },{
                name:"Piątek",
                dishes:[
                    {
                        name: "ŚNIADANIE",
                        products: [
                            {
                                name: "Makrela, wędzona",
                                amount: 125,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ogórek",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Bułki grahamki",
                                amount: 65,
                                unit: "g",
                                localicationInStore: "Pieczywo",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Pietruszka, liście",
                                amount: 12,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 5,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Śniadanie",
                    },
                    {
                        name: "DRUGIE ŚNIADANIE",
                        products: [
                            {
                                name: "Mleko spożywcze, 1,5 % tłuszczu",
                                amount: 250,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szklanka"
                            },
                            {
                                name: "Gruszka",
                                amount: 130,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Płatki owsiane",
                                amount: 40,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Wiórki kokosowe",
                                amount: 12,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Czekolada gorzka",
                                amount: 6,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Kostka"
                            }
                        ],
                        typeOfDish: "Drugie Śniadanie",
                    },
                    {
                        name: "OBIAD",
                        products: [
                            {
                                name: "Pomidory z puszki (krojone)",
                                amount: 200,
                                unit: "g",
                                localicationInStore: "Konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Porcja"
                            },
                            {
                                name: "Fasola czerwona w zalewie (konserwowa)",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Konserwy",
                                suggestedPortion: "6",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Kasza bulgur",
                                amount: 70,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "5.4",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Cebula",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.3",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Koncentrat pomidorowy, 30%",
                                amount: 25,
                                unit: "g",
                                localicationInStore: "Przetwory pomidorowe",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Czosnek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Ząbek"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Oregano (suszone)",
                                amount: 6,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Ziele angielskie",
                                amount: 4,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Oregano (suszone)",
                                amount: 3,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Liść laurowy",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Listek"
                            },
                            {
                                name: "Kminek mielony",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "0.2",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Obiad",
                    },
                    {
                        name: "PODWIECZOREK",
                        products: [
                            {
                                name: "Pomarańcza",
                                amount: 200,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Kiwi",
                                amount: 150,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Jogurt naturalny",
                                amount: 50,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "2.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Orzechy włoskie",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Podwieczorek",
                    },
                    {
                        name: "KOLACJA",
                        products: [
                            {
                                name: "Cukinia",
                                amount: 300,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Pomidory z puszki (krojone)",
                                amount: 200,
                                unit: "g",
                                localicationInStore: "Konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Porcja"
                            },
                            {
                                name: "Wołowina, polędwica",
                                amount: 200,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Oliwki czarne",
                                amount: 60,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 15,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Czosnek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Ząbek"
                            },
                            {
                                name: "Bazylia (suszona)",
                                amount: 4,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Oregano (suszone)",
                                amount: 3,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Kolacja",
                    }
                ]
            },{
                name:"Sobota",
                dishes:[
                    {
                        name: "ŚNIADANIE",
                        products: [
                            {
                                name: "Ser twarogowy półtłusty",
                                amount: 100,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Opakowanie"
                            },
                            {
                                name: "Awokado",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.7",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Pietruszka, liście",
                                amount: 12,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Koper ogrodowy",
                                amount: 8,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Bazylia (suszona)",
                                amount: 8,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Sól biała",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "5",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Czosnek granulowany",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Papryka czerwona",
                                amount: 140,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            }
                        ],
                        typeOfDish: "Śniadanie",
                    },
                    {
                        name: "DRUGIE ŚNIADANIE",
                        products: [
                            {
                                name: "Jabłko",
                                amount: 300,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Banan",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Migdały",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Mąki i orzechy i konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Drugie Śniadanie",
                    },
                    {
                        name: "OBIAD",
                        products: [
                            {
                                name: "Pomidory z puszki (krojone)",
                                amount: 200,
                                unit: "g",
                                localicationInStore: "Konserwy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Porcja"
                            },
                            {
                                name: "Tuńczyk w sosie własnym",
                                amount: 120,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Makaron spaghetti pełnoziarnisty",
                                amount: 100,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Porcja"
                            },
                            {
                                name: "Szpinak",
                                amount: 75,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Garść"
                            },
                            {
                                name: "Cebula",
                                amount: 50,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Oliwki czarne",
                                amount: 15,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Bazylia (świeża)",
                                amount: 4,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Listek"
                            }
                        ],
                        typeOfDish: "Obiad",
                    },
                    {
                        name: "PODWIECZOREK",
                        products: [
                            {
                                name: "Mąka pszenna, typ 550",
                                amount: 40,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "2.7",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Masło orzechowe",
                                amount: 30,
                                unit: "g",
                                localicationInStore: "Masła i masła orzechowego",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Miód pszczeli",
                                amount: 24,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Czekolada gorzka",
                                amount: 12,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Kostka"
                            },
                            {
                                name: "Proszek do pieczenia",
                                amount: 2,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "0.7",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Podwieczorek",
                    },
                    {
                        name: "KOLACJA",
                        products: [
                            {
                                name: "Bagietki francuskie",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Pieczywo",
                                suggestedPortion: "0.7",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Oliwki czarne",
                                amount: 90,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "6",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Sok cytrynowy",
                                amount: 3,
                                unit: "g",
                                localicationInStore: LocalicationInStore.OWOCE,
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Sól biała",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Kolacja",
                    }
                ]
            },{
                name:"Niedziela",
                dishes:[
                    {
                        name: "ŚNIADANIE",
                        products: [
                            {
                                name: "Pomidor",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Chleb żytni razowy",
                                amount: 90,
                                unit: "g",
                                localicationInStore: "Pieczywo",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Kromka"
                            },
                            {
                                name: "Ser, gouda tłusty",
                                amount: 45,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Plasterek"
                            },
                            {
                                name: "Masło ekstra",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżeczka"
                            }
                        ],
                        typeOfDish: "Śniadanie",
                    },
                    {
                        name: "DRUGIE ŚNIADANIE",
                        products: [
                            {
                                name: "Jaja kurze całe",
                                amount: 224,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "4",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Cukinia",
                                amount: 150,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ser typu 'Feta'",
                                amount: 60,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "1.2",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Marchew",
                                amount: 45,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Bazylia (świeża)",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "5",
                                suggestedPortionUnit: "Listek"
                            },
                            {
                                name: "Sól biała",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Drugie Śniadanie",
                    },
                    {
                        name: "OBIAD",
                        products: [
                            {
                                name: "Wieprzowina, schab surowy bez kości",
                                amount: 200,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Kawałek"
                            },
                            {
                                name: "Marchew",
                                amount: 90,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Por",
                                amount: 70,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "0.5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Seler korzeniowy",
                                amount: 60,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Plaster"
                            },
                            {
                                name: "Ryż brązowy",
                                amount: 50,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "3.3",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Pietruszka, korzeń",
                                amount: 50,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Olej rzepakowy",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 2,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Sól biała",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Obiad",
                    },
                    {
                        name: "PODWIECZOREK",
                        products: [
                            {
                                name: "Serek wiejski (naturalny)",
                                amount: 200,
                                unit: "g",
                                localicationInStore: LocalicationInStore.LODOWKA,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Opakowanie"
                            },
                            {
                                name: "Granat",
                                amount: 100,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Płatki owsiane",
                                amount: 30,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Miód pszczeli",
                                amount: 24,
                                unit: "g",
                                localicationInStore: LocalicationInStore.KONSERWY,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            }
                        ],
                        typeOfDish: "Podwieczorek",
                    },
                    {
                        name: "KOLACJA",
                        products: [
                            {
                                name: "Bulion warzywny (domowy)",
                                amount: 500,
                                unit: "g",
                                localicationInStore: "Konserwy i przetwory",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Szklanka"
                            },
                            {
                                name: "Marchew",
                                amount: 225,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "5",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Ziemniaki",
                                amount: 140,
                                unit: "g",
                                localicationInStore: "Owoce i Warzywa",
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Sztuka"
                            },
                            {
                                name: "Fasola czerwona w zalewie (konserwowa)",
                                amount: 120,
                                unit: "g",
                                localicationInStore: "Konserwy i przetwory",
                                suggestedPortion: "6",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Sok cytrynowy",
                                amount: 12,
                                unit: "g",
                                localicationInStore: LocalicationInStore.OWOCE,
                                suggestedPortion: "2",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Słonecznik, nasiona, łuskane",
                                amount: 10,
                                unit: "g",
                                localicationInStore: "Orzechy i nasiona",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Oliwa z oliwek",
                                amount: 10,
                                unit: "g",
                                localicationInStore: LocalicationInStore.MĄKI,
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżka"
                            },
                            {
                                name: "Mielona słodka papryka",
                                amount: 5,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Łyżeczka"
                            },
                            {
                                name: "Pieprz czarny mielony",
                                amount: 3,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "3",
                                suggestedPortionUnit: "Szczypta"
                            },
                            {
                                name: "Sól biała",
                                amount: 1,
                                unit: "g",
                                localicationInStore: "Przyprawy",
                                suggestedPortion: "1",
                                suggestedPortionUnit: "Szczypta"
                            }
                        ],
                        typeOfDish: "Kolacja",
                    }
                ]
            }
        ]
        
    },
];




