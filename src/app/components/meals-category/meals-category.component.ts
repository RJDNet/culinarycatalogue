import { Component, OnInit } from '@angular/core';

// Meals Service
import { MealsService } from '../../services/meals.service';

// Category Model
import { Category } from '../../models/Category';

@Component({
  selector: 'app-meals-category',
  templateUrl: './meals-category.component.html',
  styleUrls: ['./meals-category.component.scss']
})
export class MealsCategoryComponent implements OnInit {
  p = 1;
  categoriesData: Category[];
  error: string;
  showLoader: boolean;

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    // Loader
    this.showLoader = true;

    // Service
    this.mealsService.getMealCategories().subscribe(category => {
      this.showLoader = false;
      this.categoriesData = [...category.categories];
    }, err => {
      this.showLoader = false;
      this.error = err;
    });
  }

}
