<!----------Make By YourName---------------->
<template>
  <div >
    <div v-if="!ilke" style="padding:2%;" >
        <q-list bordered separator>
            <q-item >
            <q-item-section>โรงเเรม : </q-item-section>
            <q-item-section >{{hoteldetail.name}}</q-item-section>
            </q-item>
            <q-item  >
            <q-item-section>ที่อยู่ : </q-item-section>
            <q-item-section>{{hoteldetail.address}}</q-item-section>
            </q-item>
            <q-item >
            <q-item-section>อำเภอ : </q-item-section>
            <q-item-section>{{hoteldetail.district}}</q-item-section>
            </q-item>
            <q-item >
            <q-item-section>จังหวัด : </q-item-section>
            <q-item-section>{{hoteldetail.province}}</q-item-section>
            </q-item>
            <q-item >
            <q-item-section>รหัสไปรษณีย : </q-item-section>
            <q-item-section>{{hoteldetail.zipcode}}</q-item-section>
            </q-item>
            <q-item >
            <q-item-section>เบอร์ติดต่อ : </q-item-section>
            <q-item-section>{{hoteldetail.tel}}</q-item-section>
            </q-item>
            <q-item >
            <q-item-section>อีเมล : </q-item-section>
            <q-item-section>{{hoteldetail.email}}</q-item-section>
            </q-item>
            <q-item >
            <q-item-section>เลขประจำตัวผู้เสียภาษี : </q-item-section>
            <q-item-section>{{hoteldetail.taxid}}</q-item-section>
            </q-item>
        </q-list>

        <q-page-sticky  position="bottom-right" :offset="[18, 18]" v-if="dataApi.usertype == 1">
            <q-btn v-on:click="ilke=true" fab icon="edit" color="primary"  @click=" hotelform = hoteldetail" />
        </q-page-sticky>
    </div>

    <div v-else-if="ilke">
      <q-list bordered separator>
        <div style="padding:2%;">
          <q-input outlined v-model="hotelform.name" label="โรงเเรม" />
          <q-input outlined v-model="hotelform.address" label="ที่อยู่" />
          <q-input outlined v-model="hotelform.district" label="อำเภอ" />
          <q-input outlined v-model="hotelform.province" label="จังหวัด" />
          <q-input outlined v-model="hotelform.zipcode" label="รหัสไปรษณีย" />
          <q-input outlined v-model="hotelform.tel" label="เบอร์ติดต่อ" />
          <q-input outlined v-model="hotelform.email" label="อีเมล" />
          <q-input outlined v-model="hotelform.taxid" label="เลขประจำตัวผู้เสียภาษี" />
        </div>
      </q-list>
      <q-btn v-on:click="ilke=false" style="width:100%;" color="primary" @click="update()">บันทึก
      </q-btn>
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
        ilke:false,
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
      ...sync('hotel/*'),
      ...sync('login/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
    ...call('hotel/*'),
    ...call('login/*'),
    async update() {
        let id =this.$route.params.id;
        let check = await this.updatehotelData(this.hoteldetail);
        if (check) {
            this.hotelform = {}
        } else {

        }
    },


    /******* Methods default run ******/
    load:async function(){
        let id =this.$route.params.id;
        await this.readhotelbyId(id);
        this.dataApi = await this.getUser()


}
},
    }
</script>
