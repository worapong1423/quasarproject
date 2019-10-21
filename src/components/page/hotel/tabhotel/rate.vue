<!----------Make By YourName---------------->
<template>
  <div style="padding:5%;">
    <div v-if="!typerate">
      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left">รายการ</th>
          <th class="text-right">บาท/ชิ้น</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="text-left">{{hotel.Hotel_name}}</td>
          <td class="text-right">{{hotel.Hotel_name}}</td>
        </tr>
        </tbody>
      </q-markup-table>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn v-on:click="typerate=false" fab icon="edit" color="primary"  />
      </q-page-sticky>

    </div>

    <div v-else-if="typerate">
      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left">รายการ</th>
          <th class="text-right">บาท/ชิ้น</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="text-left">{{hotel.Hotel_name}}</td>
          <td class="text-right">
            <q-input outlined v-model=""/>
          </td>
        </tr>
        </tbody>
      </q-markup-table>
    </div>



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
                typerate: false
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
                let id =this.$route.params.id;
                await this.readOne(id);
            }
        },
    }
</script>
