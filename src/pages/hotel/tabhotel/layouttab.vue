<!----------Make By YourName---------------->
<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs
         v-model="tab"
         inline-label
         switch-indicator
         indicator-color="primary"
         class="bg-primary text-white shadow-2"
         slot="navigation"
        >
        <q-tab  @click="list(id)" replace>รายการ</q-tab>
        <q-tab  @click="rate(id)" replace>เรท</q-tab>
        <q-tab  @click="detail(id)" replace>ข้อมูล</q-tab>
        </q-tabs>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
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
      ...call('hotel/*'),
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    ...call('hotel/*'),
    /******* Methods default run ******/
    async list(id) {
          this.$router.push(`/hotel/layouttab/tablist?id=${id}`)
    },
    async rate(id) {
          this.$router.push(`/hotel/layouttab/tablist?id=${id}`)
    },
    async detail(id) {
          this.$router.push(`/hotel/layouttab/tablist?id=${id}`)
    },




    load:async function(){
}
},
    }
</script>
