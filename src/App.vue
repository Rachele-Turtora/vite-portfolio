<script>
import axios from 'axios';

export default {
  name: "MyApp",
  data() {
    return {
      projects: []
    }
  },
  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then(response => {
        this.projects = response.data.results;
      })
    }
  },
  created() {
    this.getProjects();
  }
}
</script>

<template>
  <h1>MyApp</h1>
  <ul>
    <li v-for="project in projects">{{ project['title'] }}</li>
  </ul>
</template>

<style scoped></style>
