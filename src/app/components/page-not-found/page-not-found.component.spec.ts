// General/Testing Imports
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Required Module/Component Imports
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  // Unit Tests
  describe('creation test', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  // Integration Tests
  describe('render tests', () => {
    it('should find a button with Home text content', () => {
      const buttonDe: DebugElement = fixture.debugElement;
      const buttonCSS = buttonDe.query(By.css('.pageNotFound'));
      const buttonEl: HTMLElement = buttonCSS.nativeElement;
      expect(buttonEl.textContent).toEqual('Sorry, page not found!');
    });
  });
});
