import { Component, OnInit, Input } from '@angular/core';

// Category Model
import { Category } from '../../models/Category';

@Component({
  selector: 'app-meals-category-item',
  templateUrl: './meals-category-item.component.html',
  styleUrls: ['./meals-category-item.component.scss']
})
export class MealsCategoryItemComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit() {

  }

}

