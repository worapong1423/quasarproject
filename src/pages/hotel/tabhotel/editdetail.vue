<!----------Make By YourName---------------->
 <template>
<div>
    <detail/>
        <q-btn type="submit" style="width:100%;" color="primary" label="บันทึก" @click="submit()" />
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
    async submit() {
          this.$router.push('/hotel/layouttab/tabdetail')

        },
    load:async function(){
}
},
    }
</script>