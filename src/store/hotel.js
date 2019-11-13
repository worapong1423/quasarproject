import axios from '../axios';

import { make } from 'vuex-pathify'
const state = {
  hotel:[],
  hotelform:{},
  hoteldetail:{},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
async readhoteldata() {
let load = await axios.get('/api/hotel')
  .then((r) => {
    state.hotel = r.data
    return true;
  }).catch((e) => {
    alert(JSON.stringify(e.response));
    return false;
});
    return load;
  },

  createhotelData : async function(context,params){
    let x = await axios.post(`/api/hotel`, params)
    .then((r) => {
       return true;
    }).catch((e) => {
       return false;
     });
     return x;
   },

async updatehotelData(context, params) {
  let load = await axios.put(`/api/hotel/${params.id}`, params)
    .then((r) => {
    alert('Update Data Success');
    return true;
  }).catch((e) => {
    alert('Error Update');
    return false;
  });
    return load
},

async destroyhotelData(context,id ){
  let confirms = confirm('Do you want to delete this data ?');
  if(confirms){
      let x = await axios.delete(`/api/hotel/${id}`)
  .then(async (r) => {
      alert('Delete Success');
      await actions.readhoteldata();
  }).catch((e) => {
      alert('Delete Error');
   });
  }


},
async readhotelbyId(context,id){
  let x = await axios.get(`/api/hotel/${id}`)
  .then(async (r) => {
    state.hoteldetail = r.data
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
