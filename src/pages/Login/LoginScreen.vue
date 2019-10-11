<!----------Make By YourName---------------->
 <template>
<div>
    <formlogin/>
    <loginbutton/>
</div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
    import formlogin from "../../components/page/Login/LoginFrom";
    import loginbutton from "../../components/page/Login/LoginButton";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
        formlogin,loginbutton
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