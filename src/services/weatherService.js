import axios from 'axios';

const apiKey = 'c9327cdfd6083a0b63fb16e1c8b5f795';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = (city) => {
  return axios.get(`${apiUrl}weather`, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric',
      lang: 'en',
    },
  });
};

export const fetchForecastData = (city) => {
  return axios.get(`${apiUrl}forecast`, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric',
      lang: 'en',
    },
  });
};
