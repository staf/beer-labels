<template>
    <div v-for="i in count" class="label">
        <div class="title">
            <h4>{{ item.name }}</h4>
            <span>{{ item.abv }}%</span>
        </div>
        <div class="style" v-show="item.type">{{ item.type }}</div>
    </div>
</template>

<script>
    import { computed } from 'vue';

    export default {
        name: 'SlimLabel',
        props: {
            item: Object,
        },
        emits: [
            //
        ],
        components: {
            //
        },
        setup(props) {
            return {
                count: computed(() => Array.apply(null, new Array(props.item.count || 1))),
            };
        },
    };
</script>

<style scoped>
    .label {
        border: 1px solid #ddd;
        padding: .5rem;
    }
    
    .title {
        display: flex;
        flex-flow: row nowrap;
        font-size: 14px;
    }
    
    .title  h4 {
        margin: 0;
    }
    
    .title span {
        margin-left: auto;
    }
    
    .style {
        font-style: italic;
    }
</style>
