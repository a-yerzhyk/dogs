<template>
    <div class="chips-select">
        <!-- <div> -->
            <div class="chips-select__button" :class="{'active': isExpanded}" @click="toggleIsActive">{{this.label}}</div>
            <!-- <Chips :label="activeChip.label" :path="activeChip.path"/> -->
        <!-- </div> -->
        
        <slot name="main-chips"></slot>
        <transition name="slide">
            <div class="chips-select__container"  v-show="isExpanded">
                <Chips :label="'Все пёсели'" :path="'/'" :clearable="false" exact/>
                <div class="chips-select__wrapper">
                    <template v-for="(arr, key) in itemsData">
                        <span :key="key" class="chips-group-key">{{key}}</span>
                        <Chips v-for="(item) in arr" :key="item" :label="item" :path="item"/>
                    </template>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Chips from '@/components/inputs/Chips.vue';

export default {
    name: 'ChipsSelect',
    components: {
        Chips
    },
    props: {
        label: {
            type: String,
            required: true
        },
        items: Array,
    },
    data: () => ({
        isExpanded: false,
        activeChip: null,
    }),
    methods: {
        toggleIsActive() {
            this.isExpanded = !this.isExpanded;
        },
        sortByAlphabet(items) {
            let result = {};
            items.forEach(item => {
                const letterKey = item[0];
                if (result[letterKey]) {
                    result[letterKey].push(item);
                } else {
                    result[letterKey] = [item];
                }
            });
            return result;
        }
    },
    computed: {
        itemsData() {
            return this.sortByAlphabet(this.items);
        }
    },
    // mounted() {

    // }
}
</script>

<style scoped>
.chips-select__button {
    height: 22px;
    width: fit-content;
    border-bottom: 1px dashed white;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
}

.chips-select__button::after {
    content: "\003c";
    text-align: center;
    font-size: 15px;
    width: 15px;
    height: 15px;
    margin-left: 5px;
	transition: .15s;
    vertical-align: middle;
    align-content: center;
    display: inline-block;
	transform: rotate(-90deg);
}

.chips-select__button.active::after {
	transform: rotate(90deg);
}

.chips-select__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 0px;
    margin: 10px 0;
}

.chips-group-key {
    font-size: 20px;
    display: flex; 
    text-transform: uppercase;
    text-align: center; 
    margin: auto 10px auto 0;
}

.chips-group-key:not(:first-child) {
    margin-left: 20px;
}
</style>