<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-page-container>
        <div v-for="(order,index) in orderData" :key="index">
          <q-list bordered separator v-if="order.status_id != 3">
            <q-item clickable v-ripple>
              <q-item-section @click="toOrder(order.id,order.status_id)">
                รายการ {{order.order_code}} </br>
                {{dateFormat(order.created_at)}}
                <p class=p-1 v-if="order.status_id ==1">{{mapStatusToText(order.status_id)}}</p>
                <p class=p-2 v-if="order.status_id ==2">{{mapStatusToText(order.status_id)}}</p>
                <p class=p-3 v-if="order.status_id ==3">{{mapStatusToText(order.status_id)}}</p>
                </q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="delete" @click="deleteOrder(order.id)"/>
                </div>
              </q-item-section>
            </q-item>
          </q-list>

        </div>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn @click="addorder()" fab icon="add" color="primary"/>
        </q-page-sticky>

      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
    import {get, sync, call} from "vuex-pathify";
    import moment from 'moment';
    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {},
        /*-------------------------Set Component---------------------------------------*/
        props: {},
        /*-------------------------DataVarible---------------------------------------*/
        data() {
            return {};
        },
        /*-------------------------Run Methods when Start this Page------------------------------------------*/
        async mounted() {
            /**** Call loading methods*/
            await this.load();
        },
        /*-------------------------Run Methods when Start Routed------------------------------------------*/
        async beforeRouteEnter(to, from, next) {
            next()
        },
        /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
        computed: {
            ...sync('order/*')

        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            ...call('order/*'),
            /******* Methods default run ******/


            async addorder() {
                this.$router.push({name: "statusone"})
            },

            async toOrder(id,status) {
                console.log(status)
                if(status == 1){
                  this.$router.push({name: "statustwo",query: { id: id }})
                }
                else if(status == 2 ){
                  this.$router.push({name: "statusthree",query: { id: id }})
                }
                else if(status == 3 ){
                  this.$router.push({name: "statusfinal",query: { id: id }})
                }
            },
            async deleteOrder(orderId){
              let form ={
                hotelId:this.$route.params.id,
                orderId:orderId
              }
              await this.destroyorderData(form);
              this.load()
            },
            dateFormat(date){
              moment.locale('th');
              return moment(date).format("lll")
            },
            load: async function () {
                let id = this.$route.params.id;
                await this.readorderbyID(id);
                console.log(this.orderData)
            },
            mapStatusToText(status){
              if(status == 1){
                return "ตวรจออเดอร์"
              }
              else if(status == 2){
                return "ส่งคืนออเดอร์"
              }
              else if(status == 3){
                return "เสร็จสิ้น"
              }
            },
        },
    }
</script>
<style>
  .p-1{
    color:orange;
    margin: 0
  }
  .p-2{
    color:gray;
    margin: 0
  }
  .p-3{
    color:green;
    margin: 0
  }
</style>
