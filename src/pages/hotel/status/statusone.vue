<!----------Make By YourName---------------->
 <template>
<div>
    <statusone/>
  <statussignone/>
    </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import statusone from "../../../components/page/hotel/status/statussone";
    import statussignone from "../../../components/page/hotel/status/statussignone";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        statusone,statussignone
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
        this.menuName = "รับออเดอร์"
    },
},
    }
</script>
