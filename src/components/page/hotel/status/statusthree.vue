<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
      <div>
        <q-markup-table>
          <thead>
          <th class="text-left">รายการ</th>
          <th class="text-right"></th>
          <th class="text-left">รับ</th>
          <th class="text-right">ส่ง</th>

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

      </div>
    <div class="container">
      <q-input outlined v-model="form.customer_send_name" label="ชื่อผู้ส่ง" /><br>

      <div class="row">
        <div class="col-12 mt-2">
          <VueSignaturePad
            id="signature"
            width="100%"
            height="500px"
            ref="signaturePad"
          />
        </div><br>
        <div class="fit row wrap justify-center items-center content-center">
          <div  class="button-wrapper">
            <q-btn class="button" color="primary" @click="save" label="บันทึก" />
          </div>
          <div  class="button-wrapper">
            <q-btn class="button" color="primary" @click="undo" label="ยกเลิก" />
          </div>
        </div>
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
              userData: null
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
          ...sync('login/*'),
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('order/*'),
            ...call('rate/*'),
            ...call('login/*'),
            /******* Methods default run ******/
            load:async function(){
              let id = this.$route.params.id;
                let orderId = this.$route.query.id
                await this.readratebyID(id);
                this.userData =  await this.getUser()
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
                  return res.amountout
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
            undo() {
              this.$refs.signaturePad.undoSignature();
            },
            async save() {
                const {data} = this.$refs.signaturePad.saveSignature()
                this.form.send_sign = data
                this.form.status_id = 3
                this.form.sender_id = this.userData.id
                let idhotel = this.$route.params.id
                await this.updateorderData({hotelId: idhotel,form: this.form,orderId:this.$route.query.id}).then(res=>{
                  console.log("response order",res)
                  this.$router.push({name: "statusfinal",query: { id: res.data.id }});
                })
            },
        },
    }
</script>
<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.button-wrapper{
  width: 100%;
  padding: 2%;
}
.button{
  width: 100%;
}
</style>
