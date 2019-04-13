import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Meals Service
import { MealsService } from '../../services/meals.service';

// Details Model
import { Details } from '../../models/Details';

@Component({
  selector: 'app-meals-details',
  templateUrl: './meals-details.component.html',
  styleUrls: ['./meals-details.component.scss']
})
export class MealsDetailsComponent implements OnInit {
  details: string;
  detailsData: Details;
  error: string;
  showLoader: boolean;

  constructor(private route: ActivatedRoute, private mealsService: MealsService) { }

  ngOnInit() {
    // Loader
    this.showLoader = true;

    // Route Parameter
    this.details = this.route.snapshot.paramMap.get('id');

    // Service
    this.mealsService.getMealDetails(this.details).subscribe(details => {
      const mapped = details.meals[0];
      this.showLoader = false;
      this.detailsData = mapped;
    }, err => {
      this.showLoader = false;
      this.error = err;
    });
  }

}
