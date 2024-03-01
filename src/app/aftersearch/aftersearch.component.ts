
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-aftersearch',
  templateUrl: './aftersearch.component.html',
  styleUrls: ['./aftersearch.component.css']
})
export class AftersearchComponent implements OnInit {
  recipes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      const searchText = params['query'];
      
      this.apiService.getSearchResults(searchText).subscribe(
        (data: any) => {
         
          this.recipes = data.results;
        },
        error => {
          console.log('Error fetching search results:', error);
        }
      );
    });
  }

  viewDetails(recipeId: number) {
    
    this.router.navigate(['/details', recipeId]);
  }
}
