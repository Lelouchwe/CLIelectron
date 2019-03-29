<template>
    <div>
        <v-layout row class="nav">

                <v-flex>
                    <v-text-field v-model="search" label="Game name" clearable dark></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex>
                    <v-btn>Platforms</v-btn>
                </v-flex>

        </v-layout>
        {{search}}
    </div>
</template>

<script>
    export default {
        name: "GlobalStore",
        data(){
            return{
                search:null
            }
        }
    }
</script>

<style scoped>
    .nav{
        background-color: rgba(36, 36, 36, 0.90);
        padding: 15px;
    }
</style>
