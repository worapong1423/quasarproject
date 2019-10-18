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
        <q-input outlined v-model="text" >ผ้าปูที่นอน3.5ฟุต/จำนวน</q-input>
        <br>

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
          this.$router.push({name : "statusonesign"})

        },

  load:async function(){
}
},
  }
</script>