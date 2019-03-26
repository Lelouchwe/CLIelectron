<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <h1>MY GAMES LIST</h1>
        filters: {{filters}}
        <v-spacer></v-spacer>
        platforms: {{platforms}}
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
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                        <div
                                v-for="subItem in item.checkboxs"
                                :key="subItem.title"
                                class="list-tile"
                        >

                            <div v-if="subItem.mo==='filters'">
                                <v-checkbox v-model="filters" :label="subItem.label" :value="subItem.value"></v-checkbox>
                            </div>
                            <div v-else-if="subItem.mo==='platforms'">
                                <v-checkbox v-model="platforms" :label="subItem.label" :value="subItem.value"></v-checkbox>
                            </div>

                        </div>
                    </v-list-group>
                </v-list>
                <!--<v-flex>
                    <v-card-text>Filters</v-card-text>
                    <v-card-text>
                        <v-checkbox v-model="filters" label="Installed" value="Installed"></v-checkbox>
                        <v-checkbox v-model="filters" label="Favourite" value="Favourite"></v-checkbox>
                        <v-checkbox v-model="filters" label="Uninstalled" value="Uninstalled"></v-checkbox>
                        <v-checkbox v-model="filters" label="Hidden" value="Hidden"></v-checkbox>
                    </v-card-text>
                    <v-card-text>Platforms</v-card-text>
                    <v-card-text>
                        <v-checkbox v-model="platforms" label="Steam" value="Steam"></v-checkbox>
                        <v-checkbox v-model="platforms" label="GOG" value="GOG"></v-checkbox>
                        <v-checkbox v-model="platforms" label="Uplay" value="Uplay"></v-checkbox>
                        <v-checkbox v-model="platforms" label="Origin" value="Origin"></v-checkbox>
                    </v-card-text>
                </v-flex>-->
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
                        checkboxs:[
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
                        checkboxs:[
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
                    }
                ],
                filters:[],
                platforms:[]
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
    width: 15%;
    background-color: rgba(8, 8, 15, 0.8);
}
    .list-tile{padding-left: 15px;}
    .list{
        background: transparent;
        width: 100%;
        color: rgba(177, 175, 173, 0.8);
    }
</style>
