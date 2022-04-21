import { Component, OnInit } from '@angular/core';
import { FoodDetailsService } from 'src/app/services/food-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodDetails:any;
  constructor(private foodService:FoodDetailsService) { }

  ngOnInit(): void {
    this.foodDetails= this.foodService.foodDetails;
  }



}
