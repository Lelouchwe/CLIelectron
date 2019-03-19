<template>
    <div class="side_menu_container">
        <div @click="activeMenuItem=true" class="main_side_menu_item" v-for="(item, i) in sideMenuItems" :key="i">
            <span>{{item.name}}</span>
            <div class="side_items_menu_wrapper" :id="item.id">
                <div v-show="activeMenuItem" v-for="(subitem, j) in item.subItems" :key="j" class="sub_menu_item">
                    {{subitem.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data(){
            return{
                activeMenuItem:false,
                sideMenuItems:[
                    {
                        name:'Home page',
                        id:'Home'
                    },
                    {
                        name:'Store',
                        id:'store_sub',
                        subItems:[
                            {
                                name:'Просмотр игр'
                            },
                            {
                                name:'Акции'
                            },
                            {
                                name:'Бесплатные игры'
                            }
                        ]
                    },
                    {
                        name:'Library',
                        id:'Lib'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .side_menu_container{
        width: 25%;
        position: fixed;
        height: 100vh;
        background-color: #27272d;
        padding-top: 3%;
    }
    .main_side_menu_item{
        margin-bottom: 2%;
        cursor: pointer;
        padding-left: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
        opacity: .8;
    }
    .main_side_menu_item span{
        font-size: 18px;
    }
    .main_side_menu_item:hover{
        background-color: rgb(25, 25, 31);
        transition: .4s ease-in-out;
        opacity: 1;
    }
    .side_items_menu_wrapper{
        padding-left: 20%;
        margin-top: 10%;
        display: none;
        transition: .4s;
    }
</style>
