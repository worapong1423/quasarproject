<!----------Make By YourName---------------->
<template>
    <div style="padding:5%;">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">รายการ</th>
            <th class="text-right">บาท/ชิ้น</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">{{(index+1)}}.  {{hotel.Hotel_name}}</td>
            <td class="text-right">{{(index+1)}}.  {{hotel.Hotel_name}}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify"; 
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

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