<template>
    <div id="dogs-view">
        <DogImagesTable v-if="dogImageList" :dogImages="dogImageList"/>
    </div>
</template>

<script>
import DogImagesTable from '@/components/DogImagesTable';
import stringMixin from '@/mixins/stringMixin'
import { eventBus } from '@/main';

export default {
    name: 'DogsView',
    mixins: [stringMixin],
    components: {
        DogImagesTable
    },
    data: () => ({
        sortByAlphabet: false,
    }),
    computed: {
        dogImageList() {
            let list = [...this.$store.getters.dogImageList];
            if (this.sortByAlphabet) {
                return list;
            } else {
                return list.sort((a, b) => {
                    return this.stringToASCIISum(b.dog.breed) - this.stringToASCIISum(a.dog.breed)
                });
            }
        }
    },
    methods: {
        toggleSort(value) {
            this.sortByAlphabet = value;
        }
    },
    mounted() {
        eventBus.$on('sortByAlphabet', this.toggleSort)
    }
}
</script>

<style>

</style>
