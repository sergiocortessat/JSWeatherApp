const errorHandler = () => {
  const error = document.querySelector('.error-location');
  error.innerHTML = `
      <div class="alert alert-primary" role="alert">
      Unable to retrieve your location!
      </div>`;
  setTimeout(() => {
    error.innerHTML = '';
  }, 2000);
};

const getLocation = async (lat, lon) => {
  try {
    const apiCall2 = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
    // const apiCall = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + '54.7114102' + '%2C' + '18.4089522' + '&language=en';
    const response = await fetch(apiCall2);
    const coordinatesCity = await response.json();
    const cityName = coordinatesCity.localityInfo.administrative[3].name;
    return cityName;
  } catch (err) {
    // status.textContent = 'Unable to find the city';
    errorHandler();
  }
};

export default getLocation;