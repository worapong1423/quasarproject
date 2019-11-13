<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">

    <q-layout>
      <q-page-container>
        <div v-for="h,index in hotel" :key="index">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section @click="openpage(h.id)">{{(index+1)}}. {{h.name}}</q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="delete" @click="destroyhotelData(h.id)"/>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn @click="addhotel()" fab icon="add" color="primary"/>
        </q-page-sticky>

      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
    import {get, sync, call} from "vuex-pathify";

    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {},
        /*-------------------------Set Component---------------------------------------*/
        props: {},
        /*-------------------------DataVarible---------------------------------------*/
        data  : () => ({


        }),
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
            ...sync('hotel/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            ...call('hotel/*'),
            /******* Methods default run ******/


            async openpage(id) {
                console.log(id)
                this.$router.push({name : "layouttab", params : { 'id' : id}})

            },
            async addhotel() {
                this.$router.push({name : "addhotel"})

            },

            load: async function () {
                await this.readhoteldata();
                console.log(this.hotel);
            }
        },
    }
</script>
