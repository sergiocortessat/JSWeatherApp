const weatherDataFilter = (data, location, units, coor = 0) => {
  const coord = coor;
  const cityName = location;
  const condition = data.main.temp;
  const weather = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const realFeel = data.main.feels_like;
  const weatherBackground = data.weather[0].main;
  let measureUnits;
  let symbol;
  if (units === 'imperial') {
    measureUnits = 'CELSIUS';
    symbol = '&#8457';
  } else {
    measureUnits = 'FAHRENHEIT';
    symbol = '&#8451';
  }
  return {
    cityName,
    condition,
    weather,
    weatherIcon,
    realFeel,
    weatherBackground,
    measureUnits,
    symbol,
    coord,
  };
};

export default weatherDataFilter;
