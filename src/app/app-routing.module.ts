import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { AftersearchComponent } from './aftersearch/aftersearch.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'details/:id', component: DetailsComponent },
  {path: 'aftersearch/:id', component:AftersearchComponent},
  { path: '**', redirectTo: '/search' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
