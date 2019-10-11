
import { make } from 'vuex-pathify'
import axios from '../axios';

const state = {
    lists:[],
    form: {}
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

     create : async function(context,params){
     let x = await axios.post(`/api/test`, params)
     .then((r) => {
        return true;
     }).catch((e) => {
        return false;
      });
      return x;
    },
     read : async function(){
       let list = await axios.get(`/api/test`)
        .then((r) => {
            state.lists = r.data
            return true;
        }).catch((e) => {
            alert(JSON.stringify(e.response));
            return false;
         });

         return list;
    },

    async updateData(context,params){
        let x = await axios.put(`/api/test/${params.id}`, params)
        .then((r) => {
           return true;
        }).catch((e) => {
           return false;
         });
         return x;
    },
    async destroyData(context,id){
        let confirms = confirm('Do you want to delete this data ?');
        if(confirms){
            let x = await axios.delete(`/api/test/${id}`)
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
