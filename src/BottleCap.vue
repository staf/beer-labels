<template>
    <div class="bottle-cap">
        <img :src="src" :alt="alt">
    </div>
</template>

<script lang="ts">
    import { computed, onMounted, ref } from 'vue';

    export default {
        name: 'BottleCap',
        props: {
            color: String,
        },
        setup(props) {
            return {
                alt: computed(() => `Bottle cap ${props.color}`),
                src: computed(() => `/${props.color}.jpg`),
            };
        },
    };
</script>

<style >
    .bottle-cap {
        padding-right: .51rem;
    }
    
    .bottle-cap img {
        height: 3rem;
        width: auto;
    }
</style>
