import axios from '../axios';

import { make } from 'vuex-pathify'
const state = {
  shop :[],
  shopform:{},
  shopedit:{},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
  async readshopData() {
    let load = await axios.get('/api/shop')
      .then((r) => {
        state.shopform = r.data
        return true;
      }).catch((e) => {
        alert(JSON.stringify(e.response));
        return false;
      });
    return load;
  },

  createshopdata : async function(context,params){
    let x = await axios.post(`/api/shop`, params)
      .then((r) => {
        return true;
      }).catch((e) => {
        return false;
      });
    return x;
  },

  async updateshopData(context, params) {
    let load = await axios.put(`/api/shop/${params.id}`, params)
      .then((r) => {
        alert('Update Data Success');
        return true;
      }).catch((e) => {
        return false;
      });
    return load
  },
  async readshopdatabyID(context,id){
    let x = await axios.get(`/api/shop/${id}`)
      .then(async (r) => {
        state.shopform = r.data
        console.log(r.data);
      }).catch((e) => {

      });
  },




}






export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
