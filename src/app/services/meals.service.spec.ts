// General/Testing Imports
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Required Module/Component Imports
import { MealsService } from './meals.service';

describe('MealsService', () => {
  let service: MealsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(MealsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // Unit Tests
  describe('creation test', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('testing service http functions', () => {
    it('should return a collection of meal categories', () => {
      const categoryData = {
        categories: [
          {
            strCategory: 'Beef',
            strCategoryThumb: 'www.categorythumb1.com'
          },
          {
            strCategory: 'Chicken',
            strCategoryThumb: 'www.categorythumb2.com'
          }
        ]
      };

      service.getMealCategories().subscribe(res => {
        expect(res.categories.length).toEqual(2);
        expect(res.categories[0].strCategory).toEqual('Beef');
      });
      httpMock.expectOne(`${service.mealsUrl}/categories.php`).flush(categoryData);
    });

    it('should return a collection of meals based on category', () => {
      const category = '';
      const mealData = {
        meals: [
          {
            strMeal: 'Beef Stew',
            strMealThumb: 'www.mealthumb1.com'
          },
          {
            strMeal: 'Chicken Vindaloo',
            strMealThumb: 'www.mealthumb2.com'
          }
        ]
      };

      service.getMealsByCategory(category).subscribe(res => {
        expect(res.meals.length).toEqual(2);
        expect(res.meals[0].strMeal).toEqual('Beef Stew');
      });
      httpMock.expectOne(`${service.mealsUrl}/filter.php?c=${category}`).flush(mealData);
    });

    it('should return a collection of details of a meal', () => {
      const id = '';
      const mealData = {
        meals: [
          {
            strMeal: 'Beef Stew',
            strCategory: 'Beef',
            strArea: 'UK',
            strInstructions: 'Instructions are here',
            strMealThumb: 'www.mealthumb1.com'
          }
        ]
      };

      service.getMealDetails(id).subscribe(res => {
        expect(res.meals.length).toEqual(1);
        expect(res.meals[0].strMeal).toEqual('Beef Stew');
      });
      httpMock.expectOne(`${service.mealsUrl}/lookup.php?i=${id}`).flush(mealData);
    });

    it('should return a collection of Area categories', () => {
      const areaData = {
        meals: [
          {
            strArea: 'American'
          },
          {
            strArea: 'British'
          },
          {
            strArea: 'Canadian'
          }
        ]
      };

      service.getMealAreas().subscribe(res => {
        expect(res.meals.length).toEqual(3);
        expect(res.meals[0].strArea).toEqual('American');
      });
      httpMock.expectOne(`${service.mealsUrl}/list.php?a=list`).flush(areaData);
    });

    it('should return a collection of Meals based on Area', () => {
      const area = '';
      const areaData = {
        meals: [
          {
            strMeal: 'Beef Stew',
            strMealThumb: 'www.mealthumb1.com'
          },
          {
            strMeal: 'Chicken Vindaloo',
            strMealThumb: 'www.mealthumb2.com'
          }
        ]
      };

      service.getMealsByArea(area).subscribe(res => {
        expect(res.meals.length).toEqual(2);
        expect(res.meals[0].strMeal).toEqual('Beef Stew');
      });
      httpMock.expectOne(`${service.mealsUrl}/filter.php?a=${area}`).flush(areaData);
    });
  });
});
