<!----------Make By YourName---------------->
<template>
  <div>
    <statustwo/>
  </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import statustwo from "../../../components/page/hotel/status/statustwo"
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        statustwo,
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
            this.menuName = "ดำเนินการ"
        },
    },
}
    </script>
