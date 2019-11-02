<!----------Make By YourName---------------->
<template>
  <div>
    <personeladdtwo/>
  </div>
</template>

<script>
    import { get,sync,call } from "vuex-pathify";
    import personeladdtwo from "../../components/page/personel/personeladdtwo";
    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {
            personeladdtwo
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
