import axios from '../axios'

import { make } from 'vuex-pathify'
const state = {
  orderData :{},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

  async readbyID(context,id){
    let x = await axios.get(`/api/hotel/${id}/order`)
      .then(async (r) => {
        state.orderData = r.data
        console.log(r.data);
      }).catch((e) => {

      });
  },

    create : async function(context,params){
      let x = await axios.post(`/api/`, params)
      .then((r) => {
         return true;
      }).catch((e) => {
         return false;
       });
       return x;
     },

  async update(context, params) {
    let load = await axios.put(`/api/order/`, params)
      .then((r) => {
      alert('Update Data Success');
      return true;
    }).catch((e) => {
      alert('Error Update');
      return false;
    });
      return load
  },

  async destroyData(context,id ){
    let confirms = confirm('Do you want to delete this data ?');
    if(confirms){
        let x = await axios.delete(`/api/order/`)
    .then(async (r) => {
        alert('Delete Success');
        await actions.read();
    }).catch((e) => {
        alert('Delete Error');
     });
    }



  },



  }


  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }
