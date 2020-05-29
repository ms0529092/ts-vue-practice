import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    //   loginSuccess(){

    //   },
    //   loginFaild(){

    //   },
    //   signSuccess(){

    //   },
    //   signFaild(){

    //   }
    
  },
  actions: {
      login({ commit } ,value){
        axios.post('http://localhost:9090/login', value)
        .then(res=>{
            console.log('res' ,res.data);
        })
        .catch(error=>{
            console.log(error);
        })
      },
      sign({ commit }, value){
        axios.post('http://localhost:9090/sign', value)
        .then(res=>{
            console.log('res' ,res.data);
        })
        .catch(error=>{
            console.log(error);
        })
      }
  }
})
