// search.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  search() {
    this.router.navigate(['aftersearch/:id'], { queryParams: { query: this.searchText } });
  }
}
