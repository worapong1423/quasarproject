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
        <thead>
        <tr>
          <th style="padding:12px 12px;" class="text-left">รายการ</th>
          <th style="padding:12px 8px;" class="text-right">จำนวน</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="text-left" style="padding:12px 12px;">
            ผ้าปูที่นอน3.5ฟุต
          </th>
          <th class="text-right" style="padding:12px 12px;">
            <q-input outlined v-model="ph" placeholder="" color="white" />
          </th>
        </tr>
        </tbody>
        </q-markup-table>

        <q-btn type="submit" style="width:100%;" color="primary" label="ยืนยัน" @click="sign()" />
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
  async sign() {
          this.$router.push({name : "statusonesign"})

        },

  load:async function(){
}
},
  }
</script>
