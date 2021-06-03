const weatherDataFilter = (data, location) => {
  const cityName = location;
  const condition = data.main.temp;
  const weather = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const realFeel = data.main.feels_like;
  const weatherBackground = data.weather[0].main;
  const fCondition = (condition * (9 / 5) + 32).toFixed(2);
  const fRealFeel = (realFeel * (9 / 5) + 32).toFixed(2);
  return {
    cityName, condition, weather, weatherIcon, realFeel, weatherBackground, fCondition, fRealFeel,
  };
};

const weatherTemp = (tempButton,
  tempDiv,
  realTempDiv,
  tempName,
  tempElement,
  realTempElement,
  realTempName,
  parsedWeather) => {
  if (tempButton.classList.contains('cel')) {
    tempButton.classList.remove('cel');
    tempButton.innerText = 'CELSIUS';
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
  } else {
    tempButton.classList.add('cel');
    tempDiv.innerHTML = '';
    realTempDiv.innerHTML = '';
    tempDiv.append(tempName, tempElement);
    realTempDiv.append(realTempName, realTempElement);
    tempButton.innerText = 'FAHRENHEIT';
  }

  return {
    tempButton,
    tempDiv,
    realTempDiv,
    tempName,
    tempElement,
    realTempElement,
    realTempName,
  };
};

export { weatherTemp, weatherDataFilter };
