<!----------Make By YourName---------------->
<template>
  <div>
    <topicshop/>
    <shopmain/>
  </div>
</template>
<script>
    import {
        get,
        sync,
        call
    } from "vuex-pathify";
    import topicshop from "../../components/page/shop/topicshop";
    import shopmain from "../../components/page/shop/shopmain";
    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {
            topicshop,shopmain
        },
        /*-------------------------Set Component---------------------------------------*/
        props: {
        },
        /*-------------------------DataVarible---------------------------------------*/
        data() {
            return {
            };
        },
        /*-------------------------Run Methods when Start this Page------------------------------------------*/
        async mounted() {
            /**** Call loading methods*/
            await this.load();
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
                this.menuName = "ร้านค้า"
            },
        },
    }
</script>
