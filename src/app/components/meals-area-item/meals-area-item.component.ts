import { Component, OnInit, Input } from '@angular/core';

// Area Model
import { Area } from '../../models/Area';

@Component({
  selector: 'app-meals-area-item',
  templateUrl: './meals-area-item.component.html',
  styleUrls: ['./meals-area-item.component.scss']
})
export class MealsAreaItemComponent implements OnInit {
  @Input() meal: Area;

  constructor() { }

  ngOnInit() {
  }

}
