<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-header reveal elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          

          <q-toolbar-title>{{namehr}}</q-toolbar-title>
        </q-toolbar>
      </q-header>

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
    namehr : {
        type : String,
        default : 'ชื่อหน้า'
    }
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