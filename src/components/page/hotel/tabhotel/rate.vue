<!----------Make By YourName---------------->
<template>
    <div style="padding:5%;">
      <div v-if="!ilke" >
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">รายการ</th>
            <th class="text-right">บาท/ชิ้น</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left"></td>
            <td class="text-right"></td>
          </tr>
        </tbody>
      </q-markup-table>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn v-on:click="ilke=true" fab icon="edit" color="primary"  />
      </q-page-sticky>
      </div>

      <div v-else-if="ilke">
        <q-markup-table>
          <thead>
          <tr>
            <th class="text-left">รายการ</th>
            <th class="text-right">บาท/ชิ้น</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="text-left"></td>
            <q-input  outlined class="text-right" v-model=""  />
          </tr>
          </tbody>
        </q-markup-table>

      </div>
    </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
    return {
        ilke:false,
        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
            this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
        let id =this.$route.params.id;
        await this.readOne(id);
}
},
    }
</script>
