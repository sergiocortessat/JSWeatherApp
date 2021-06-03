// PUSH TO DOM
import selectBackground from './selectBackground';
// import weatherTemp from './logic';

const pushToDom = (parsedWeather) => {
  // SELECTING BACKGROUND
  selectBackground(parsedWeather);
  // TEMP WEATHER BUTTON
  const tempButton = document.querySelector('.temp-button');
  tempButton.classList.remove('d-none');
  tempButton.classList.add('btn', 'btn-secondary', 'cel', 'my-3');
  tempButton.innerText = parsedWeather.measureUnits;

  // SELECTING AND CLEAN selectBackground DOM
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
  tempElement.innerHTML += parsedWeather.symbol;

  const realTempName = document.createElement('p');
  realTempName.textContent = 'Real Thermal Feeling';

  const realTempElement = document.createElement('p');
  realTempElement.textContent = parsedWeather.realFeel;
  realTempElement.innerHTML += parsedWeather.symbol;

  // APPEND CHILD'S

  nameDiv.appendChild(nameElement);
  weatherDiv.append(weatherName, weatherIconElement, weatherNameElement);
  tempDiv.append(tempName, tempElement);
  realTempDiv.append(realTempName, realTempElement);
  resultsDiv.append(tempButton, nameDiv, weatherDiv, tempDiv, realTempDiv);
};

export default pushToDom;