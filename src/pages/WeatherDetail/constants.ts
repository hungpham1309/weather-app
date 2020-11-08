export enum WeatherState {
    SNOW = 'sn',
    SLEET = 'sl',
    HAIL = 'h',
    THUNDERSTORM = 't',
    HEAVY_RAIN = 'hr',
    LIGHT_RAIN = 'lr',
    SHOWERS = 's',
    HEAVY_CLOUD = 'hc',
    LIGHT_CLOUD = 'lc',
    CLEAR = 'c'
}

export const weatherStateDict = {
    [WeatherState.SNOW]: 'Snow',
    [WeatherState.SLEET]: 'Sleet',
    [WeatherState.HAIL]: 'Hail',
    [WeatherState.THUNDERSTORM]: 'Thunderstorm',
    [WeatherState.HEAVY_RAIN]: 'Heavy Rain',
    [WeatherState.LIGHT_RAIN]: 'Light Rain',
    [WeatherState.SHOWERS]: 'Showers',
    [WeatherState.HEAVY_CLOUD]: 'Heavy Cloud',
    [WeatherState.LIGHT_CLOUD]: 'Light Cloud',
    [WeatherState.CLEAR]: 'Clear'
}