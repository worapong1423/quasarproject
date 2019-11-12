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
        <q-markup-table separate-close-popup >
        <thead>
        <tr>
          <th class="text-left">รายการ</th>
          <th class="text-right">จำนวน</th>
        </tr>
        </thead>
        <tbody >
        <tr  >
          <td  class="text-left" style="padding:12px 12px;">
            ผ้าปูที่นอน3.5ฟุต
          </td>
          <td class="text-right" style="padding:12px 12px;">
            <q-input outlined v-model="ph" placeholder="" color="white" />
          </td>
        </tr>
        <tr  >
          <td class="text-left" style="padding:12px 12px;">
            ผ้าปูที่นอน5-6ฟุต
          </td>
          <td class="text-right" style="padding:12px 12px;">
            <q-input outlined v-model="ph" placeholder="" color="white" />
          </td>
        </tr>
        </tbody>
        </q-markup-table>


      </div>


    </q-card>
  </div>
</template>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
  }

  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }

  .item1 {
    grid-column: 1 / 5;
  }
</style>
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
  async sign() {
          this.$router.push({name : "statusonesign"})

        },

  load:async function(){
}
},
  }
</script>
