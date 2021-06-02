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

export default weatherDataFilter;
