import {Component, OnInit} from '@angular/core';
import {City} from '../../city';
import {CityService} from '../../service/city.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../../country';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  country1: Country[] = [];
  city: City = {};
  // hung = this.form.
  cityForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    country: new FormControl(),
    area: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl()
  });

  constructor(private cityService: CityService,
              private router: Router) {
  }
  get nameControl() {
    return this.cityForm.get('name');
  }

  ngOnInit() {
    this.getAllCountry1();
  }
  getAllCountry1() {
    this.cityService.getAllCountry().subscribe((data) => {
      // console.error(data);
      this.country1 = data;
      // console.error(this.country1);
    }, (error) => {
      console.log(error);
    });
  }
  createNewCity1() {
    const city = this.cityForm.value;
    city.country = {
      id: city.country
    };
    this.cityService.createNewCity(city).subscribe(() => {
      alert('Tạo thành công');
    });
    this.cityForm.reset();
  }

}
