<!----------Make By YourName---------------->
<template>
  <div style="padding:5%;">
    <div v-if="!typerate&&!typeadd">
      <q-markup-table>
        <thead>
          <th class="text-left">รายการ</th>
          <th >บาท/ชิ้น</th>
        </thead>
        <tbody>
          <td class="text-left">1</td>
          <td class="text-right">1</td>
        </tbody>
      </q-markup-table>

      <q-page-sticky position="bottom-right" :offset="[18, 80]">
        <q-btn v-on:click="typeadd=true" fab icon="add" color="primary"  />
      </q-page-sticky>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn v-on:click="typerate=true" fab icon="edit" color="primary"  />
      </q-page-sticky>

    </div>

    <div v-else-if="typerate">
    <q-markup-table>
      <thead>
      <th class="text-left">รายการ</th>
      <th class="text-right">บาท/ชิ้น</th>
      </thead>
      <tbody>
      <td class="text-left">1</td>
      <td class="text-right">
        <q-input outlined v-model="text" />
      </td>
      </tbody>
    </q-markup-table><br>
    <div>
      <q-btn v-on:click="typerate=false" style="width:100%;" color="primary">บันทึก</q-btn>
    </div>
  </div>

    <div v-else-if="typeadd">
      <q-markup-table>
        <thead>
        <th class="text-left">รายการ</th>
        <th class="text-right">บาท/ชิ้น</th>
        </thead>
        <tbody>
        <td class="text-left">
          <q-input outlined v-model="rateData.Product_name" />
        </td>
        <td class="text-right">
          <q-input outlined v-model="rateData.Product_price" />
        </td>
        </tbody>
      </q-markup-table><br>
      <div>
        <q-btn v-on:click="typeadd=false" style="width:100%;" color="primary" @click="submitFrom()">บันทึก</q-btn>
      </div>
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
                typerate: false,
                typeadd:false,
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
            ...sync('rate/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{

            ...call('rate/*'),
            /******* Methods default run ******/
            async submitFrom() {
                let check = await this.create(this.rateData);
                if(check){
                    alert('Create Success');
                    this.rateData = {};
                }else{
                    alert('Create Error');

                }

            },

            load:async function(){
                let id =this.$route.params.id;
                await this.readOne(id);
            }
        },
    }
</script>
