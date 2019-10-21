<!----------Make By YourName---------------->
<template>
    <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="arrow_back_ios"
          @click="back"
        />

        <q-toolbar-title>
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
export default {
    name: 'layoutgoback',
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
    async back() {
        this.$router.go(-1)

    },
    load:async function(){
}
},
    }
</script>
