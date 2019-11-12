import axios from '../axios'

import { make } from 'vuex-pathify'
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
  async readbyID(context,id){
    let x = await axios.get(`/api/hotel/${id}/rate`)
      .then(async (r) => {
        state.rateList = r.data
        console.log(r.data);
      }).catch((e) => {

      });
  },
  create : async function(context,{hotelId,form}){
    let x = await axios.post(`/api/hotel/${hotelId}/rate`, form)
      .then((r) => {
        return true;
      }).catch((e) => {
        return false;
      });
    return x;
  },

  async update(context, {hotelId,form}) {
    let load = await axios.put(`/api/hotel/${hotelId}/rate/0`, form)
      .then((r) => {
        return true;
      }).catch((e) => {
        alert('Error Update');
        return false;
      });
    return load
  },
  async destroyData(context,{hotelId} ){
    let confirms = confirm('Do you want to delete this data ?');
    if(confirms){
      let x = await axios.delete(`/api/hotel/${hotelId}/rate/0`)
        .then(async (r) => {
          alert('Delete Success');
        }).catch((e) => {
          alert('Delete Error');
        });
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
