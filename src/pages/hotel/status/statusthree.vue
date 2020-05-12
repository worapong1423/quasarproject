<!----------Make By YourName---------------->
<template>
  <div>
    <q-scroll-area
      :delay="1200"
      style="height: auto; width:auto;"
    >
    <statusthree/>
    </q-scroll-area>
  </div>
</template>

<script>
    import { get,sync,call } from "vuex-pathify";
    import statusthree from "../../../components/page/hotel/status/statusthree";
    import statussigntwo from "../../../components/page/hotel/status/statussigntwo";
    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {
            statusthree,statussigntwo
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
            ...sync('app/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{

            /******* Methods default run ******/
            load:async function(){
                this.menuName = "ส่งคืนออเดอร์"
            },
        },
    }
</script>
