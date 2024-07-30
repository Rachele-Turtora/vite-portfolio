<script>
export default {
    name: "ProjectCard",
    props: ["title", "description"]
}
</script>

<template>
    <div class="card p-2">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<style></style>