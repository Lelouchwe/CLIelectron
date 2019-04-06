<template>
    <v-card class="container">
        <div class="side_list">
            <v-list two-line subheader v-for="(item,i) in items" :key="i">
                <v-subheader>{{item.title}}</v-subheader>
                <v-list-tile v-for="(it,j) in item.lst" :key="j">
                    <v-list-tile-content>{{it.title}}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </div>
        <div class="content">
            <v-btn
                    color="primary"
                    flat
                    @click="closeDialog"
            >
                CLOSE
            </v-btn>
        </div>
    </v-card>
    <!--<v-card v-on:keyup.esc="closeDialog">
        <v-card-title
                class="headline grey lighten-2"
                primary-title
        >
            Privacy Policy
        </v-card-title>

        <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    flat
                    @click="closeDialog"
            >
                I accept
            </v-btn>
        </v-card-actions>
    </v-card>-->
</template>

<script>
    export default {
        name: "Settings",
        data(){
          return{
              items:[
                  {
                      title:'Настройки пользователя',
                      lst:[
                          {
                              title:'Учётная Запис'
                          },
                          {
                              title:'Учётная Запис'
                          },
                          {
                              title:'Учётная Запис'
                          }
                      ]
                  },
                  {
                      title:'Настройки приложения',
                      lst:[
                          {
                              title:'Учётная Запис'
                          },
                          {
                              title:'Учётная Запис'
                          },
                          {
                              title:'Учётная Запис'
                          }
                      ]
                  }
              ]
          }
        },
        methods:{
            closeDialog(){
                this.$emit('cls');
            }
        }
    }
</script>

<style scoped>
    .container{
        background-color: #202225;
        width: 100%;
        height: 100%;
        display: flex;
    }
    .side_list{
        height: 100%;
        width: 30%;
        background: darkgray;
    }
    .content{
        width: 70%;
    }

</style>
