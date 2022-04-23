import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDetailsService } from 'src/app/services/food-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  foodItems: any;
  getMenuId: any;
  constructor(private foodDetails: FoodDetailsService, private param: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    // console.log(this.getMenuId);
    if (this.getMenuId) {
      this.foodItems = this.foodDetails.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
      // console.log(this.foodItems,'menudata>>');
    }
  }

}
