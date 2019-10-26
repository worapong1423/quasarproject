<!----------Make By YourName---------------->
<template>
    <div class="q-pa-md">
        <q-card class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>รายการที่  : HT0005</q-item-label>
          <q-item-label>โรงเเรม อินเตอร์เนชั่นแนลเฮาล์</q-item-label>
          <q-item-label caption>วันที่ 02 ก.พ. 2562</q-item-label>
        </q-item-section>
      </q-item>

      <div style="padding:2%;">
        <q-markup-table>
        <q-thead>
          <q-tr>
            <q-th class="text-left">รายการ</q-th>
            <th class="text-right">จำนวน</th>
          </q-tr>
        </q-thead>
        <q-tbody>
          <q-tr>
            <q-td class="text-left">ผ้าปูที่นอน3.5ฟุต</q-td>
            <td class="text-right">2</td>
          </q-tr>
          <q-tr>
            <q-td class="text-left">Ice cream sandwich</q-td>
            <q-td class="text-right">237</q-td>
          </q-tr>
        </q-tbody>
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
