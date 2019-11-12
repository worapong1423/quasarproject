<!----------Make By YourName---------------->
<template>
  <div>
    <addfrom/>
  </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import addfrom from "../../components/page/hotel/addfromhotel"
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        addfrom

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
        this.menuName = "เพิ่มโรงแรม"
    }
},
    }
</script>
