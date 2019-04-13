import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CategoryData } from '../models/CategoryData';
import { MealData } from '../models/MealData';
import { DetailsData } from '../models/DetailsData';
import { AreaData } from '../models/AreaData';
import { AreaSelectData } from '../models/AreaSelectData';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  mealsUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  // Get Categories
  getMealCategories(): Observable<CategoryData> {
    return this.http.get<CategoryData>(`${this.mealsUrl}/categories.php`);
  }

  getMealsByCategory(category: string): Observable<MealData> {
    return this.http.get<MealData>(`${this.mealsUrl}/filter.php?c=${category}`);
  }

  // Get Meal Details
  getMealDetails(id: string): Observable<DetailsData> {
    return this.http.get<DetailsData>(`${this.mealsUrl}/lookup.php?i=${id}`);
  }

  // Get Areas
  getMealAreas(): Observable<AreaSelectData> {
    return this.http.get<AreaSelectData>(`${this.mealsUrl}/list.php?a=list`);
  }

  getMealsByArea(area: string): Observable<AreaData> {
    return this.http.get<AreaData>(`${this.mealsUrl}/filter.php?a=${area}`);
  }
}
