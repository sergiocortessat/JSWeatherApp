import weatherDataFilter from './logic';
import pushToDom from './dom';

// ASYNC FUNCTION // FETCHING WEATHER APP

const getWeatherData = async (location) => {
  const apiKey = '6bec4de18a94a1ec6fd65b14fff7ae04';
  const tempUnits = 'metric';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${tempUnits}&appid=${apiKey}`;
  const response = await fetch(apiCall);
  const weatherData = await response.json();
  const test = weatherDataFilter(weatherData, location);
  pushToDom(test);
};

export default getWeatherData;