import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Meals Service
import { MealsService } from '../../services/meals.service';

// Meal Model
import { Meal } from '../../models/Meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  p = 1;
  meals: string;
  mealsData: Meal[];
  error: string;
  showLoader: boolean;

  constructor(private route: ActivatedRoute, private mealsService: MealsService) { }

  ngOnInit() {
    // Loader
    this.showLoader = true;

    // Route Parameter
    this.meals = this.route.snapshot.paramMap.get('id');

    // Service
    this.mealsService.getMealsByCategory(this.meals).subscribe(meals => {
      this.showLoader = false;
      this.mealsData = [...meals.meals];
    }, err => {
      this.showLoader = false;
      this.error = err;
    });
  }
}
