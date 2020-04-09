import axios from '../axios'

import {dispatch, make} from 'vuex-pathify'
const state = {
  rateList :[],
  rateedit :{},
  product : {},
  typerate: false,
  typeadd:false,
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
  async readratebyID(context,id){
    let x = await axios.get(`/api/hotel/${id}/rate`)
      .then(async (r) => {
        state.rateList = r.data
      }).catch((e) => {

      });
  },
  createrateData : async function(context,{hotelId,form}){
    let x = await axios.post(`/api/hotel/${hotelId}/rate`, form)
      .then((r) => {
        return true;
      }).catch((e) => {
        return false;
      });
    return x;
  },

  async updaterateData(context, {hotelId,form}) {
    let load = await axios.put(`/api/hotel/${hotelId}/rate/0`, form)
      .then((r) => {
        return true;
      }).catch((e) => {
        alert('Error Update');
        return false;
      });

    await dispatch("rate/readratebyID",hotelId)
    return load
  },
  async destroyrateData(context,{hotelId,id} ){
    let confirms = confirm('Do you want to delete this data ?');
    if(confirms){
      let x = await axios.delete(`/api/hotel/${hotelId}/rate/${id}`)
        .then(async (r) => {
          alert('Delete Success');
        }).catch((e) => {
          alert('Delete Error');
        });

      await dispatch("rate/readratebyID",hotelId)

    }


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
