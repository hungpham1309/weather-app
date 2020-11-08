import { LocationType } from '../../constants'; 
import { WeatherState } from 'pages/WeatherDetail/constants';

export interface ISearchLocation {
  title: string;
  location_type: LocationType;
  latt_long: string;
  woeid: number;
  distance: number;
}

export interface IConsolidatedWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: WeatherState;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface ILocation {
  consolidated_weather: IConsolidatedWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: ISearchLocation;
  title: string;
  location_type: LocationType;
  woeid: number;
  latt_long: string;
  timezone: string;
  sources: IWeatherSource[];
}

export interface IWeatherSource {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}
