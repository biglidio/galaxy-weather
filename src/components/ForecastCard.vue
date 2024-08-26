<template>
  <div class="container pt-4">
    <h2 class="text-center">Next days</h2>

    <table class="table forecast-days">
      <tbody>
        <tr v-for="item in forecastDays" :key="item.dt">
          <td>
            <div class="day">
              <div class="img-date">
                <img :src="imageUrl(item)" alt="" />
                <span class="date">{{ item.date }}</span>
                <span class="condition">{{ item.weather[0].description }}</span>
              </div>
              <div class="info">
                <div class="temperature">
                  <span><b-icon-arrow-down></b-icon-arrow-down> {{ item.main.temp_min }} °C</span>
                  <span><b-icon-arrow-up></b-icon-arrow-up> {{ item.main.temp_max }} °C</span>
                </div>
                <div class="data">
                  <span><b-icon-speedometer></b-icon-speedometer> {{ item.main.pressure }} hPa</span>
                  <span><b-icon-droplet-fill></b-icon-droplet-fill> {{ item.main.humidity }}%</span>
                  <span><b-icon-eye></b-icon-eye> {{ item.visibility / 1000 }} km</span>
                  <span><b-icon-wind></b-icon-wind> {{ item.wind.speed }} m/s</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    forecastData: Object,
  },
  methods: {
    imageUrl(item) {
      return `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
    },
  },
  computed: {
    forecastDays() {
      return this.forecastData.list
        .filter(item => item.dt_txt.includes('12:00:00'))
        .map(item => {
          const date = new Date(item.dt_txt);
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          item.date = `${day}/${month}`;
          return item;
        });
    }
  }
};
</script>

<style>
.forecast-days {
  .day {
    display: flex;
    align-items: center;
    gap: 16px;

    .img-date {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100px;

      .date {
        font-size: 1.2rem;
        font-weight: bold;
      }

      .condition:first-letter {
        text-transform: capitalize;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .temperature {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .data {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
    }
  }
}
</style>