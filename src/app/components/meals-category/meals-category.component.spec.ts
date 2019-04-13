// General/Testing Imports
import { Component, Input, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Required Module/Component Imports
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MealsCategoryComponent } from './meals-category.component';

// Model Imports
import { Category } from '../../models/Category';

describe('MealsCategoryComponent', () => {
  let component: MealsCategoryComponent;
  let fixture: ComponentFixture<MealsCategoryComponent>;

  @Component({
    selector: 'app-meals-category-item',
    template: `<p>Mock meals category item component</p>`
  })
  class MealsCategoryItemMockComponent {
    @Input() category: Category;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxPaginationModule,
        MatProgressSpinnerModule,
      ],
      declarations: [
        MealsCategoryComponent,
        MealsCategoryItemMockComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsCategoryComponent);
    component = fixture.componentInstance;
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
    it('should have a property for pagination', () => {
      expect(component.p).toBe(1);
    });

    it('should have a property for collection of meals data', () => {
      expect(component.categoriesData).toBeUndefined();
    });

    it('should have a property for errors if http fails', () => {
      expect(component.error).toBeUndefined();
    });

    it('should have a property for loader', () => {
      expect(component.showLoader).toBeTruthy();
    });
  });

  // Integration Tests
  describe('render tests', () => {
    it('should render spinner div element if showLoader property is truthy', () => {
      const loadingDe: DebugElement = fixture.debugElement;
      const loadingSel = loadingDe.query(By.css('.spinner'));
      const loadingEl: HTMLElement = loadingSel.nativeElement;
      expect(loadingEl).toBeTruthy();
    });

    it('should not render spinner div element if showLoader property is falsy', () => {
      component.showLoader = false;

      fixture.detectChanges();
      const loadingDe: DebugElement = fixture.debugElement;
      const loadingSel = loadingDe.query(By.css('.spinner'));
      expect(loadingSel).toBeNull();
    });

    it('should render mat-spinner element', () => {
      const loadingDe: DebugElement = fixture.debugElement;
      const loadingSel = loadingDe.query(By.css('mat-spinner'));
      const loadingEl: HTMLElement = loadingSel.nativeElement;
      expect(loadingEl).toBeTruthy();
    });

    it('should have an error element that is initially null', () => {
      const errorDe: DebugElement = fixture.debugElement;
      const errorSel = errorDe.query(By.css('.error'));
      expect(errorSel).toBeNull();
    });

    it('should render error element with text content if error property is populated', () => {
      component.error = 'Sorry, there was an error!';

      fixture.detectChanges();
      const errorDe: DebugElement = fixture.debugElement;
      const errorSel = errorDe.query(By.css('.error'));
      const errorEl: HTMLElement = errorSel.nativeElement;
      expect(errorEl).toBeTruthy();
      expect(errorEl.textContent).toEqual(component.error);
    });

    it('should render app-meals-item elements if mealsData property is populated', () => {
      component.categoriesData = [
        {
          strCategory: 'Beef Stew',
          strCategoryThumb: 'www.categorythumb1.com'
        },
        {
          strCategory: 'Chicken Vindaloo',
          strCategoryThumb: 'www.categorythumb2.com'
        }
      ];

      fixture.detectChanges();
      const categoryMealsItemDe: DebugElement = fixture.debugElement;
      const categoryMealsItemSel = categoryMealsItemDe.query(By.css('app-meals-category-item'));
      const categoryMealsItemEl: HTMLElement = categoryMealsItemSel.nativeElement;
      expect(categoryMealsItemEl).toBeTruthy();
    });
  });

});
