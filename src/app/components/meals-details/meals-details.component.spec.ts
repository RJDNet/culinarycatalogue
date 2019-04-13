// General/Testing Imports
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Required Module/Component Imports
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MealsDetailsComponent } from './meals-details.component';

describe('MealsDetailsComponent', () => {
  let component: MealsDetailsComponent;
  let fixture: ComponentFixture<MealsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatProgressSpinnerModule
      ],
      declarations: [MealsDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsDetailsComponent);
    component = fixture.componentInstance;

    // Setting detailsData property mock
    component.detailsData = {
      strMeal: 'Beef Stew',
      strCategory: 'British',
      strArea: 'British',
      strInstructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et purus ac neque porta porttitor.',
      strMealThumb: 'www.detailsthumb1.com'
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
    it('should have a property for collection of meals data', () => {
      expect(component.detailsData).toBeDefined();
    });

    it('should have a property for meals item route parameter', () => {
      expect(component.details).toBeNull();
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

    it('should render detailsTitle with meal title text', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.detailsTitle'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.textContent).toContain(component.detailsData.strMeal);
    });

    it('should render detailsImage with meal thumbnail image', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.detailsImage'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.getAttribute('src')).toContain(component.detailsData.strMealThumb);
    });

    it('should render detailsCategory with meal category text', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.detailsCategory'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.textContent).toContain(component.detailsData.strCategory);
    });

    it('should render detailsArea with meal area text', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.detailsArea'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.textContent).toContain(component.detailsData.strArea);
    });

    it('should render detailsInstructionsHeader with Instructions text', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.detailsInstructionsHeader'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.textContent).toContain('Instructions');
    });

    it('should render detailsInstructions with meal instructions text', () => {
      fixture.detectChanges();
      const areaMealsItemDe: DebugElement = fixture.debugElement;
      const areaMealsItemSel = areaMealsItemDe.query(By.css('.detailsInstructions'));
      const areaMealsItemEl: HTMLElement = areaMealsItemSel.nativeElement;
      expect(areaMealsItemEl.textContent).toContain(component.detailsData.strInstructions);
    });
  });
});
