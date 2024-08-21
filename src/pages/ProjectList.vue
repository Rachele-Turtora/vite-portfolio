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
            const url = this.store.api.baseUrl + this.store.api.endpoints.projectsList;

            const params = {
                page: this.store.currentPage
            };

            if (this.store.searchTitle) {
                params.title = this.store.searchTitle
            };

            axios.get(url, { params })
                .then(response => {
                    this.store.results = response.data.results;
                    this.projects = response.data.results.data;
                })
        }
    },
    created() {
        this.getProjects();
    },
    watch: {
        // Se il valore di searchTitle cambia, esegui di nuovo getProjects
        '$route.query.search': function (newSearch) {
            this.store.searchTitle = newSearch;
            this.getProjects();
        }
    }
}
</script>

<template>
    <div class="d-flex justify-content-between align-items-center">
        <h1 class="my-4">Progetti</h1>
        <router-link :to="{ name: 'create' }" class="nav-link">
            <button type="button" class="btn btn-outline-danger py-2 px-3 h-50">Nuovo progetto</button>
        </router-link>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="project in projects">
            <ProjectCard :title="project.title" :slug="project.slug" :description="project.description"
                :img="project.cover_img_url" />
        </div>
    </div>
    <Pagination @getProjects="getProjects" />
</template>