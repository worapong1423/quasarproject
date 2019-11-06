<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-page-container>
        <q-list bordered separator>

          <q-item clickable v-ripple>
            <q-item-section @click="openlist()">
              <q-item-label lines="1">นายทองดี ดีดี</q-item-label>
              <q-item-label caption lines="2">สถานะ : พนักงานส่งของ</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>


        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn @click="openadd()" fab icon="add" color="primary"  />
        </q-page-sticky>

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
            async openlist() {
                this.$router.replace({name : "personeldetail" })
            },
            async openadd() {
                this.$router.replace({name : "personeladd" })
            },
            /******* Methods default run ******/
            load:async function(){
            }
        },
    }
</script>
