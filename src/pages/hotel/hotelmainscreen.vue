<!----------Make By YourName---------------->
 <template>
<div>

  <listhotel/>
</div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import listhotel from "../../components/page/hotel/listhotel"




export default {
    components: {
        listhotel,
    },
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
        this.menuName = "โรงแรม"
}
},
    }
</script>
