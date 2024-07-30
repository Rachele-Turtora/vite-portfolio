<script>
export default {
    name: "ProjectCard",
    props: ["title", "description", "img"]
}
</script>

<template>
    <div class="card p-2">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <div class="img-container">
            <img :src="`http://127.0.0.1:8000/storage/${img}`" alt="">
        </div>
    </div>
</template>

<style>
.img-container {
    height: 200px;
}

img {
    height: 100%;
}
</style>