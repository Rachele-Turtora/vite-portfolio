import { reactive } from "vue";

export const store = reactive({
    results: [],
    api: {
        baseUrl: "http://127.0.0.1:8000/api/",
        endpoints: {
            projectsList: "projects",
            typesList: "types",
            technologiesList: "technologies"
        }
    },
    currentPage: 1,
    searchTitle: ""
})