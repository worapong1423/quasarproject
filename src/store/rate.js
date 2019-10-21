import axios from '../axios'

import { make } from 'vuex-pathify'
const state = {
  rateData : {},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
  async readOne(context,id){
    let x = await axios.get(`/api/rate/${id}`)
      .then(async (r) => {
        state.hotelData = r.data
        console.log(r.data);
      }).catch((e) => {

      });
  },
  create : async function(context,params){
    let x = await axios.post(`/api/rate`, params)
      .then((r) => {
        return true;
      }).catch((e) => {
        return false;
      });
    return x;
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
