import { reactive } from "vue";

export const store = reactive({
    results: [],
    api: {
        baseUrl: "http://127.0.0.1:8000/api/",
        endpoints: {
            projectList: "projects"
        }
    },
    currentPage: 1
})