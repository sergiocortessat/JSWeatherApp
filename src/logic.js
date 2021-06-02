const weatherDataFilter = (data, location) => {
  const cityName = location;
  const condition = data.main.temp;
  const weather = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const realFeel = data.main.feels_like;
  const weatherBackground = data.weather[0].main;
  const fCondition = Math.floor(condition * (9 / 5) + 32);
  return {
    cityName, condition, weather, weatherIcon, realFeel, weatherBackground, fCondition,
  };
};

export default weatherDataFilter;
