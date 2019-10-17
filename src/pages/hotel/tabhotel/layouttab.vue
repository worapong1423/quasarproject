<!----------Make By YourName---------------->
<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">ชื่อโรงแรม</div>
              <addlist/>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-layout>
</template>

    <script>
    import { get,sync,call } from "vuex-pathify";
    import addlist from "../../../components/page/hotel/tabhotel/listorder";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {
      addlist,
    },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
    return {
      tab:"mails"
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
      ...call('hotel/*'),
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    ...call('hotel/*'),
    /******* Methods default run ******/




    load:async function(){
}
},
    }
</script>
