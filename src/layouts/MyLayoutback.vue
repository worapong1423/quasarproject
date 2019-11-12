<template>
  <q-layout view="lHh Lpr lFf">
    <toolbar></toolbar>

  </q-layout>
</template>


<script>
    import { get,sync,call } from "vuex-pathify";
    import toolbar from "../components/share/toolbarback";

    export default {
        name: 'MyLayout',

        /*-------------------------Load Component---------------------------------------*/
        components: { toolbar
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
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{

            /******* Methods default run ******/

            /******* Methods default run ******/
            load:async function(){
            }
        },
    }

</script>
