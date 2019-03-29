<template>
  <v-app>
  <toolbar></toolbar>
    <div class="wrapper">
    <Menu/>
    <v-content class="view">
            <!--<v-btn @click="go('login')">Login!</v-btn>-->
            <!--<v-btn @click="go('home')">Home</v-btn>-->
            <router-view></router-view>
    </v-content>
    </div>

  </v-app>
</template>

<script>
// import frameview from '@/components/frame.vue'
import toolbar from '@/components/toolbar.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'frame',
  components: {
    Menu,
    // frameview,
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
