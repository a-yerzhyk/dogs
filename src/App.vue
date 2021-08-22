<template>
	<div id="app">
		<div class="container">
			<DefaultLayout></DefaultLayout>
		</div>
	</div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
	name: 'App',
	components: {
		DefaultLayout
	}
}
</script>

<style>
#app {
	font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #626262;
    letter-spacing: 0.01em;
}
</style>
<style src="@/assets/styles/app.css" lang="css"></style>