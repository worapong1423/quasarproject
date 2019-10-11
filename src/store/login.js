import axios from '../axios'

import { make } from 'vuex-pathify'

const state = {
    user: {
        email:'test@test.com',
        password:'12345678'

    }
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

   

async login(context,params){
   let loginform = await axios.post('/api/auth/login', state.user)
    .then((r) => {
        //alert('loginsuccess')
        localStorage.setItem('api_token',r.data.access_token);
        return true
    }).catch((e) => { 
        //alert('loginfailed')
        return false
     });
     return loginform
},
async userLogout(context,params){
     let logoutform = await axios.get('/api/auth/logout')
     .then((r) => {
         alert('logout success')
         
     }).catch((e) => { 
         
         alert('logout error')
      });
      
      await localStorage.removeItem('api_token')
      await localStorage.clear()
 },


async NameMethods(context,params){

}

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }