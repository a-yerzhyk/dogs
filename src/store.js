import Vue from 'vue';
import Vuex from 'vuex';
import DogsContext from '@/lib/DogsContext.js';
import DogImage from './lib/DogImage';

Vue.use(Vuex);
const dogsContext = new DogsContext();

export default new Vuex.Store({
    state: {
        dogImageList: [],
        imagesByBreed: {},
        favourites: JSON.parse(localStorage.getItem('favouriteImages') || '{}')
    },

    getters: {
        dogImageList: state => state.dogImageList,
        imagesByBreed: state => breed => state.imagesByBreed[breed],
        favouritesByBreed: state => breed => state.favourites[breed] ?? [],
        favouriteImages: state => {
            const entries = Object.entries(state.favourites);
            let favouriteImages = [];
            entries.forEach(entry => {
                const breed = entry[0];
                const favImages = entry[1];
                const images = favImages.map(image => {
                    return new DogImage(breed, image);
                });
                favouriteImages.push(...images);
            });
            return favouriteImages;
        },
    },

    mutations: {
        storeDogImageList(state, dogs) {
            state.dogImageList.splice(0);
            for (let breed in dogs) {
                if (Object.prototype.hasOwnProperty.call(dogs, breed)) {
                    state.dogImageList.push(new DogImage(breed));
                }
            }
        },

        storeImagesByBreed(state, {breed, images}) {
            const dogImages = images.map(image => {
                return new DogImage(breed, image);
            })
            Vue.set(state.imagesByBreed, breed, dogImages);
        },

        saveFavourite(state, {breed, image}) {
            if (state.favourites[breed]) {
                state.favourites[breed].push(image);
            } else {
                Vue.set(state.favourites, breed, [image]);
            }
            
            localStorage.setItem('favouriteImages', JSON.stringify(state.favourites));
        },

        removeFavourite(state, {breed, image}) {
            const index = state.favourites[breed].indexOf(image);
            if (index >= 0) {
                state.favourites[breed].splice(index, 1);
                localStorage.setItem('favouriteImages', JSON.stringify(state.favourites));
            }
        }
    },

    actions: {
        async getDogImageList({commit}) {
            const dogs = await dogsContext.list();
            commit('storeDogImageList', dogs);
        },

        async getImagesByBreed({commit}, breed) { 
            const images = await dogsContext.listImages(breed);
            commit('storeImagesByBreed', {breed, images});
        },
        
        saveFavourite({commit}, {breed, image}) {
            commit('saveFavourite', {breed, image});
        },

        removeFavourite({commit}, {breed, image}) {
            commit('removeFavourite', {breed, image})
        }
    },
});