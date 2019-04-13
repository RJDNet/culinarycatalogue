import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Project Culinary Catalogue', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Culinary Catalogue');
  });

  it('should navigate to / on Home button click', () => {
    page.homeButtonClick();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
  });

  it('first app-meals-category-item should be present', () => {
    expect(page.getCategoryItem()).toBeDefined();
  });

  it('first app-meals-category-item should have innerText of Beef', () => {
    expect(page.getCategoryItemText()).toBe('Beef');
  });

  it(('should change pagination page and show correct app-meals-category-item items'), () => {
    expect(page.paginationClick()).toBe('Side');
  });

  it(('first app-meal-item on pagination page 2 should have innerText of Boulangère Potatoes'), () => {
    expect(page.categoryClick()).toBe('Boulangère Potatoes');
  });

  it(('clicked app-meal-item details title should be Boulangère Potatoes'), () => {
    expect(page.mealClick()).toBe('Boulangère Potatoes');
  });
});
