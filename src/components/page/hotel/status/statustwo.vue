<!----------Make By YourName---------------->
<template>
    <div class="q-pa-md">
        <q-card class="my-card">

      <div style="padding:2%;">
        <q-markup-table>
        <thead>
          <tr>
            <q-th class="text-left">รายการ</q-th>
            <th class="text-right">จำนวน</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td class="text-left">ผ้าปูที่นอน3.5ฟุต</td>
            <td class="text-right">2</td>
          </tr>
          <tr >
            <td class="text-left">Ice cream sandwich</td>
            <td class="text-right">237</td>
          </tr>
        </tbody>
      </q-markup-table>

        <q-btn type="submit" style="width:100%;" color="primary" label="เสร็จสิ้นการดำเนินการ" @click="nexts()" />
      </div>


    </q-card>
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
    async nexts() {
        this.$router.push({name : "statusthree"})

    },
    load:async function(){
}
},
    }
</script>
