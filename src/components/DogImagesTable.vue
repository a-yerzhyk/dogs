<template>
    <div id="images-table">
        <div class="images-table__wrapper">
            <div class="images-table__element" v-for="image in imageList" :key="image.id">
                <DogImage :dogImage="image"/>
            </div>
        </div>
    </div>
</template>

<script>
import DogImage from './DogImage';

export default {
    components: {
        DogImage
    },
    name: 'DogImagesTable',
    data: () => ({
        lastItem: 20
    }),
    props: {
        dogImages: [],
    },
    computed: {
        imageList() {
            return this.dogImages.slice(0, this.lastItem);
        }
    },
    methods: {
        scrollHandler() {
            if (this.lastItem >= this.dogImages.length)
                return;

            const documentElement = document.documentElement;
            let showMoreItems = documentElement.scrollHeight - (documentElement.scrollTop + window.innerHeight) < 50;

            if (showMoreItems)
                this.lastItem += 20;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHandler); 
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
    }   
}
</script>

<style>
.images-table__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 47.5px;
}

.images-table__element {
    width: 355px;
    height: 355px;
}
</style>
