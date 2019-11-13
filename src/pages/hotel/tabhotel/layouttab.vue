<!----------Make By YourName---------------->
<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <div>
        <q-tabs
          v-model="tab"
          dense
          class="bg-primary text-white shadow-2"
        >
          <q-tab name="order" label="ออเดอร์"/>
          <q-tab name="rate" label="เรท"/>
          <q-tab name="detail" label="ข้อมูล"/>
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="order" >
            <addlist/>
          </q-tab-panel>

          <q-tab-panel name="rate" >
            <rate />
          </q-tab-panel>

          <q-tab-panel name="detail">
            <detail/>
          </q-tab-panel>
        </q-tab-panels>
      </div>


    </div>
  </q-layout>
</template>

<script>
    import {get, sync, call} from "vuex-pathify";
    import addlist from "../../../components/page/hotel/tabhotel/listorder";
    import detail from "../../../components/page/hotel/tabhotel/detail";
    import rate from "../../../components/page/hotel/tabhotel/rate";

    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {
            addlist, detail, rate
        },
        /*-------------------------Set Component---------------------------------------*/
        props: {},
        /*-------------------------DataVarible---------------------------------------*/
        data() {
            return {
                types:"backs",
                tab: "order"
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
        computed: {
            ...sync('app/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            load:async function(){
                this.menuName = "โรงแรม"
            },
            /******* Methods default run ******/

        },
    }
</script>
