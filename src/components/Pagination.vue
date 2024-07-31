<script>
import { store } from '../store';

export default {
    name: "Pagination",
    data() {
        return {
            store
        }
    },
    methods: {
        next() {
            this.store.currentPage++;
            this.$emit('getProjects');
        },
        prev() {
            this.store.currentPage--;
            this.$emit('getProjects');
        }
    }
}
</script>

<template>
    <nav class="my-3">
        <ul class="pagination d-flex justify-content-between">
            <li>
                <button class="btn btn-secondary" @click="prev()" v-if="store.results?.prev_page_url">Prev</button>
            </li>
            <li>
                <button class="btn btn-primary" @click="next()" v-if="store.results?.next_page_url">Next</button>
            </li>
        </ul>
    </nav>
</template>