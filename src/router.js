import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView'
import FavouritesView from './views/FavouritesView'
import DogsView from './views/DogsView'
import BreedView from './views/BreedView'
import NotFoundView from './views/NotFoundView'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/favourites',
            name: 'favourites.index',
            component: FavouritesView,
        },
        {
            path: '',
            name: 'home.index',
            component: HomeView,
            children: [
                {
                    path: '',
                    name: 'dogs.index',
                    component: DogsView,
                },
                {
                    path: '/:breed',
                    name: 'breed.index',
                    component: BreedView,
                },
            ],
        },
        {
            path: '*',
            component: NotFoundView,
        },
    ],
});