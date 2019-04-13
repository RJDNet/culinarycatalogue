// General/Testing Imports
import { Component, Input, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Required Module/Component Imports
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MealsComponent } from './meals.component';

// Model Imports
import { Meal } from './../../models/Meal';

describe('MealsComponent', () => {
  let component: MealsComponent;
  let fixture: ComponentFixture<MealsComponent>;

  @Component({
    selector: 'app-meals-item',
    template: `<p>Mock meals item component</p>`
  })
  class MealsItemMockComponent {
    @Input() meal: Meal;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxPaginationModule,
        MatProgressSpinnerModule
      ],
      declarations: [
        MealsComponent,
        MealsItemMockComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsComponent);
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
      expect(component.mealsData).toBeUndefined();
    });

    it('should have a property for meals item route parameter', () => {
      expect(component.meals).toBeNull();
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
      component.mealsData = [
        {
          strMeal: 'Beef Stew',
          strMealThumb: 'www.mealthumb1.com',
          idMeal: '52315'
        },
        {
          strMeal: 'Chicken Vindaloo',
          strMealThumb: 'www.mealthumb2.com',
          idMeal: '72532'
        }
      ];

      fixture.detectChanges();
      const mealsItemDe: DebugElement = fixture.debugElement;
      const mealsItemSel = mealsItemDe.query(By.css('app-meals-item'));
      const mealsItemEl: HTMLElement = mealsItemSel.nativeElement;
      expect(mealsItemEl).toBeTruthy();
    });
  });
});
