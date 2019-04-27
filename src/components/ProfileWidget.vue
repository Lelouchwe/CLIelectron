<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="bottom_tollbar">
        <v-avatar
                size="35px"
                color="grey lighten-4"
        >
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <div class="userName">
            <p>{{userName}}</p>
        </div>
        <div class="icons_wrapper">
            <v-dialog v-model="dialog" fullscreen>
                <template v-slot:activator="{ on }">
                    <v-icon v-on="on">
                        settings
                    </v-icon>
                </template>
            <settings @cls="dialog=false"></settings>
            </v-dialog>
        </div>
    </div>
</template>

<script>
    import Settings from '@/components/Settings.vue'
    export default {
        name: "ProfileWidget",
        components:{
            Settings
        },
        data(){
            return{
                userName:'Vitailo',
                dialog:false
            }
        }
    }
</script>

<style scoped>
    .bottom_tollbar{
        background-color: #222528;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 55px;
        width: 20%;
        padding: 10px 10px 10px 20px;
        display: flex;
        align-content: center;
        align-items: center;
    }
    .userName{
        padding-top: 15px;
        padding-left: 10px;
    }
    .icons_wrapper{
        right: 10px;
        position: absolute;

    }
    .icon{
        cursor: pointer;
    }
    .dialog{
        background-color: #202225;
    }
</style>
