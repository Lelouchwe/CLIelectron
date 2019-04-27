<template>
    <v-card class="container">
        <v-layout row justify-space-around>
            <v-flex md3 class="mt-5">
                <div>
                    <v-list two-line subheader v-for="(item,i) in items" :key="i" dark>
                        <v-subheader>{{item.title}}</v-subheader>
                        <v-list-tile v-for="(elem,j) in item.lst" :key="j" @click="selectedItem = elem">
                            <v-list-tile-content>{{elem.title}}</v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </div>
            </v-flex>
            <v-flex md7 class="mt-5">
                <v-card dark>
                  <v-card-title>{{selectedItem.title}}</v-card-title>

                  <v-card-actions>
                          <v-btn
                                  color="primary"
                                  flat
                                  @click="closeDialog"
                          >
                              CLOSE
                          </v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
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
                              title:'Учётная Запис',
                          },
                          {
                              title:'Чат'
                          }
                      ]
                  },
                  {
                      title:'Настройки приложения',
                      lst:[
                          {
                              title:'Выбор темы'
                          },

                      ]
                  }
              ],
              selectedItem:{title:'Учётная Запис'}
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
        width: 25%;
    }
    .content{
        width: 75%;
    }

</style>
