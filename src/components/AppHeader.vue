<script>
import { store } from '../store'

export default {
    name: "Header",
    data() {
        return {
            store
        }
    },
    methods: {
        searchProject() {
            // Navigo alla pagina progetti e aggiungo il titolo all'URL
            this.$router.push({ name: 'projects', query: { search: this.store.searchTitle } });
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link active"
                                aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search" @submit.prevent="searchProject">
                        <input class="form-control me-2" type="search" placeholder="Search title" aria-label="Search"
                            v-model="store.searchTitle">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>