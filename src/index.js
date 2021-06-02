import './style.css';
import './weatherFaviCon.png';
import Sunny from './sunny.jpg';
import Rainy from './rain.jpg';
import Fog from './fog.jpg';
import Cloud from './cloud.jpg';
import weatherDataFilter from './logic';


// CHANGING BACKGROUND
// Clouds
// Fog
// clear

// FETCHING WEATHER APP

const consoleLogData = (weatherData) => {
  console.log(weatherData);
};

const pushToDom = (parsedWeather) => {
  const body = document.getElementById('body');
  if (parsedWeather.weatherBackground === 'Clear') {
    body.style.backgroundImage = `url(${Sunny})`;
  } else if (parsedWeather.weatherBackground === 'Rain' || parsedWeather.weatherBackground === 'Drizzle' || parsedWeather.weatherBackground === 'Thunderstorm') {
    body.style.backgroundImage = `url(${Rainy})`;
  } else if (parsedWeather.weatherBackground === 'Snow') {
    body.style.backgroundImage = 'url("")';
  } else if (parsedWeather.weatherBackground === 'Clouds') {
    body.style.backgroundImage = `url(${Cloud})`;
  } else {
    body.style.backgroundImage = `url(${Fog})`;
  }

  const tempButton = document.querySelector('.temp-button');
  tempButton.classList.remove('d-none');
  tempButton.classList.add('btn', 'btn-secondary', 'cel');
  tempButton.innerText = 'FAHRENHEIT';

  const resultsDiv = document.querySelector('.content');
  const nameDiv = document.querySelector('.name');
  nameDiv.innerHTML = '';
  const weatherDiv = document.querySelector('.weather');
  weatherDiv.innerHTML = '';
  const tempDiv = document.querySelector('.temp');
  tempDiv.innerHTML = '';
  const realTempDiv = document.querySelector('.real-temp');
  realTempDiv.innerHTML = '';

  const nameElement = document.createElement('h2');
  nameElement.textContent = parsedWeather.cityName.toUpperCase();
  const weatherIconElement = document.createElement('img');
  weatherIconElement.src = `http://openweathermap.org/img/w/${parsedWeather.weatherIcon}.png`;
  const weatherName = document.createElement('p');
  weatherName.textContent = 'Condition';
  const weatherNameElement = document.createElement('p');
  weatherNameElement.textContent = parsedWeather.weather;

  const tempName = document.createElement('p');
  tempName.textContent = 'Temperature';
  const tempElement = document.createElement('p');
  tempElement.textContent = parsedWeather.condition;
  tempElement.innerHTML += '&#8451';

  const realTempName = document.createElement('p');
  realTempName.textContent = 'Real Thermal Feeling';
  const realTempElement = document.createElement('p');
  realTempElement.textContent = parsedWeather.realFeel;
  realTempElement.innerHTML += '&#8451';
  nameDiv.appendChild(nameElement);
  weatherDiv.append(weatherName, weatherIconElement, weatherNameElement);
  tempDiv.append(tempName, tempElement);
  realTempDiv.append(realTempName, realTempElement);
  resultsDiv.append(tempButton, nameDiv, weatherDiv, tempDiv, realTempDiv);

  tempButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('cel')) {
      tempButton.classList.remove('cel');
      tempDiv.innerHTML = '';
      const innerTempName = document.createElement('p');
      innerTempName.textContent = 'Temperature';
      const innerTempElement = document.createElement('p');
      innerTempElement.textContent = parsedWeather.fCondition;
      innerTempElement.innerHTML += '&#8457';
      tempDiv.append(innerTempName, innerTempElement);

      realTempDiv.innerHTML = '';
      const innerRealTempName = document.createElement('p');
      innerRealTempName.textContent = 'Real Thermal Feeling';
      const innerRealTempElement = document.createElement('p');
      innerRealTempElement.textContent = parsedWeather.fCondition;
      innerRealTempElement.innerHTML += '&#8457';
      realTempDiv.append(innerRealTempName, innerRealTempElement);
      tempButton.innerText = 'CELSIUS';
    } else {
      tempButton.classList.add('cel');
      tempDiv.innerHTML = '';
      realTempDiv.innerHTML = '';
      tempDiv.append(tempName, tempElement);
      realTempDiv.append(realTempName, realTempElement);
      tempButton.innerText = 'FAHRENHEIT';
    }
  });
};

// ASYNC FUNCTION

const getWeatherData = async (location, units = 0) => {
  const apiKey = '6bec4de18a94a1ec6fd65b14fff7ae04';
  const tempUnits = 'metric';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${tempUnits}&appid=${apiKey}`;
  const response = await fetch(apiCall);
  const weatherData = await response.json();
  const test = weatherDataFilter(weatherData, location);
  consoleLogData(test);
  pushToDom(test);
};

const search = {};
search.EnterPress = () => {
  document.querySelector('input')
    .addEventListener('keyup', (keyPressed) => {
      if (keyPressed.which === 13) {
        const location = document.querySelector('input').value;
        getWeatherData(location);
      }
    });
  search.Click = () => {
    document.querySelector('.search-button')
      .addEventListener('click', () => {
        const location = document.querySelector('input').value;
        getWeatherData(location);
      });
  };
};

search.EnterPress();
search.Click();
