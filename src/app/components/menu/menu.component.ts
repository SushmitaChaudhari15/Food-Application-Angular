import { Component, OnInit } from '@angular/core';
import { FoodDetailsService } from 'src/app/services/food-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foodDetails:any;
  constructor(private foodService:FoodDetailsService) { }

  ngOnInit(): void {
    this.foodDetails= this.foodService.foodDetails;
  }

}
