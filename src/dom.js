// PUSH TO DOM
import Rainy from './assets/rain.jpg';
import Fog from './assets/fog.jpg';
import Cloud from './assets/cloud.jpg';
import Sunny3 from './assets/suny3.jpg';

const pushToDom = (parsedWeather) => {
  // SELECTING BACKGROUND
  const body = document.getElementById('body');
  if (parsedWeather.weatherBackground === 'Clear') {
    body.style.backgroundImage = `url(${Sunny3})`;
  } else if (parsedWeather.weatherBackground === 'Rain' || parsedWeather.weatherBackground === 'Drizzle' || parsedWeather.weatherBackground === 'Thunderstorm') {
    body.style.backgroundImage = `url(${Rainy})`;
  } else if (parsedWeather.weatherBackground === 'Snow') {
    body.style.backgroundImage = 'url("")';
  } else if (parsedWeather.weatherBackground === 'Clouds') {
    body.style.backgroundImage = `url(${Cloud})`;
  } else {
    body.style.backgroundImage = `url(${Fog})`;
  }

  // TEMP WEATHER BUTTON
  const tempButton = document.querySelector('.temp-button');
  tempButton.classList.remove('d-none');
  tempButton.classList.add('btn', 'btn-secondary', 'cel', 'my-3');
  tempButton.innerText = 'FAHRENHEIT';

  // SELECTING AND CLEAN DOM
  const resultsDiv = document.querySelector('.content');
  const nameDiv = document.querySelector('.name');
  nameDiv.innerHTML = '';
  const weatherDiv = document.querySelector('.weather');
  weatherDiv.innerHTML = '';
  const tempDiv = document.querySelector('.temp');
  tempDiv.innerHTML = '';
  const realTempDiv = document.querySelector('.real-temp');
  realTempDiv.innerHTML = '';

  // ELEMENTS TO PUSH
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

  // APPEND CHILD'S

  nameDiv.appendChild(nameElement);
  weatherDiv.append(weatherName, weatherIconElement, weatherNameElement);
  tempDiv.append(tempName, tempElement);
  realTempDiv.append(realTempName, realTempElement);
  resultsDiv.append(tempButton, nameDiv, weatherDiv, tempDiv, realTempDiv);

  // TEMPERATURE BUTTON EVENT LISTENER

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

export default pushToDom;