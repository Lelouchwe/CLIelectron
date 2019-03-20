<template>
  <div id="app">
    <!-- <frameview/> -->
    <Menu></Menu>
    <button @click="go('login')">Login</button>
    <button @click="go('home')">Home</button>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import frameview from '@/components/frame.vue'
import Menu from '@/components/Menu.vue'
// const renderer = require("../src/assets/js/renderer.js")
// export default {

// }
export default {
  name: 'frame',
  components: {
    frameview,
    Menu
  },
  methods:{
    go:function (url) {
      this.$router.push({name:`${url}`});
    }
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600");

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
}
*{
  font-family: 'Montserrat', sans-serif;
  color: #eee;
}
body{
  color: #eee;
  margin: 0;
}
ul{
  list-style: none;
  padding-inline-start: 10px;
}
li{
  cursor: pointer;
}
  .content{
    width: 75%;
    margin-left: 25%;
  }
  button{
    color: #0a1829;
  }
</style>
