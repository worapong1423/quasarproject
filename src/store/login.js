import axios from '../axios'

import { make } from 'vuex-pathify'

const state = {
    user: {},
    userDetail: null,
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

  async axiosSetToken(context,token){

    let tokenLocal =   localStorage.getItem('api_token');
    //console.log(tokenLocal);
    axios.defaults.headers.common = { 'Authorization': `Bearer ${(tokenLocal)?tokenLocal:token}` }
  },


async login(context,params){
   let loginform = await axios.post('/api/auth/login', state.user)
    .then(async (r) => {
        //alert('loginsuccess')
        localStorage.setItem('api_token',r.data.access_token);
        await actions.axiosSetToken(context,r.data.access_token);
        state.userDetail = r
        return r
    }).catch((e) => {
        //alert('loginfailed')
        return e
     });
     return loginform
},
async userLogout(context,params){
     let logoutform = await axios.get('/api/auth/logout')
     .then((r) => {
         return r

     }).catch((e) => {

         alert('logout error')
      });
      state.user ={}
      await localStorage.removeItem('api_token')
      await localStorage.clear()
 },
 async getUser(context,params){
  let res = await axios.get('/api/auth/user')
  .then((r) => {
      return r.data

  }).catch((e) => {

     return e
   });
   return res
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
