import axios from '../axios'

import { make } from 'vuex-pathify'
const state = {
  orderData:{},
  hotel:[],
  hotelform:{},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {


    create : async function(context,params){
      let x = await axios.post(`/api/hotel`, params)
      .then((r) => {
         return true;
      }).catch((e) => {
         return false;
       });
       return x;
     },

  async update(context, params) {
    let load = await axios.put(`/api/order/${params.id}`, params)
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
        let x = await axios.delete(`/api/order/${id}`)
    .then(async (r) => {
        alert('Delete Success');
        await actions.read();
    }).catch((e) => {
        alert('Delete Error');
     });
    }



  },

  async readbyID(context,id){
    let x = await axios.get(`/api/order/${id}`)
    .then(async (r) => {
      state.hotelData = r.data
      console.log(r.data);
    }).catch((e) => {

     });
  }

  }


  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }
