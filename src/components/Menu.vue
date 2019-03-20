<template>
    <div class="side_menu_container">
        <div @click="load" class="main_side_menu_item" v-for="(item, i) in sideMenuItems" :key="i" :id="i"
        @mouseenter="activeMenuItemID = item.id"
        @mouseleave="activeMenuItemID=''">
            <span>{{item.name}}</span>
            <span>{{current_menu_item}}</span>
            <div v-if="item.subItems" class="side_items_menu_wrapper" :id="item.id">
                <div v-if="item.id===activeMenuItemID" v-for="(subitem, j) in item.subItems" :key="j" class="sub_menu_item">
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
                activeMenuItemID:'',
                current_menu_item:'',
                current_subitems:[],
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
                        id:'Lib',
                        subItems:[
                            {
                                name:'Name1',
                            },
                            {
                                name:'Name2'
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            load(){
                this.current_menu_item =  this.$store.getters.GETMASG;
            },
        },
        computed:{
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
        text-align: left;
        padding-top: 5%;
        padding-bottom: 5%;
        opacity: .8;
    }
    .main_side_menu_item:first-child{
        margin-bottom: 5%;
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
        display: block;
        transition: .4s;
    }
    .sub_menu_item{
        margin-bottom: 10%;
        opacity: .7;
    }
    .sub_menu_item:hover{
        opacity: 1;
        transition: .4s;
    }
</style>
