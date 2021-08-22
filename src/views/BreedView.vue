<template>
    <div id="breed">
        <DogImagesTable v-if="imagesByBreed" :dogImages="imagesByBreed"/>
    </div>
</template>

<script>
import DogImagesTable from '@/components/DogImagesTable';

export default {
    name: 'BreedView',
    components: {
        DogImagesTable        
    },
    computed: {
        imagesByBreed() {
            const breed = this.$route.params.breed;
            return this.$store.getters.imagesByBreed(breed);
        }
    },
    methods: {
        async getImages(breed) {
            if (!this.imagesByBreed?.length)
                await this.$store.dispatch('getImagesByBreed', breed);
        }
    },
    watch: {
        $route: {
            immediate: true,
            async handler(newVal) {
                await this.getImages(newVal.params.breed);
            }
        }
    }
}
</script>

<style>

</style>
