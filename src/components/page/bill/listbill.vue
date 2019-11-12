<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-page-container>
        <div >
          <q-list bordered separator>
            <q-item clickable v-ripple @click="orderbill()">
              <q-item-section >
                <q-item-label>รายการที่ HT0004</q-item-label>
                <q-item-label>โรงเเรม อินเตอร์เนชั่นแนลเฮาล</q-item-label><br>
                <q-item-label></q-item-label>
                <q-item-label>ศุกร์ 2 กุมภาพันธ์ 2562</q-item-label>
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
            async orderbill() {
                this.$router.push({name : "orderbill"})
            },
            /******* Methods default run ******/
            load:async function(){
            }
        },
    }
</script>
