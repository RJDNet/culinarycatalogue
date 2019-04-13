import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Meals Service
import { MealsService } from '../../services/meals.service';

// Area Model
import { Area } from '../../models/Area';

@Component({
  selector: 'app-meals-area',
  templateUrl: './meals-area.component.html',
  styleUrls: ['./meals-area.component.scss']
})
export class MealsAreaComponent implements OnInit {
  p = 1;
  area: string;
  areaMealsData: Area[];
  error: string;
  showLoader: boolean;

  constructor(private route: ActivatedRoute, private mealsService: MealsService) { }

  ngOnInit() {
    // Loader
    this.showLoader = true;

    // Route Parameter
    this.route.params.subscribe(params => {
      this.area = params['id'];

      // Service
      this.mealsService.getMealsByArea(this.area).subscribe(meals => {
        this.showLoader = false;
        this.areaMealsData = [...meals.meals];
      }, err => {
        this.showLoader = false;
        this.error = err;
      });
    });
  }
}
