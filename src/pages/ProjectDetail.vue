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
            const url = this.store.api.baseUrl + this.store.api.endpoints.projectsList + "/" + this.$route.params.slug;

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
    <img :src="project?.cover_img_url" alt="" class="w-75 my-3">
    <p><strong>Tipo: </strong>{{ project?.type.title }}</p>
    <p><strong>Tecnologie utilizzate: </strong></p>
    <ul>
        <li v-for="tech in project?.technologies">
            <div class="border border-success p-3">
                {{ tech.title }}
            </div>
        </li>
    </ul>
    <p><strong>Descizione: </strong>{{ project?.description }}</p>

    <router-link :to="{ name: 'projects' }" class="nav-link">
        <button class="btn btn-outline-primary my-3">Torna ai progetti</button>
    </router-link>
</template>

<style>
li {
    width: 120px;
    margin: 10px;
    display: inline-block;
    text-align: center;
}
</style>