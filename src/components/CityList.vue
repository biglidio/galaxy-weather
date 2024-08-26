<template>
  <div class="container mt-2 mb-4">
    <div class="recent" v-if="cities.length">
      <strong>Recent searched: </strong>
      <span v-for="city in cities" :key="city" @click="selectCity(city)">
        {{ city }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: JSON.parse(localStorage.getItem('cities')) || [],
    };
  },
  methods: {
    addCity(city) {
      if (!this.cities.includes(city)) {
        this.cities.push(city);
        localStorage.setItem('cities', JSON.stringify(this.cities));
      }
    },
    selectCity(city) {
      this.$emit('city-selected', city);
    },
  },
};
</script>

<style>
.recent {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  row-gap: 0px;

  span {
    text-decoration: underline;
  }
}
</style>