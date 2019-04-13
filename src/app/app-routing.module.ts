import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsCategoryComponent } from './components/meals-category/meals-category.component';
import { MealsComponent } from './components/meals/meals.component';
import { MealsDetailsComponent } from './components/meals-details/meals-details.component';
import { MealsAreaComponent } from './components/meals-area/meals-area.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MealsCategoryComponent },
  { path: 'category/:id', component: MealsComponent },
  { path: 'area/:id', component: MealsAreaComponent },
  { path: 'meal/:id', component: MealsDetailsComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
