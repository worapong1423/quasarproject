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
    import headerdraw from "../../components/page/share/headerdraw"
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        listhotel,btadd,headerdraw,
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