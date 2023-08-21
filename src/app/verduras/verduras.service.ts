import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerdurasService {

  public verduras = [
    {
      id:"1",
      name:"zapallo",
    },
    {
      id:"2",
      name:"lechuga",
    },
    {
      id:"3",
      name:"chicoria"
    },
  ]

  constructor() {}

  getAllVerduras () {
    return [...this.verduras];
  }

  getVerdura (verdurasId: string){
    return{
      ...this.verduras.find(v => {
        return v.id === verdurasId;
      })
    };
  }
}
