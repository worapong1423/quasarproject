<!----------Make By YourName---------------->
<template>
  <div style="padding:2%;">
    <div v-if="!typerate&&!typeadd">
      <q-markup-table>
        <thead>
          <th class="text-left">รายการ</th>
          <th class="text-right">บาท/ชิ้น</th>
        </thead>
        <tbody>
        <tr v-for="rate in rateList">
          <td class="text-left">{{rate.name}}</td>
          <td class="text-right">{{rate.price}}</td>
        </tr>
        </tbody>
      </q-markup-table>

      <q-page-sticky position="bottom-right" :offset="[18, 80]">
        <q-btn v-on:click="typeadd=true" fab icon="add" color="primary" v-if="dataApi.usertype == 1" />
      </q-page-sticky>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn v-on:click="typerate=true" fab icon="edit" color="primary"  @click=" rateedit = rateList" v-if="dataApi.usertype == 1" />
      </q-page-sticky>

    </div>

    <div v-else-if="typerate">
      <q-markup-table>
        <thead>
        <th class="text-left">รายการ</th>
        <th >บาท/ชิ้น</th>
        <th class="text-right"></th>
        </thead>

        <tbody >
        <tr v-for="rateedit in rateList">
          <td class="text-left">
            <q-input outlined v-model="rateedit.name" />
          </td>
          <td >
            <q-input type="number" outlined v-model="rateedit.price"  />
          </td>
          <td class="text-right">
            <q-btn v-on:click="typerate=false" size="12px" flat dense round icon="delete" @click="destroyrateData({hotelId : $route.params.id , id : rateedit.id})" />
          </td>
        </tr>
        </tbody>
      </q-markup-table><br>
      <div class="btn-wrapper">
        <q-btn class="submit-btn" v-on:click="typerate=false" style="width:100%;" color="primary" @click="save()" >บันทึก</q-btn>
        <q-btn v-on:click="typerate=false" style="width:100%;" color="primary" >ยกเลิก</q-btn>
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
          <q-input outlined v-model="product.name" />
        </td>
        <td class="text-right">
          <q-input type="number" outlined v-model="product.price" />
        </td>
        </tbody>
      </q-markup-table><br>
      <div class="btn-wrapper">
        <q-btn class="submit-btn" v-on:click="typeadd=false" style="width:100%;" color="primary" @click="submit()" >บันทึก</q-btn>
        <q-btn v-on:click="typeadd=false" style="width:100%;" color="primary" >ยกเลิก</q-btn>
      </div>
    </div>



  </div>
</template>
<style type="text/css">
  .btn-wrapper{
    display: flex;
    flex-direction: column;
    /* padding: 10px; */
  }
  .submit-btn{
    margin-bottom: 20px;
  }
</style>
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
              dataApi:null,
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
            ...sync('rate/*'),
            ...sync('login/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{

            ...call('rate/*'),
            ...call('login/*'),
            /******* Methods default run ******/

            async save() {
                let id =this.$route.params.id;
                console.log(id)
                let check = await this.updaterateData({hotelId : id,form: {
                    rates : this.rateedit
                    }});


            },

            async submit() {
                let id =this.$route.params.id;
                let check = await this.createrateData({hotelId : id,form: this.product});
                if(check){
                    this.product = {};
                }else{
                    alert('Create Error');

                }
                await this.readratebyID(id);

            },

            load:async function(){
                let id =this.$route.params.id;
                await this.readratebyID(id);
                this.dataApi = await this.getUser()
            }
        },
    }
</script>
