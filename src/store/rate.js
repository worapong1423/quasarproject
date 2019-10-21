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
