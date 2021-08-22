<template>
    <div id="favourites">
        <div class="empty-page-text" v-if="favouriteImages.length === 0">You dont have any favourite picture yet</div>
        <DogImagesTable v-else :dogImages="favouriteImages"/>
    </div>
</template>

<script>
import DogImagesTable from '@/components/DogImagesTable';

export default {
    name: 'FavouritesView',
    components: {
        DogImagesTable        
    },
    computed: {
        favouriteImages() {
            return this.$store.getters.favouriteImages;
        }
    },
}
</script>

<style>

</style>
