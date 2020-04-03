<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-page-container>
        <div v-for="order,index in orderData" :key="index">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section @click="toOrder()">{{(index+1)}}. {{order.created_at}}</q-item-section>
              <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="delete" @click=""/>
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

            async toOrder() {
                this.$router.push({name: "statustwo"})
            },

            load: async function () {
                let id = this.$route.params.id;
                await this.readorderbyID(id);
            }
        },
    }
</script>

