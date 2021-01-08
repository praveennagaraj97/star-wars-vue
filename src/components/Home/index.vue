<template>
  <div class="jumbotron">
    <div
      v-if="loading"
      class="spinner-grow text-primary"
      role="status"
      style="margin:auto;display:block;"
    >
      <span class="sr-only">Loading...</span>
    </div>

    <div v-else class="row" style="justify-content: center;">
      <div
        v-for="({ name, birth_year, gender, height, hair_color, eye_color },
        i) in people"
        :key="i"
        class="card"
        style="width: 18rem;"
      >
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <hr />
          <ul>
            <li>Birth Year : {{ birth_year }}</li>
            <li>Gender : {{ gender }}</li>
            <li>Height : {{ height }}cm</li>
            <li>Hair Colour : {{ hair_color }}</li>
            <li>Eye Colour : {{ eye_color }}</li>
          </ul>
          <router-link
            :to="{ name: 'PeopleDetail', params: { id: i + 1 } }"
            class="btn btn-primary"
            >View Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPeople } from "../../api";

export default {
  data: () => ({
    people: [],
    loading: false,
  }),
  mounted() {
    (async () => {
      this.loading = true;
      const { data } = await getAllPeople();
      this.loading = false;
      this.people = data.results;
    })();
  },
};
</script>

<style>
.card {
  margin: 10px;
}
.jumbotron {
  padding: 1rem 2rem;
}
</style>
