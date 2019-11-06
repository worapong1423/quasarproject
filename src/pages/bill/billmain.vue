<!----------Make By YourName---------------->
<template>
  <div>
    <listbill/>
  </div>
</template>

<script>
    import { get,sync,call } from "vuex-pathify";
    import listbill from "../../components/page/bill/listbill";
    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {
            listbill,

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
                this.menuName = "ใบเสร็จรับเงิน"
            },
        },
    }
</script>
