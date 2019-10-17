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
        <q-input outlined v-model="text" label="ผ้าปูที่นอน3.5ฟุต/จำนวน" /><br>
        <q-input outlined v-model="text" label="ผ้าปูที่นอน5-6ฟุต/จำนวน" /><br>
        <q-input outlined v-model="text" label="ปลอกหมอน/จำนวน" /><br>
        <q-input outlined v-model="text" label="ปลอกผ้านวมเล็ก/จำนวน" /><br>
        <q-input outlined v-model="text" label="ปลอกผ้านวมใหญ/จำนวน" /><br>
        <q-input outlined v-model="text" label="ผ้าเช็ดตัว/จำนวน" /><br>
        <q-input outlined v-model="text" label="ผ้าเช็ดหน้า/จำนวน" /><br>
        <q-input outlined v-model="text" label="ผ้าเช็ดมือ/จำนวน" /><br>
        <q-input outlined v-model="text" label="ผ้าเช็ดเท้า/จำนวน" /><br>
        <q-input outlined v-model="text" label="ผ้านวม ผ้าห่ม/จำนวน" /><br>
        <q-btn type="submit" style="width:100%;" color="primary" label="ขั้นตอนถัดไป" @click="sign()" />
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
          this.$router.push('/hotel/statusonesign')

        },

  load:async function(){
}
},
  }
</script>