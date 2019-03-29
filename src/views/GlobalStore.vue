<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-layout row class="nav">
            <v-menu v-model="menu" :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x>
                <template v-slot:activator="{ on }">
                    <v-btn color="indigo" dark v-on="on">
                        Search
                    </v-btn>
                </template>
                <v-card class="switches">
                    <v-card-text>
                        <v-list class="switches">
                            <v-list-tile>
                                <v-text-field color="purple" v-model="search" placeholder="Game name" flat height="30" clearable dark></v-text-field>
                            </v-list-tile>
                            <v-divider dark></v-divider>
                            <v-list-tile v-for="(item, index) in platforms"
                                         :key="index">
                                <v-list-tile-action>
                                    <v-switch color="purple" dark v-model="filters" :label="item.label" :value="item.label"></v-switch>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                    </v-card-text>
                    <v-divider dark></v-divider>
                    <v-card-actions>
                        <v-btn color="indigo" dark @click="menu=false">Cancel</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="indigo" dark @click="clear">Clear</v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "GlobalStore",
        data(){
            return{
                menu:false,
                search:null,
                platforms:[
                    { label: 'Steam' },
                    { label: 'GOG' },
                    { label: 'Uplay' },
                    { label: 'Origin' }
                ],
                filters:[]
            }
        },
        methods:{
            clear(){
                this.filters = [];
                this.search = null;
            }
        }
    }
</script>

<style scoped>
    .nav{
        /*background-color: rgba(36, 36, 36, 0.90);*/
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 5px;
    }
    .switches{
        background-color: #27272d;
    }
</style>
