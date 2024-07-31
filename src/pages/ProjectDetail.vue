<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "ProjectDetail",
    data() {
        return {
            store,
            project: null,
            error: false
        }
    },
    methods: {
        getProject() {
            const url = this.store.api.baseUrl + this.store.api.endpoints.projectList + "/" + this.$route.params.slug;

            axios.get(url)
                .then(response => {
                    this.project = response.data.results;
                })
                .catch(error => {
                    this.error = true;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <h2>{{ project?.title }}</h2>
    <p><strong>Tipo: </strong>{{ project?.type.title }}</p>
    <p><strong>Descizione: </strong>{{ project?.description }}</p>
    <p><strong>Tecnologie utilizzate: </strong></p>
    <ul>
        <li v-for="tech in project?.technologies">
            <p>{{ tech.title }}</p>
        </li>
    </ul>

    <router-link :to="{ name: 'projects' }" class="nav-link">
        <button class="btn btn-outline-primary">Torna ai progetti</button>
    </router-link>
</template>