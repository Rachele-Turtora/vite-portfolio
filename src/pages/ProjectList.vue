<script>
import axios from 'axios';
import { store } from '../store';

import ProjectCard from '../components/ProjectCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
    name: "ProjectList",
    components: {
        ProjectCard,
        Pagination
    },
    data() {
        return {
            store,
            projects: []
        }
    },
    methods: {
        getProjects() {
            const url = this.store.api.baseUrl + this.store.api.endpoints.projectList;

            axios.get(url,
                {
                    params: {
                        page: this.store.currentPage
                    }
                })
                .then(response => {
                    this.store.results = response.data.results;
                    this.projects = response.data.results.data;
                })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <h1 class="my-4">Progetti</h1>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="project in projects">
            <ProjectCard :title="project.title" :description="project.description" :img="project.cover_img" />
        </div>
    </div>
    <Pagination @getProjects="getProjects" />
</template>