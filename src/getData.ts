// Add teh MapBox calls.
// get the API_KEYS from process.env

/* Get the lat and long values either from web api location
on mobile devies or using the input for locations from 
google api */
const lat = "";
const lon = "";

/* Parts to be excluded, this needs to be a comma 
seperated list from current, minutely, 
hourly,daily, alerts */
const part = "";

// this needs to come from environement variables
const API_key = "";

// standard, metric or imperial
const units = "";

// TODO Openweather api can return language
//specific weather, Optional prop.
const lang = "";

const href = `https://api.openweathermap.org
              /data/2.5/onecall?lat=${lat}&lon=${lon}
              &exclude=${part}&appid=${API_key}`;

export function getOpenWeather() {
  return {};
}
