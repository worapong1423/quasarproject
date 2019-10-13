<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-header reveal elevated>
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          

          <q-toolbar-title>โรงเเรม</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-list bordered separator>
            <q-item clickable v-ripple>
                <q-item-section>โรงเเรม อินเตอร์เนชั่นแนลเฮาล์</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>โรงเเรม วีพี</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>โรงเเรม เอ็มพลัส</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>โรงเเรม Zen Hostel</q-item-section>
            </q-item>
        </q-list>

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

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>