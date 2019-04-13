import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('.appTitle')).getText();
  }

  homeButtonClick() {
    browser.get('http://localhost:4200/category/Beef');
    element(by.css('.homeLink')).click();
  }

  getCategoryItem() {
    return element.all(by.css('.mealCategoryItemCategory')).first();
  }

  getCategoryItemText() {
    return element.all(by.css('.mealCategoryItemCategory')).first().getText();
  }

  paginationClick() {
    element.all(by.css('pagination-controls li')).get(3).click();
    return element.all(by.css('.mealCategoryItemCategory')).first().getText();
  }

  categoryClick() {
    element.all(by.css('.mealCategoryItemLink')).first().click();
    return element.all(by.css('.mealItemCategory')).first().getText();
  }

  mealClick() {
    element.all(by.css('.mealItemLink')).first().click();
    return element.all(by.css('.detailsTitle')).first().getText();
  }

}
