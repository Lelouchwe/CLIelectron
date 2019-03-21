<template>
  <v-app>
  <toolbar></toolbar>

    <!--<v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>-->
    <div class="wrapper">
    <Menu/>
    <v-content class="view">
        <v-container>
          <v-layout>
            <v-btn @click="go('login')">Login!</v-btn>
            <v-btn @click="go('home')">Home</v-btn>
            <router-view></router-view>
          </v-layout>
        </v-container>
    </v-content>
    </div>
    
  </v-app>
</template>

<script>
import frameview from '@/components/frame.vue'
import toolbar from '@/components/toolbar.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'frame',
  components: {
    Menu,
    frameview,
    toolbar
  },
  data () {
    return {
      //
    }
  },
  methods:{
    go:function (url) {
      this.$router.push({name:`${url}`});
    }
  }
}
</script>
<style scoped>
  .element::-webkit-scrollbar { width: 0; }
  .wrapper {
    margin-top: 24px;
  }
  .view{
    width: 75%;
    padding: 0px;
    margin-left: 25%;
  }
</style>
