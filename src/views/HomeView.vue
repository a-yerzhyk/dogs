<template>
    <div id="home-view">
        <div class="switch-component-wrap">
            <!-- API returns already sorted list by the way :) -->
            <SwitchInput :label="'Сортировка по алфавиту'" :event="'sortByAlphabet'" v-if="canSort"/>
        </div>
        <ChipsSelect :label="'Породы'" :items="breeds"/>
        <router-view></router-view>
    </div>
</template>

<script>
import SwitchInput from '@/components/inputs/SwitchInput.vue';
import ChipsSelect from '@/components/inputs/ChipsSelect.vue';

export default {
    name: 'HomeView',
    components: {
        SwitchInput,
        ChipsSelect
    },
    data: () => ({
    }),
    methods: {
        async getDogImageList() {
            if (!this.dogImageList.length)
                await this.$store.dispatch('getDogImageList');
        }
    },
    computed: {
        canSort() {
            return this.$route.path === '/';
        },
        dogImageList() {
            return this.$store.getters.dogImageList;
        },
        breeds() {
            return this.dogImageList.map(dogImage => dogImage.dog.breed);
        }
    },
    async mounted() {
        await this.getDogImageList();
    }
}
</script>

<style>
.switch-component-wrap {
    float: right;
}
</style>
