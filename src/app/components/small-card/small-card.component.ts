import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  
  @Input()
  photoCover:string = "https://midias.correiobraziliense.com.br/_midias/jpg/2022/06/24/hotd_ka_hbo_max_organic_1x1_bra__2_-25934247.jpg"
  
  @Input()
  cardTitle:string = "Segunda temporada de A Casa do Dragão"

  constructor() { }

  ngOnInit(): void {
  }

}
