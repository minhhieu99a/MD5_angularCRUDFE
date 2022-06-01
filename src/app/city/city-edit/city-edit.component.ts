import { Component, OnInit } from '@angular/core';
import {City} from '../../city';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from '../../service/city.service';
import {Country} from '../../country';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  country: Country[] = [] ;
  city: City = {};
  cityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    country: new FormControl(),
    area: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl()
  });
  id: number;
  constructor(private cityService: CityService,
              private router: Router,
              private activetedRouter: ActivatedRoute) {
    this.activetedRouter.paramMap.subscribe((paraMap) => {
     this.id = +paraMap.get('id');
     this.getCityById(this.id);
    });
  }
  get nameControl() {
    return this.cityForm.get('name');
  }
  ngOnInit() {
    this.getAllCountry1();
  }
  getCityById(id: number) {
    return this.cityService.findById(id).subscribe((city) => {
      this.cityForm = new FormGroup({
        id: new FormControl(id),
        name: new FormControl(city.name),
        country: new FormControl(city.country.id),
        area: new FormControl(city.area),
        population: new FormControl(city.population),
        gdp: new FormControl(city.gdp),
        description: new FormControl(city.description),
      });
    });
  }
  getAllCountry1() {
    this.cityService.getAllCountry().subscribe((data) => {
      // console.error(data);
      this.country = data;
      // console.error(this.country1);
    }, (error) => {
      console.log(error);
    });
  }
  updateCities(id: number) {
    const city = this.cityForm.value;
    city.country = {
      id: city.country
    };
    this.cityService.updateCity(id, city).subscribe(() => {
      alert('Sửa thành công');
      this.router.navigate(['/city']);
    });
  }
}
