// General/Testing Imports
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Required Module/Component Imports
import { MealsItemComponent } from './meals-item.component';

describe('MealsItemComponent', () => {
  let component: MealsItemComponent;
  let fixture: ComponentFixture<MealsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [MealsItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsItemComponent);
    component = fixture.componentInstance;

    // Setting meal property mock
    component.meal = {
      strMeal: 'Beef Stew',
      strMealThumb: 'www.mealthumb1.com',
      idMeal: '34573'
    };

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  // Unit Tests
  describe('creation test', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('properties tests', () => {
    it('should have a property for meals collection data', () => {
      expect(component.meal).toBeDefined();
    });
  });

  // Integration Tests
  describe('render tests', () => {
    it('should render mealItem with meal title text', () => {
      fixture.detectChanges();
      const mealsItemDe: DebugElement = fixture.debugElement;
      const mealsItemSel = mealsItemDe.query(By.css('.mealItemCategory'));
      const mealsItemEl: HTMLElement = mealsItemSel.nativeElement;
      expect(mealsItemEl.textContent).toContain(component.meal.strMeal);
    });

    it('should render mealItemImage with meal thumbnail image', () => {
      fixture.detectChanges();
      const mealsItemDe: DebugElement = fixture.debugElement;
      const mealsItemSel = mealsItemDe.query(By.css('.mealItemImage'));
      const mealsItemEl: HTMLElement = mealsItemSel.nativeElement;
      expect(mealsItemEl.getAttribute('src')).toContain(component.meal.strMealThumb);
    });
  });
});
