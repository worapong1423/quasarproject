<!----------Make By YourName---------------->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{hrname}}
        </q-toolbar-title>
      </q-toolbar>

    <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs
         v-model="tab"
         inline-label
         switch-indicator
         indicator-color="primary"
         class="bg-primary text-white shadow-2"
         slot="navigation"
        >
        <q-tab routes="/hotel/layouttab/tablist" exact replace>รายการ</q-tab>
        <q-tab routes="" exact replace>เรท</q-tab>
        <q-tab routes="" exact replace>ข้อมูล</q-tab>
        </q-tabs>


    </div>
    </q-header>
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

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>