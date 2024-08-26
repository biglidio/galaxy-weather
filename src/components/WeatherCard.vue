<template>
  <div class="container" v-if="weatherData">
    <h1 class="city text-center">{{ weatherData.name }}, {{ weatherData.sys.country }}</h1>

    <div class="weather-card">
      <div class="weather-card-img">
        <img :src="imageUrl" alt="" />
      </div>
      <div class="weather-card-temps">
        <div class="current"><b-icon-thermometer></b-icon-thermometer> {{ weatherData.main.temp }} °C</div>
        <div class="min-max">
          <b-icon-arrow-down></b-icon-arrow-down> {{ weatherData.main.temp_min }} °C
          / <b-icon-arrow-up></b-icon-arrow-up> {{ weatherData.main.temp_max }} °C
        </div>
      </div>
    </div>

    <table class="table">
      <tbody>
        <tr>
          <td>Condition</td>
          <td class="condition">{{ weatherData.weather[0].description }}</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td><b-icon-speedometer></b-icon-speedometer> {{ weatherData.main.pressure }} hPa</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td><b-icon-droplet-fill></b-icon-droplet-fill> {{ weatherData.main.humidity }}%</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td><b-icon-eye></b-icon-eye> {{ weatherData.visibility / 1000 }} km</td>
        </tr>
        <tr>
          <td>Wind</td>
          <td><b-icon-wind></b-icon-wind> {{ weatherData.wind.speed }} m/s</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    weatherData: Object,
  },
  computed: {
    imageUrl() {
      return `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
    },
  },
};
</script>

<style>
.city {
  font-size: 2.4rem;
}

.weather-card {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px solid #ddd;

  .weather-card-img {
    text-align: center;
    max-width: 80px;

    img {
      width: 100%;
    }
  }

  .weather-card-temps {
    text-align: center;

    .current {
      font-size: 2rem;
    }
  }
}

.condition:first-letter {
  text-transform: capitalize;
}
</style>
