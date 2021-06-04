import weatherDataFilter from './logic';
import pushToDom from './dom';
// ASYNC FUNCTION // FETCHING WEATHER APP

const errorHandler = () => {
  const error = document.querySelector('.error');
  error.innerHTML = `
    <div class="alert alert-primary" role="alert">
    Sorry. We couldn't find the city. Try again!
    </div>`;
  setTimeout(() => {
    error.innerHTML = '';
  }, 2000);
};

const getWeatherData = async (location, units) => {
  const content = document.querySelector('.content');
  try {
    content.classList.remove('d-none');
    const apiKey = '6bec4de18a94a1ec6fd65b14fff7ae04';
    const tempUnits = units;
    // const apicall2 = `https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${input}`;
    // const apicall3 = `https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${latitude} ,${longitude}`;
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${tempUnits}&appid=${apiKey}`;
    const response = await fetch(apiCall);
    const weatherData = await response.json();
    const test = weatherDataFilter(weatherData, location, units);
    pushToDom(test);
  } catch (err) {
    content.classList.add('d-none');
    errorHandler();
  }
};

export default getWeatherData;