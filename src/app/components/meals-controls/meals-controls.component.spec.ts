// General/Testing Imports
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Required Module/Component Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MealsControlsComponent } from './meals-controls.component';

describe('MealsControlsComponent', () => {
  let component: MealsControlsComponent;
  let fixture: ComponentFixture<MealsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatSelectModule
      ],
      declarations: [MealsControlsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  // Unit Tests
  describe('creation test', () => {
    it('should create component', () => {
      expect(component).toBeDefined();
    });
  });

  describe('properties tests', () => {
    it('should have a property for collection of area data', () => {
      expect(component.areasData).toBeUndefined();
    });

    it('should have a property for selected area of selection box', () => {
      expect(component.selectedArea).toBeUndefined();
    });

    it('should have a property for errors if http fails', () => {
      expect(component.error).toBeUndefined();
    });
  });

  // Integration Tests
  describe('render tests', () => {
    it('should render a button with Home text content', () => {
      const buttonDe: DebugElement = fixture.debugElement;
      const buttonCSS = buttonDe.query(By.css('.homeBut'));
      const buttonEl: HTMLElement = buttonCSS.nativeElement;
      expect(buttonEl.textContent).toEqual('Home');
    });

    it('should have a href leading to / route when Home button is clicked', () => {
      const buttonDe: DebugElement = fixture.debugElement;
      const buttonCSS = buttonDe.query(By.css('.homeLink'));
      const buttonEl = buttonCSS.nativeElement.getAttribute('href');
      expect(buttonEl).toEqual('/');
    });

    it('should render mat-label with Meals by Area text content', async () => {
      fixture.detectChanges();
      const areaSelectDe: DebugElement = fixture.debugElement;
      const areaSelectSel = areaSelectDe.query(By.css('mat-label'));
      const areaSelectEl: HTMLElement = areaSelectSel.nativeElement;
      expect(areaSelectEl.textContent).toEqual('Meals by Area');
    });

  });
});
