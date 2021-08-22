<template>
    <div id="default-layout">
        <Header />
        <Main />
    </div>
</template>

<script>
import Header from '@/layouts/Header.vue';
import Main from '@/layouts/Main.vue';

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Main,
    }
}
</script>

<style>
#default-layout {
    height: auto;
    min-height: calc(100vh - 100px);
    background: linear-gradient(180deg, #1B1A1F 0%, #111013 99.09%);
}
</style>
