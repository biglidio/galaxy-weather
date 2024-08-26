<template>
  <div id="app">
    <SearchCity @city-searched="handleCitySearched" />
    <CityList @city-selected="handleCitySearched" ref="cityList" />
    <WeatherCard v-if="weather" :weatherData="weather" />
    <ForecastCard v-if="forecast" :forecastData="forecast" />
    <h6 class="text-center" v-if="!weather">Search for a city weather using the form above</h6>
  </div>
</template>

<script>
import SearchCity from './components/SearchCity.vue';
import CityList from './components/CityList.vue';
import WeatherCard from './components/WeatherCard.vue';
import ForecastCard from './components/ForecastCard.vue';
import { fetchWeatherData, fetchForecastData } from './services/weatherService';

export default {
  components: {
    SearchCity,
    CityList,
    WeatherCard,
    ForecastCard,
  },
  data() {
    return {
      weather: null,
      forecast: null,
    };
  },
  methods: {
    async handleCitySearched(city) {
      try {
        const response = await fetchWeatherData(city);
        this.weather = response.data;
        this.$refs.cityList.addCity(city);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }

      try {
        const response = await fetchForecastData(city);
        this.forecast = response.data;
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    },
  },
};
</script>
