<template>
    <div class="label-list">
        <!--<BigLabel v-for="(item, i) in items" :item="item" :key="i"/>-->
        <SlimLabel :item="item" v-for="(item , i) in items" :key="i"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import BigLabel from '@/BigLabel';
    import { beers } from '@/beers';
    import SlimLabel from '@/SlimLabel';

    export default {
        name: 'App',
        components: {
            SlimLabel,
            BigLabel,
            HelloWorld,
        },
        setup() {
            return {
                items: beers,
            };
        },
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto&display=swap');

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Merriweather', serif;
    }

    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 11px;
        color: #2c3e50;
        margin: 0 auto;
        padding: 0;
        max-width: 1000px;
    }

    .label-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    p {
        margin: 0 0 .25rem;
    }
</style>
