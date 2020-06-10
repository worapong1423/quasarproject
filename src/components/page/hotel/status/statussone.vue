<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <div>
      <q-item>
        <q-item-section>
          <q-item-label>{{hoteldetail.name}}</q-item-label>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>

      <div>
        <q-markup-table separate-close-popup>
          <thead>
          <tr>
            <th class="text-left">รายการ</th>
            <th class="text-right">จำนวน</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(rate,index) in form.order_detail" :key="index">
            <td class="text-left" style="padding:12px 12px;">
              {{rate.$rate_name}}
            </td>
            <td class="text-right" style="padding:12px 12px;">
              <q-input type="number" outlined v-model.number="rate.amountin"/>
            </td>
          </tr>
          </tbody>
        </q-markup-table>
        <br>
        <q-input outlined v-model="form.customer_receive_name" label="ชื่อผู้ส่ง"/>
        <br>


      </div>
      <div class="container">


        <div class="row">
          <div class="col-12 mt-2">
            <VueSignaturePad
              id="signature"
              width="100%"
              height="500px"
              ref="signaturePad"
            ></VueSignaturePad>
          </div>
          <br>
          <div class="fit row wrap justify-center items-center content-center">
            <div  class="button-wrapper">
              <q-btn class="button" color="primary" @click="save()">บันทึก</q-btn>
            </div>
            <div  class="button-wrapper">
              <q-btn class="button" color="primary" @click="undo" label="ยกเลิก"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
<style>
  /* .grid-container {
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
  } */
  #signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

  /* .item1 {
    grid-column: 1 / 5;
  } */
  .button-wrapper{
    width: 100%;
    padding: 2%;
  }
  .button{
    width: 100%;
  }
</style>
<script>
    import {get, sync, call} from "vuex-pathify";
    import moment from "moment";

    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {},
        /*-------------------------Set Component---------------------------------------*/
        props: {},
        /*-------------------------DataVarible---------------------------------------*/
        data() {
            return {
                form: null,
                userData: null
            };
        },
        /*-------------------------Run Methods when Start this Page------------------------------------------*/
        async mounted() {
            /**** Call loading methods*/
            this.load();
            if (localStorage.getItem('reloaded')) {
            // The page was just reloaded. Clear the value from local storage
            // so that it will reload the next time this page is visited.
                localStorage.removeItem('reloaded');
            } else {
                // Set a flag so that we know not to reload the page twice.
                localStorage.setItem('reloaded', '1');
                location.reload();
            }
        },
        /*-------------------------Run Methods when Start Routed------------------------------------------*/
        async beforeRouteEnter(to, from, next) {
            next()
        },
        /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
        computed: {
            ...sync('hotel/*'),
            ...sync('order/*'),
            ...sync('rate/*'),
            ...sync('login/*'),
        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            ...call('hotel/*'),
            ...call('order/*'),
            ...call('rate/*'),
            ...call('login/*'),
            /******* Methods default run ******/
            async sign() {
                this.$router.push({name: "statusonesign"})
            },
            async submit(id2) {
                console.log(id2);
                // this.form.order_id = this.id2;
                console.log()
                let check2 = await this.createorderdetailData({orderId: id2,form: this.form });
                },

            undo() {
                this.$refs.signaturePad.undoSignature();
            },
            async save() {
                const {data} = this.$refs.signaturePad.saveSignature();
                console.log(typeof(data))
                this.form.receive_sign = data;
                let idhotel = this.$route.params.id;
                console.log(this.userData.id)
                this.form.receiver_id = this.userData.id
                console.log("form",this.form)
                await this.createorderData({hotelId: idhotel,form: this.form}).then(res=>{
                  console.log("response order",res)
                  this.submit(res.data.id);
                  this.$router.push({name: "statustwo",query: { id: res.data.id }});
                })
                // if (check) {
                //     alert('Create Success');
                //     this.$router.push({name: "statustwo"});
                // } else {
                //     alert('Create Error');
                // }
            },

            load: async function () {
                let idhotel = await this.$route.params.id;
                await this.readratebyID(idhotel);
                await this.readhotelbyId(idhotel);
                await this.readorderbyID(idhotel)
                this.userData =  await this.getUser()
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
                this.form = {
                    hotel_id: this.$route.params.id,
                    order_detail: orderDetail,
                    //orderId : this.orderData.id ,
                }
            }
        },
    }
</script>
