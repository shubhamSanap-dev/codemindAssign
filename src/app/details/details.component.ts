
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recipeId!: string;
  recipeDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      this.getRecipeDetails(this.recipeId);
    });
  }

  getRecipeDetails(id: string): void {
    this.apiService.getRecipeInformation(Number(id)).subscribe(
      (data: any) => {
        this.recipeDetails = data;
        console.log('Recipe Details:', this.recipeDetails);
      },
      error => {
        console.error('Error fetching recipe details:', error);
      }
    );
  }
}
