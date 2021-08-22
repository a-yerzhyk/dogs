<template>
    <router-link :to="to" class="chips" active-class="chips-active" :exact="exact">
        <span class="chips__label" :class="{'chips__clearable': clearable}">{{this.chipsLabel}}</span>
    </router-link>
</template>

<script>
import stringMixin from '@/mixins/stringMixin'
export default {
    name: 'Chips',
    mixins: [stringMixin],
    data: () => ({

    }),
    props: {
        label: {
            type: String,
            required: true
        },
        path: String,
        clearable: {
            type: Boolean,
            default: true,
        },
        exact: Boolean
    },
    computed: {
        chipsLabel() {
            return this.uppercaseFirstLetter(this.label);
        },
        to() {
            if (this.clearable && this.$route.path === '/' + this.path) {
                return '/';
            } else {
                return this.path;
            }
        }
    },
}
</script>

<style scoped>
.chips {
    width: fit-content;
    height: 24px;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    border: 1px solid #626262;
    color: #626262;
    border-radius: 20px;
    background: transparent;
    cursor: pointer;
    margin-right: 10px;
}

.chips-active {
    border-color: #3C59F0;
    color: #3C59F0;
}

.chips-active .chips__clearable::after {
    content: "\00d7";
    text-align: center;
    margin-left: 5px;
}
</style>