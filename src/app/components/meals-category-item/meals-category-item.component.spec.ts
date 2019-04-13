// General/Testing Imports
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Required Module/Component Imports
import { MatSelectModule } from '@angular/material/select';
import { MealsCategoryItemComponent } from './meals-category-item.component';

describe('MealsCategoryItemComponent', () => {
  let component: MealsCategoryItemComponent;
  let fixture: ComponentFixture<MealsCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSelectModule
      ],
      declarations: [MealsCategoryItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsCategoryItemComponent);
    component = fixture.componentInstance;

    // Setting category property mock
    component.category = {
      strCategory: 'British',
      strCategoryThumb: 'www.categorythumb1.com'
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
    it('should have a property for category collection data', () => {
      expect(component.category).toBeDefined();
    });
  });

  // Integration Tests
  describe('render tests', () => {
    it('should render mealCategoryItem with meal title text', () => {
      fixture.detectChanges();
      const categoryMealsItemDe: DebugElement = fixture.debugElement;
      const categoryMealsItemSel = categoryMealsItemDe.query(By.css('.mealCategoryItemCategory'));
      const categoryMealsItemEl: HTMLElement = categoryMealsItemSel.nativeElement;
      expect(categoryMealsItemEl.textContent).toContain(component.category.strCategory);
    });

    it('should render mealCategoryItemImage with meal thumbnail image', () => {
      fixture.detectChanges();
      const categoryMealsItemDe: DebugElement = fixture.debugElement;
      const categoryMealsItemSel = categoryMealsItemDe.query(By.css('.mealCategoryItemImage'));
      const categoryMealsItemEl: HTMLElement = categoryMealsItemSel.nativeElement;
      expect(categoryMealsItemEl.getAttribute('src')).toContain(component.category.strCategoryThumb);
    });
  });
});
