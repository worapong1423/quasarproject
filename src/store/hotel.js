import axios from '../axios'

import { make } from 'vuex-pathify'
const state = {
  hotel:[],

}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
async getData() {
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
async storeData(context, params) {
  let load = await axios.post('/api/hotel', params)
  .then((r) => {
    alert('Save Data Success');
    return true;
  }).catch((e) => {
    alert('Error Save');
    return false;
  });
    return load;
},

async updateData(context, params) {
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

async destroyData(context, params) {

  let confirms = confirm('Do you want to delete this data ?');
  if(confirms){
    let load = await axios.delete(`/api/test/${id}`)
    .then(async (r) => {
      alert('Delete Data Success');
      await actions.read();
    }).catch((e) => {
      alert('Error Delete');
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
