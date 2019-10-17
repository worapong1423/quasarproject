<!----------Make By YourName---------------->
 <template>
<div>
    <detail/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="edit()" fab icon="edit" color="primary"  />
    </q-page-sticky>
    </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import detail from "../../../components/page/hotel/tabhotel/detail"
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        detail,
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
    async edit() {
          this.$router.push('/hotel/layouttab/editdetail')

        },
    load:async function(){
      let getRoute =this.$route.query
      alert(getRoute.id);
}
},
    }
</script>
