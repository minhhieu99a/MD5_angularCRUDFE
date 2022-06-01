import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import {CityCreateComponent} from '../city-create/city-create.component';
import {CityListComponent} from '../city-list/city-list.component';
import {CityDeleteComponent} from '../city-delete/city-delete.component';
import {CityEditComponent} from '../city-edit/city-edit.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    CityCreateComponent,
    CityListComponent,
    CityDeleteComponent,
    CityEditComponent
  ],
  imports: [
    CityRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CityModule { }
