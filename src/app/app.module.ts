// Common Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Services
import { InterceptorService } from './services/interceptor.service';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Main App Component
import { AppComponent } from './app.component';

// Page Components
import { MealsComponent } from './components/meals/meals.component';
import { MealsItemComponent } from './components/meals-item/meals-item.component';
import { MealsCategoryItemComponent } from './components/meals-category-item/meals-category-item.component';
import { MealsCategoryComponent } from './components/meals-category/meals-category.component';
import { MealsDetailsComponent } from './components/meals-details/meals-details.component';
import { MealsAreaComponent } from './components/meals-area/meals-area.component';
import { MealsAreaItemComponent } from './components/meals-area-item/meals-area-item.component';
import { MealsControlsComponent } from './components/meals-controls/meals-controls.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

// Additions
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    // Main App Component
    AppComponent,

    // Category, Meal & Area Components
    MealsComponent,
    MealsCategoryComponent,
    MealsAreaComponent,

    // Category, Meal & Area Item Components
    MealsItemComponent,
    MealsCategoryItemComponent,
    MealsAreaItemComponent,

    // Meal Details Component
    MealsDetailsComponent,

    // Controls
    MealsControlsComponent,

    // Page Not Found
    PageNotFoundComponent
  ],
  imports: [
    // Common Imports
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    // Material Module Imports
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,

    // Additional Imports
    NgxPaginationModule
  ],
  providers: [
    {
      // Interceptor Service Import
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
