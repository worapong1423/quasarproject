<template>
  <div class="grid-container">
    <div class="item1">
    <q-markup-table flat bordered>
      <thead >
      <tr>
        <th colspan="5">
          <div>
            <div class="text-subtitle2 ">
              <div class="text-right">
              เลขที่ {{summaryData.order_code}}
              </div>
              <div class="text-left">
                รายการที่ {{summaryData.order_code}} <br>
                โรงแรม {{hoteldetail.name}} <br>
                {{dateFormat(summaryData.created_at)}}
              </div>
            </div>
          </div>
        </th>
      </tr>
      <tr>
        <th class="text-left">รายการ</th>
        <th class="text-right">จำนวน</th>
        <th class="text-right">รวม</th>
      </tr>
      </thead>
      <tbody >
      <tr v-for="(rate,index) in form?form.order_detail:form.order_detail" :key="index">
        <td class="text-left">{{rate.$rate_name}}</td>
        <td class="text-right">{{rate.amountin}}</td>
        <td class="text-right">{{rate.amountout}}</td>
      </tr>
      <!-- <tr>
        <td class="text-left">ผ้าปูที่นอนใหญ่</td>
        <td class="text-right">3</td>
        <td class="text-right">24</td>
      </tr>
      <tr>
        <td class="text-left">ปลอกหมอน</td>
        <td class="text-right">14</td>
        <td class="text-right">70</td>
      </tr> -->
      </tbody>
    </q-markup-table>
    </div>

    <div class="item2" >
      <q-btn icon="local_printshop white" v-on:click="typeadd=false" style="width:100%;" color="primary" >พิมพ์</q-btn>
    </div>
  </div>
</template>
<style type="text/css">
  .Fullscreen
  {
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* Optional - just for DIV)*/
    border: solid 1px #000000;
    background-color:#00B0FF;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 10px;
    padding: 10px;
  }

  .grid-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  .item1 {
    grid-column: 1/1 ;
  }
  .item2 {
    grid-column: 1/2 ;
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
              form:null,
              detailData:null,
              summaryData:null,
              hotelData:null
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
          ...sync('hotel/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('order/*'),
            ...call('rate/*'),
            ...call('hotel/*'),
            /******* Methods default run ******/
            dateFormat(date){
              moment.locale('th');
              return moment(date).format("Do MMMM YYYY")
            },
            load:async function(){
                let id = this.$route.query.hotelid;
                let orderId = this.$route.query.id
                await this.readhotelbyId(id);
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
                    hotel_id: this.$route.query.hotelid,
                    order_detail: orderDetail,
                }
            }
        },
    }
</script>

