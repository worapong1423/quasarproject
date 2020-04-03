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
          <tr v-for="rate in form" >
            <td class="text-left">{{rate.$rate_name}}</td>
            <td  class="text-right">
              <td class="text-left">{{rate.amountin}}</td>
              <td class="text-right">
                <q-input outlined v-model.number="rate.amountout"  />
              </td>
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
                await this.readratebyID(id);
                await this.readorderbyID(id)
                let orderDetail = [];
                this.rateList.forEach((x) => {
                    orderDetail.push({
                        amountin: 0,
                        amountout: 0,
                        rate: x.price,
                        $rate_name: x.name,
                        product_id:x.id,
                        //order_id:  ,

                    })
                })
                this.form = {
                    hotel_id: this.$route.params.id,
                    //order_id: this.form.id,
                    order_detail: orderDetail,
                }
            }
        },
    }
</script>
