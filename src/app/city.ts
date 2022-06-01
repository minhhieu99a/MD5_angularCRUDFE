import {Country} from './country';

export interface City {
  id?: number;
  name?: string;
  country?: Country;
  area?: number;
  population?: number;
  gdp?: number;
  description?: string;
}
