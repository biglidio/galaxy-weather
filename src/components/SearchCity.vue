<template>
  <div class="container mt-4">
    <form @submit.prevent="searchCity">
      <input class="form-control focus-ring focus-ring-none" v-model="city" placeholder="Enter city" />
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
    };
  },
  methods: {
    searchCity() {
      if (this.city) {
        this.$emit('city-searched', this.city);
        this.city = '';
      }
    },
  },
};
</script>

<style>
form {
  display: flex;
  gap: 4px;

  .form-control {
    flex-grow: 1;
  }

  .form-control:focus,
  .btn:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
