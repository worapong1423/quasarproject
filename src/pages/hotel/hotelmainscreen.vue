<!----------Make By YourName---------------->
 <template>
<div>
    
    <listhotel/>
    <btadd/>
</div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
    import listhotel from "../../components/page/hotel/listhotel"
    import btadd from "../../components/share/btadd"
    
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        listhotel,
        btadd,
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
}
},
    }
</script>