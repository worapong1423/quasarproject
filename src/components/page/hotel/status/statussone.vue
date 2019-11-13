<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>{{hoteldetail.name}}</q-item-label>
          <q-item-label caption></q-item-label>
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
        <tr v-for="rate in rateList" >
          <td class="text-left" style="padding:12px 12px;">
              {{rate.name}}
          </td>
          <td class="text-right" style="padding:12px 12px;">
            <q-input outlined v-model="orderData.amountin" placeholder="" color="white" />
          </td>
        </tr>
        <q-btn  style="width:100%;" color="primary" @click="submit()">บันทึก</q-btn>
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
  import moment from "moment";
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
      ...sync('hotel/*'),
      ...sync('order/*'),
      ...sync('rate/*'),

},
  /*-------------------------Methods------------------------------------------*/
methods:{
    ...call('hotel/*'),
    ...call('order/*'),
    ...call('rate/*'),

  /******* Methods default run ******/
  async sign() {
          this.$router.push({name : "statusonesign"})

        },
    async submit() {
        let id =this.$route.params.id;
        let check = await this.create({hotelId : id,form: this.orderData});
        if(check){
            alert('Create Success');
            this.ordedrData = {};
        }else{
            alert('Create Error');

        }


    },

  load:async function(){
      let id =this.$route.params.id;
      await this.readratebyID(id);
      await this.readhotelbyId(id);
}
},
  }
</script>
