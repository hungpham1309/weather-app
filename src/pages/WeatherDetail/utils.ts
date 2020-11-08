import { WeatherState } from "./constants";

export const getWeatherStateImageURL = (state: WeatherState) => {
    return `https://www.metaweather.com/static/img/weather/${state}.svg`
}