import { Component, OnInit } from '@angular/core';
import { VerdurasService } from "./verduras.service";

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {

  public verduras = [{
    id:"0",
    name:"test",
  }]

  constructor(private verdurasService: VerdurasService) { }

  ngOnInit() {
    this.verduras = this.verdurasService.getAllVerduras();
  }

}
