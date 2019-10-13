<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>


      <q-page-container>
        <div v-for="hotel,index in hotel" :key="index">
        <q-list bordered separator>
            <q-item clickable v-ripple >
              <q-item-section @click="openpage()">{{(index+1)}}.  {{hotel.Hotel_name}}</q-item-section>
            </q-item>
        </q-list>
        </div>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="addhotel()" fab icon="add" color="primary"  />
        </q-page-sticky>

      </q-page-container>
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
            this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed:{
        ...sync('hotel/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
        ...call('hotel/*'),
    /******* Methods default run ******/

    async openpage() {
          this.$router.push('/hotel/test')


        },
    async addhotel() {
          this.$router.push('/hotel/addhotel')

        },

    load:async function(){
      await this.getData();
}
},
    }
</script>
