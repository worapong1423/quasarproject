<!----------Make By YourName---------------->
 <template>
<div>
     <forms/>
     <lists/>
  </div>
</template>

  <script>
  import { get,sync,call } from "vuex-pathify";
  import forms from '../components/page/index/form';
  import lists from '../components/page/index/list';
export default {
  name: 'Root',
  /*-------------------------Load Component---------------------------------------*/
  components: {
      forms,lists
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
