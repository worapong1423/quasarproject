<!----------Make By YourName---------------->
<template>
  <div>
    <statusfinal/>
  </div>
</template>

<script>
    import { get,sync,call } from "vuex-pathify";
    import statusfinal from "../../../components/page/hotel/status/statusfinal";
    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {
            statusfinal,
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
