import axios from '../axios'

import { make } from 'vuex-pathify'
const state = {

}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
async getData() {
let load = axios.get('/api/hotel')
  .then((r) => {

  }).catch((e) => {

});
  },
async storeData(context, params) {
  let load = axios.post('/api/hotel', params)
  .then((r) => {
    alert('Save Data Success');
  }).catch((e) => {
    alert('Error Save');
  });
},

async updateData(context, params) {
  let load = axios.put('/api/hotel' + params.id, params)
    .then((r) => {
    alert('Update Data Success');
  }).catch((e) => {
    alert('Error Update');
  });
},

async destroyData(context, params) {
  let load = axios.delete('/api/hotel' + params.id)
    .then((r) => {
    alert('Delete Data Success');
  }).catch((e) => {
    alert('Error Delete');
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
