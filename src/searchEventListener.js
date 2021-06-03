import getWeatherData from './async';

// SEARCH BUTTON AND KEYPRESS EVENT LISTENERS
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
        const content = document.querySelector('.content');
        content.classList.add('py-3', 'px-2');
        const location = document.querySelector('input').value;
        getWeatherData(location);
      });
  };
};

export default search;