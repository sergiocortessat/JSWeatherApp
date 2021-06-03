import Rainy from './assets/rain.jpg';
import Fog from './assets/fog.jpg';
import Cloud from './assets/cloud.jpg';
import Sunny3 from './assets/suny3.jpg';

const selectBackground = (parsedWeather) => {
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
};

export default selectBackground;