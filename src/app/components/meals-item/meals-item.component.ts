import { Component, OnInit, Input } from '@angular/core';

// Meal Model
import { Meal } from '../../models/Meal';

@Component({
  selector: 'app-meals-item',
  templateUrl: './meals-item.component.html',
  styleUrls: ['./meals-item.component.scss']
})
export class MealsItemComponent implements OnInit {
  @Input() meal: Meal;

  constructor() { }

  ngOnInit() {
  }

}
