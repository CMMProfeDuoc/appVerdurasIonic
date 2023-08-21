import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pages = [
    {
      id:"1",
      name:"Tienda",
      imageURL:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Mercado_de_frutas_y_verduras.jpg",
    },
    {
      id:"2",
      name:"Frutas",
      imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/1205px-Fruit_Stall_in_Barcelona_Market.jpg",
    },
    {
      id:"3",
      name:"Verduras",
      imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/1205px-Fruit_Stall_in_Barcelona_Market.jpg"
    },
  ]

  constructor() {}

}
