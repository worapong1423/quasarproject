<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-page-container>
        <div v-for="(bill,index) in BillData" :key="index" class="list-wrapper">
          <q-list bordered separator v-if="bill.status_id == 3" >
            <q-item clickable v-ripple @click="orderbill(bill.id,bill.hotel_id)">
              <q-item-section >
                <q-item-label>รายการที่ {{bill.order_code}}</q-item-label>
                <q-item-label>{{bill.hotel.name}}</q-item-label><br>
                <q-item-label></q-item-label>
                <q-item-label>{{dateFormat(bill.created_at)}}</q-item-label>
              </q-item-section>

            </q-item>
          </q-list>
        </div>

      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
    import { get,sync,call } from "vuex-pathify";
    import axios from "../../../axios";
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
              BillData: null,
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
            async orderbill(id,hotelid) {
                this.$router.push({name : "orderbill",query: { id: id ,hotelid: hotelid }})
            },
            /******* Methods default run ******/
            load:async function(){
              this.BillData = await this.readbill()
              console.log(this.BillData)
            },
            async readbill(){
                let x = await axios.get(`/api/bill`)
                .then(async (r) => {
                  return r.data
                }).catch((e) => {
                  return e
                });
                return x
            },
            dateFormat(date){
              moment.locale('th');
              return moment(date).format("lll")
            },
        },
    }
</script>
