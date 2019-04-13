import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Meals Service
import { MealsService } from '../../services/meals.service';

// AreaSelect Model
import { AreaSelect } from '../../models/AreaSelect';

@Component({
  selector: 'app-meals-controls',
  templateUrl: './meals-controls.component.html',
  styleUrls: ['./meals-controls.component.scss']
})
export class MealsControlsComponent implements OnInit {
  areasData: AreaSelect[];
  selectedArea: any;
  selectValue: any;
  error: string;

  constructor(private mealsService: MealsService, private router: Router) { }

  selectChangeHandler($event: any) {
    this.selectedArea = $event.value;
    this.router.navigateByUrl(`area/${this.selectedArea}`, this.selectedArea);
  }

  ngOnInit() {
    this.mealsService.getMealAreas().subscribe(meals => {
      this.areasData = [...meals.meals];
    }, err => {
      this.error = err;
    });
  }

}
