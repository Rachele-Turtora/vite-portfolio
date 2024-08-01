<script>
export default {
    name: "ProjectCard",
    props: ["title", "slug", "description", "img"]
}
</script>

<template>
    <div class="card p-2 my-2">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <div class="img-container">
            <img :src="img" :alt="title">
        </div>
        <router-link :to="{ name: 'detail', params: { slug } }">
            <button class="btn btn-outline-primary w-25 m-2">Dettagli</button>
        </router-link>

    </div>
</template>

<style>
.img-container {
    height: 220px;
}

img {
    height: 100%;
}
</style>