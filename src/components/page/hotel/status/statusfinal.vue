<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">

      <div >
        <q-markup-table>
          <thead>
          <th class="text-left">รายการ</th>
          <th class="text-right">
            <th class="text-left">รับ</th>
            <th class="text-right">ส่ง</th>
          </th>
          </thead>
          <tbody>
          <tr v-for="(rate,index) in form?form.order_detail:form.order_detail" :key="index">
            <td class="text-left">{{rate.$rate_name}}</td>
            <td  class="text-right">
              <td class="text-left">{{rate.amountin}}</td>
              <td class="text-right">{{rate.amountout}}</td>
            </td>
          </tr>
          <!-- <tr>
            <td class="text-left">ผ้าปูที่นอน5-6ฟุต</td>
            <td  class="text-right">
              <td class="text-left">3</td>
              <td class="text-right">3</td>
            </td>
          </tr> -->
          </tbody>
        </q-markup-table><br>

        <div class="sign">
          ผู้ส่งผ้า: {{summaryData.customer_receive_name}}
          <!-------------------ลายเซ้นรับ------------------>
          <div class="signimg">
            <img :src="summaryData.receive_sign" height="200" width="200"  />
          </div>
        </div><br>

        <div class="sign">
          ผู้รับผ้า: {{summaryData.customer_send_name}}
          <!-------------------ลายเซ้นส่ง------------------>
          <div class="signimg">
            <img :src="summaryData.send_sign"  height="200" width="200" />
          </div>
        </div>

      </div>


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
              form:null,
              detailData:null,
              summaryData:null
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
          ...sync('order/*'),
          ...sync('rate/*'),
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('order/*'),
            ...call('rate/*'),
            async nexts() {
                this.$router.push({name : "layouttab"})

            },
            /******* Methods default run ******/
            load:async function(){
                let id = this.$route.params.id;
                let orderId = this.$route.query.id
                await this.readratebyID(id);
                this.summaryData = await this.getorderbyID({hotelId:id,orderID:orderId})
                this.detailData = await this.getOrderDetailData(orderId);
               let orderDetail = [];
                await this.rateList.forEach((x) => {
                    orderDetail.push({
                        amountin: 0,
                        amountout: 0,
                        rate: x.price,
                        $rate_name: x.name,
                        product_id:x.id,
                    })
                })
                let amountin = this.detailData.map(res=>{
                  return res.amountin
                })
                let amountout = this.detailData.map(res=>{
                  return res.amountin
                })
                for(let i in orderDetail){
                  orderDetail[i].amountin = amountin[i]
                  orderDetail[i].amountout = amountout[i]
                }
                this.form = {
                    hotel_id: this.$route.params.id,
                    order_detail: orderDetail,
                }
            },
            draw(){
              signaturePad.fromData(data)
            }
        },
    }
</script>
<style>
  .sign{
    display: flex;
    font-weight: 400;
  }
  .singimg{
    width: 50%;
    height: 50%;
  }

</style>
