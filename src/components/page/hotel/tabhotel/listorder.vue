<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>

      <q-page-container>
        <pre>{{hotelData}}</pre>
      </q-page-container>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="addorder()" fab icon="add" color="primary"  />
      </q-page-sticky>

    </q-layout>
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

        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
    /**** Call loading methods*/
           await this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{
        ...sync('order/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
        ...call('order/*'),
    /******* Methods default run ******/


    async addorder() {
          this.$router.push('/hotel/statusone')

        },

    load:async function(){
      let getRoute =this.$route.query
      await this.readOne(getRoute.id);
}
},
    }
</script>
