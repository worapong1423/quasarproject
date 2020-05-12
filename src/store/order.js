import axios from '../axios'

import { make } from 'vuex-pathify'
const state = {
  orderData : {},
  orderdetailData : {},
  ordersId :{},
  // detailData : null,
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

  async readorderbyID(context,id){
    let x = await axios.get(`/api/hotel/${id}/order`)
      .then(async (r) => {
        state.orderData = r.data
      }).catch((e) => {

      });
  },
  // async readorderdetailbyID(context,id){
  //   let x = await axios.get(`/api/order/${id}/orderdetail`)
  //     .then(async (r) => {
  //       state.orderdetailData = r.data
  //     }).catch((e) => {

  //     });
  // },

  async getorderbyID(context,{hotelId,orderID}){
    let x = await axios.get(`/api/hotel/${hotelId}/order/${orderID}`)
      .then(async (r) => {
        return r.data
      }).catch((e) => {
        return e
      });
      return x
  },
    createorderData : async function(context,{hotelId,form}){
      let x = await axios.post(`/api/hotel/${hotelId}/order`, form)
      .then((r) => {
         return r;
      }).catch((e) => {
         return e;
       });
       return x;
     },
     updateorderData : async function(context,{hotelId,form,orderId}){
      let res = await axios.put(`/api/hotel/${hotelId}/order/${orderId}`, form)
        .then((r) => {
          return r;
        }).catch((e) => {
          return e;
        });
      return res;
    },
  createorderdetailData : async function(context,{orderId,form}){
    let ordercheck = await axios.post(`/api/order/${orderId}/orderdetail`, form.order_detail)
      .then((r) => {
        return r;
      }).catch((e) => {
        return e;
      });
    return ordercheck;
  },
  updateorderdetailData : async function(context,{orderId,form}){
    let res = await axios.put(`/api/order/${orderId}/orderdetail/0`, form.order_detail)
      .then((r) => {
        return r;
      }).catch((e) => {
        return e;
      });
    return res;
  },

  getOrderDetailData: async function(context,orderId) {
    return axios.get(`/api/order/${orderId}/orderdetail`).then(
        response => {
            // state.detailData = response.data
            return response.data
        },
        error => {
            return error.response.data
        }
    )
  },

  async destroyorderData(context,{hotelId,orderId}){
    let confirms = confirm('Do you want to delete this data ?');
    if(confirms){
        let x = await axios.delete(`/api/hotel/${hotelId}/order/${orderId}`,)
    .then(async (r) => {
        alert('Delete Success');
        return r
    }).catch((e) => {
      alert('Delete Error');
        return e
     });
     return x
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
