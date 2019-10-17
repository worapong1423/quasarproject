<!----------Make By YourName---------------->
 <template>
<div>
    <addlist/>
    </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import addlist from "../../../components/page/hotel/tabhotel/listorder";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        addlist,

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
