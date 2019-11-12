<template>
  <q-layout view="lHh Lpr lFf">
    <toolbarmenu></toolbarmenu>

  </q-layout>
</template>


    <script>
    import { get,sync,call } from "vuex-pathify";
    import toolbarmenu from "../components/share/toolbarmenu";

export default {
  name: 'MyLayout',

    /*-------------------------Load Component---------------------------------------*/
    components: { toolbarmenu
    },
  /*-------------------------Set Component---------------------------------------*/
props:{
    titles : {
        type : String ,
    } ,

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {

    return {

        leftDrawerOpen: false
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
      ...sync('login/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
  ...call('login/*'),
    /******* Methods default run ******/
    load:async function(){
}
},
    }

</script>
