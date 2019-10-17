<!----------Make By YourName---------------->
 <template>
<div>
    <rate/>
    </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import rate from "../../../components/page/hotel/tabhotel/rate"
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        rate,

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
      let getRoute =this.$route.query
      alert(getRoute.id);
}
},
    }
</script>
