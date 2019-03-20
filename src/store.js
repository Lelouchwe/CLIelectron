import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:"PIDARAS!"
  },
  mutations: {

  },
  actions: {

  },
  getters:{
    GETMASG:(state) => state.msg
  }
})
