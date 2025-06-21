const apiKey = '471b0fa194ff575846140cce1801d3ca';
const lat = 41.7151; 
const lon = 44.8271;

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const forecastContainer = document.getElementById('forecast');
    const daily = data.daily.slice(0, 7); 
    daily.forEach(day => {
      const date = new Date(day.dt * 1000);
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');
      dayDiv.innerHTML = `
        <h3>${date.toLocaleDateString('ka-GE', { weekday: 'long', day: 'numeric', month: 'long' })}</h3>
        <p>ტემპერატურა: ${day.temp.day}°C</p>
        <p>ტენიანობა: ${day.humidity}%</p>
      `;
      forecastContainer.appendChild(dayDiv);
    });
  })
  .catch(error => {
    console.error('შეცდომა:', error);
  });
