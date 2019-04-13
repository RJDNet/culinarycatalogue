// General/Testing Imports
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Required Module/Component Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  @Component({
    selector: 'app-meals-controls',
    template: `<p>Mock meals controls component</p>`
  })
  class MealsControlsMockComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSelectModule
      ],
      declarations: [
        AppComponent,
        MealsControlsMockComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  // Unit Tests
  describe('creation test', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('properties tests', () => {
    it(`should have as title 'Culinary Catalogue'`, () => {
      expect(component.title).toEqual('Culinary Catalogue');
    });
  });

  // Integration Tests
  describe('render tests', () => {
    it('should render title in a h1 tag', () => {
      const h1De: DebugElement = fixture.debugElement;
      const h1Sel = h1De.query(By.css('h1'));
      const h1El: HTMLElement = h1Sel.nativeElement;
      expect(h1El.textContent).toContain(component.title);
    });
  });
});
