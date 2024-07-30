<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: "MyApp",
  components: {
    ProjectCard
  },
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
  <div class="container">
    <h1 class="my-4">Progetti</h1>
    <div class="row">
      <div class="col-4" v-for="project in projects">
        <ProjectCard :title="project.title" :description="project.description" :img="project.cover_img" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
