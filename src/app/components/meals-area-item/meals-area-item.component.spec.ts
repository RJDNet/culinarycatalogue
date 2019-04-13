// General/Testing Imports
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Required Module/Component Imports
import { MealsAreaItemComponent } from './meals-area-item.component';

describe('MealsAreaItemComponent', () => {
  let component: MealsAreaItemComponent;
  let fixture: ComponentFixture<MealsAreaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [MealsAreaItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsAreaItemComponent);
    component = fixture.componentInstance;

    // Setting meal property mock
    component.meal = {
      strMeal: 'Beef Stew',
      strMealThumb: 'www.areathumb1.com'
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
    it('should render mealAreaItem with meal title text', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.mealAreaItemCategory'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.textContent).toContain(component.meal.strMeal);
    });

    it('should render mealAreaItemImage with meal thumbnail image', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.mealAreaItemImage'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.getAttribute('src')).toContain(component.meal.strMealThumb);
    });
  });
});
