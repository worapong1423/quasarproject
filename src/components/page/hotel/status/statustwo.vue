<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <div >
        <q-markup-table>
          <thead>
            <th class="text-left">รายการ</th>
            <th class="text-right"></th>
            <th class="text-left">รับ</th>
            <th class="text-right">ส่ง</th>
          </thead>
          <tbody>
          <tr v-for="(rate,index) in form?form.order_detail:form.order_detail" :key="index" >
            <td class="text-left">{{rate.$rate_name}}</td>
            <td  class="text-right"></td>
              <td class="text-left">{{rate.amountin}}</td>
              <td class="text-right">
                <q-input outlined v-model.number="rate.amountout"  />
              </td>
          </tr>
          </tbody>
        </q-markup-table><br>

        <q-btn type="submit" style="width:100%;" color="primary" label="บันทึก" @click="nexts()" />
      </div>


  </div>
</template>

<script>
    import { get,sync,call } from "vuex-pathify";
    import _ from "lodash";
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
              form:null ,
              detailData:null
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
                this.$router.push({name : "statusthree"})

            },
            /******* Methods default run ******/
            load:async function(){
                let id = this.$route.params.id;
                let orderId = this.$route.query.id
                await this.readratebyID(id);
                // await this.readorderbyID(id)
                // console.log(orderId)
                this.detailData = await this.getOrderDetailData(orderId);
                // console.log("data =====>",this.detailData);
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
                let amount = this.detailData.map(res=>{
                  return res.amountin
                })
                for(let i in orderDetail){
                  orderDetail[i].amountin = amount[i]
                }
                this.form = {
                    hotel_id: this.$route.params.id,
                    order_detail: orderDetail,
                }
            },
            deep(name,path){
              return _.get(name,path)
            }
        },
    }
</script>
