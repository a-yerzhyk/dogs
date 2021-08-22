<template>
    <div class="dog-image" :style="style">
        <div class="card-favourite" :class="favIcon" @click="toggleFavourite"></div>
        <div class="card-breed">{{breedLabel}}</div>
    </div>
</template>

<script>
import stringMixin from '@/mixins/stringMixin'

export default {
    name: 'DogImage',
    mixins: [stringMixin],
    data: () => ({
        imageUrl: '',
    }),
    props: {
        dogImage: Object,
    },
    computed: {
        style() {
            return [
                {'background': 'url(' + this.imageUrl + ') top center / cover no-repeat'},
            ]
        },
        breedLabel() {
            return this.uppercaseFirstLetter(this.breed);
        },
        breed() {
            return this.dogImage.dog.breed;
        },
        favIcon() {
            return this.isFavourite ? 'heart-image-filled' : 'heart-image';
        },
        favouritesByBreed() {
            return this.$store.getters.favouritesByBreed(this.breed);
        },
        isFavourite() {
            return this.favouritesByBreed.indexOf(this.imageUrl) >= 0;
        }
    },
    methods: {
        toggleFavourite() {
            if (!this.isFavourite) {
                this.$store.dispatch('saveFavourite', {breed: this.breed, image: this.imageUrl});
            } else {
                this.$store.dispatch('removeFavourite', {breed: this.breed, image: this.imageUrl});
            }
        }
    },
    async mounted() {
        this.imageUrl = await this.dogImage.getImage();
    }
}
</script>

<style>
.dog-image  {
    width: 305px;
    height: 305px;
    border-radius: 8px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-favourite {
    cursor: pointer;
    display: inline-block;
    width: 29px;
    height: 26px;
    background-color: white;
}

.card-breed {
    position: relative;
    text-align: right;
    color: white;
    font-weight: 600;
    margin-top: auto;
    font-size: 30px;
    line-height: 28px;
}
</style>
