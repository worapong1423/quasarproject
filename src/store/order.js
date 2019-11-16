import axios from '../axios'

import { make } from 'vuex-pathify'
const state = {
  orderData : {},
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

  async readorderbyID(context,id){
    let x = await axios.get(`/api/hotel/${id}/order`)
      .then(async (r) => {
        state.orderData = r.data
        console.log(r.data);
      }).catch((e) => {

      });
  },

    createorderData : async function(context,{hotelId,form}){
      let x = await axios.post(`/api/hotel/${hotelId}/order`, form)
      .then((r) => {
         return true;
      }).catch((e) => {
         return false;
       });
       return x;
     },
  createorderdetailData : async function(context,{orderId,form}){
    let ordercheck = await axios.post(`/api/order/${orderId}/orderdetail`, form.order_detail)
      .then((r) => {
        return true;
      }).catch((e) => {
        return false;
      });
    return x;
  },

  async updateorderData(context, params) {
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

  async destroyorderData(context,id ){
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
