import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CityListComponent} from './city/city-list/city-list.component';
import {CityCreateComponent} from './city/city-create/city-create.component';


const routes: Routes = [
  {
    path: 'city',
    loadChildren: () => import('./city/city/city.module').then(module => module.CityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
