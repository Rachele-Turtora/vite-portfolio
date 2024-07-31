import { createMemoryHistory, createRouter } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/projects/:slug',
            name: 'detail',
            component: ProjectDetail
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        }
    ]
})

export { router };