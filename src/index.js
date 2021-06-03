import './style.css';
import './assets/weatherFaviCon.png';
import searchEventListener from './searchEventListener';
import getWeatherData from './async';
import geoLocation from './geoLocation';

function geoFindMe() {
  const status = document.querySelector('#status');
  //   const mapLink = document.querySelector('#map-link');

  //   mapLink.href = '';
  //   mapLink.textContent = '';

  function success(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    status.textContent = '';
    // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    const content = document.querySelector('.content');
    content.classList.add('py-3', 'px-2');
    const location = geoLocation(latitude, longitude);
    location.then((city) => {
    //   console.log(city);
      getWeatherData(city, 'metric');
    });
  }

  function error() {
    // status.textContent = 'Unable to retrieve your location';
    const error = document.querySelector('.error');
    error.innerHTML = `
      <div class="alert alert-primary" role="alert">
      Unable to retrieve your location!
      </div>`;
    setTimeout(() => {
      error.innerHTML = '';
    }, 2000);
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    // status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

geoFindMe();
// document.querySelector('#find-me').addEventListener('click', geoFindMe);
searchEventListener.EnterPress();
searchEventListener.Click();
searchEventListener.Button();