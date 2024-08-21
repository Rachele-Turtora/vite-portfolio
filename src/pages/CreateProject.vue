<script>
import { store } from '../store'
import axios from 'axios'

export default {
    name: "CreateProject",
    data() {
        return {
            store,
            types: [],
            technologies: [],
            title: null,
            description: null,
            type_id: null,
            selectedTechnologies: [],
            cover_img: null
        }
    },
    methods: {
        getTypes() {
            const url = this.store.api.baseUrl + this.store.api.endpoints.typesList;

            axios.get(url)
                .then(response => {
                    this.types = response.data.results;
                })
        },
        getTechnologies() {
            const url = this.store.api.baseUrl + this.store.api.endpoints.technologiesList;

            axios.get(url)
                .then(response => {
                    this.technologies = response.data.results;
                })
        },
        handleFileUpload() {
            this.cover_img = event.target.files[0];
        },
        newProject() {

            const data = {
                title: this.title,
                description: this.description,
                type_id: this.type_id,
                technologies: this.selectedTechnologies,
                status: "in evidenza",
                cover_img: this.cover_img
            };

            console.log("Dati inviati:", data);

            const url = this.store.api.baseUrl + this.store.api.endpoints.projectsList;

            axios.post(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(() => {
                    console.log("Progetto creato correttamente");
                })
        }
    },
    created() {
        this.getTypes();
        this.getTechnologies();
    }
}
</script>

<template>
    <form>
        <div class="mb-3">
            <label for="title" class="form-label">Titolo</label>
            <input type="text" class="form-control" id="title" name="title" v-model="title">
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Descrizione</label>
            <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
        </div>

        <div class="mb-3">
            <label for="type" class="form-label">Tipo</label>
            <select class="form-select" id="type" v-model="type_id">
                <option selected>Seleziona il tipo</option>
                <option v-for="type in types" :value="type.id">{{ type.title }}</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="technologies" class="form-label">Tecnologie</label>
            <div class="d-flex flex-wrap">
                <div v-for="technology in technologies" class="col-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" :id="'technology-' + technology.id"
                            :value="technology.id" v-model="selectedTechnologies">
                        <label class="form-check-label" :for="'technology-' + technology.id">{{ technology.title }}</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <label for="cover-img" class="form-label">Cover image</label>
            <input class="form-control" type="file" name="cover_img" id="cover-img" @change="handleFileUpload()">
        </div>

        <button class="btn btn-outline-secondary" @click.prevent="newProject()">
            <router-link :to="{ name: 'projects' }">Invio</router-link>
        </button>
    </form>
</template>

<style lang="scss">
button {
    a {
        color: black;
        text-decoration: none;
    }
}
</style>