<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <h1>MY GAMES LIST</h1>
            <v-layout class="side_toolbar">
                <v-list class="list">
                    <v-list-group v-for="item in items"
                    :key="item.title"
                    v-model="item.active"
                    no-action
                    >
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    <v-list-tile-sub-title v-if="item.title==='filters' && filters.length>0" class="white--text">
                                        {{filters}}</v-list-tile-sub-title>
                                    <v-list-tile-sub-title v-else-if="item.title==='platforms' && platforms.length>0" class="white--text">
                                        {{platforms}}</v-list-tile-sub-title>
                                    <v-list-tile-sub-title v-else-if="item.title==='search' && search!==null" class="white--text">
                                        {{search}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                        <div
                                v-for="subItem in item.items"
                                :key="subItem.title"
                                class="list-tile"
                        >

                            <div v-if="subItem.mo==='filters'">
                                <v-checkbox v-model="filters" :label="subItem.label" :value="subItem.value" dark></v-checkbox>
                            </div>
                            <div v-else-if="subItem.mo==='platforms'">
                                <v-checkbox v-model="platforms" :label="subItem.label" :value="subItem.value" dark></v-checkbox>
                            </div>
                            <div v-if="subItem.mo==='search'">
                                <v-text-field class="input" v-model="search" :label="subItem.label" box clearable dark></v-text-field>
                            </div>

                        </div>
                    </v-list-group>
                    <v-btn @click="clearFilters">Clear All Filters</v-btn>
                </v-list>
            </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "MyGames",
        data(){
            return{
                items:[
                    {
                        title:'filters',
                        active:true,
                        items:[
                            {
                                label:'Installed',
                                value:'Installed',
                                mo:'filters'
                            },
                            {
                                label:'Favourite',
                                value:'Favourite',
                                mo:'filters'
                            },
                            {
                                label:'Uninstalled',
                                value:'Uninstalled',
                                mo:'filters'
                            },
                            {
                                label:'Hidden',
                                value:'Hidden',
                                mo:'filters'
                            }
                        ]
                    },
                    {
                        title:'platforms',
                        active:false,
                        items:[
                            {
                                label:'Steam',
                                value:'Steam',
                                mo:'platforms'
                            },
                            {
                                label:'GOG',
                                value:'GOG',
                                mo:'platforms'
                            },
                            {
                                label:'Uplay',
                                value:'Uplay',
                                mo:'platforms'
                            },
                            {
                                label:'Origin',
                                value:'Origin',
                                mo:'platforms'
                            }
                        ]
                    },
                    {
                        title:'search',
                        active:false,
                        items:[
                            {
                                label:'Name',
                                mo:'search'
                            }
                        ]
                    }
                ],
                filters:[],
                platforms:[],
                search:null
            }
        },
        methods:{
            clearFilters(){
                this.filters = [];
                this.platforms = [];
                this.search = null;
            }
        }
    }
</script>

<style scoped>
.side_toolbar{
    height: 100%;
    position: fixed;
    right: 0;
    top: 24px;
    width: 20%;
    background-color: rgba(8, 8, 15, 0.8);
}
    .list-tile{
        padding-left: 15px;
    }
    .list{
        background: transparent;
        width: 100%;
        color: rgba(177, 175, 173, 0.8);
    }
    .input{
        padding-right: 10px;
    }
</style>
