<template>
    <div class="label">

        <div class="label-head">
            <BottleCap class="label-cap" :color="item.cap"/>
            <h2 class="title">
                {{ item.name }}
                <span class="abv">{{ item.abv }}%</span>
                <span class="type" v-if="item.type">{{ item.type }}</span>
            </h2>
        </div>

        <div class="label-body">
            <div class="description">
                <p v-for="p in item.description">{{ p }}</p>
            </div>

            <div class="data">
                <table>
                    <tr>
                        <td>Jässtart</td>
                        <td>{{ item.fermentation }}</td>
                    </tr>
                    <tr>
                        <td>Flaskning</td>
                        <td>{{ item.bottling }}</td>
                    </tr>
                    <tr>
                        <td>Bäst före</td>
                        <td>{{ item.expiry }}</td>
                    </tr>
                </table>
            </div>

            <div class="numbers" v-if="!!item.numbers">
                <table>
                    <tr>
                        <td>OG</td>
                        <td>{{ item.numbers.og }}</td>
                    </tr>
                    <tr>
                        <td>FG</td>
                        <td>{{ item.numbers.fg }}</td>
                    </tr>
                    <tr v-if="item.numbers.ibu">
                        <td>Beska</td>
                        <td>{{ item.numbers.ibu }} IBU</td>
                    </tr>
                    <tr v-if="item.numbers.ebc">
                        <td>Färg</td>
                        <td>{{ item.numbers.ebc }} EBC</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="ingredients" v-if="item.ingredients">
            <p>
                <strong>Malt:</strong> {{ item.ingredients.malts }}
            </p>
            <p>
                <strong>Humle:</strong> {{ item.ingredients.hops }}
            </p>
            <p>
                <strong>Jäst:</strong> {{ item.ingredients.yeast }}
            </p>
        </div>
        
    </div>
</template>

<script>
    import BottleCap from '@/BottleCap';

    export default {
        name: 'BigLabel',
        props: {
            item: Object,
        },
        components: {
            BottleCap,
        },
        setup(props) {
            return {
                // 
            };
        },
    };
</script>

<style scoped>

    .label {
        border: 1px solid #ddd;
        padding-bottom: .5rem;
    }

    .label-head {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .title {
        flex-grow: 1;
        display: flex;
        flex-flow: row wrap;
        margin: .5rem 1rem .5rem 0;
    }

    .abv {
        margin-left: auto;
    }
    
    .type {
        flex-basis: 100%;
        font-size: 10px;
        color: #999;
    }

    .label-body {
        display: flex;
        flex-flow: row nowrap;
        padding: 0 1rem;
    }

    .description {
        flex: 1 0 50%;
        margin-right: auto;
    }
    
    .data, .numbers {
        flex: 0 1 auto;
        font-size: 10px;
        margin-left: 1rem;
    }

    .numbers .data-item span {
        min-width: 40px;
    }

    .data-item {
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: .25rem;
    }

    .data-item span {
        min-width: 60px;
    }
    
    td {
        white-space: nowrap;
    }

    .ingredients {
        margin-top: .5rem;
        padding: 0 1rem;
    }
    
    .ingredients p {
        
    }
    
</style>
