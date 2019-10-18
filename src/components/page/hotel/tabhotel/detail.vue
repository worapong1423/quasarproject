<!----------Make By YourName---------------->
<template>
    <div style="padding:5%;">
        <q-list bordered separator>
            <q-item clickable v-ripple>
            <q-item-section>โรงเเรม : </q-item-section>
            <q-item-section >{{hoteldetail.Hotel_name}}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>ที่อยู่ : </q-item-section>
            <q-item-section>{{hoteldetail.Hotel_address}}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>อำเภอ : </q-item-section>
            <q-item-section>{{hoteldetail.Hotel_district}}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>จังหวัด : </q-item-section>
            <q-item-section>{{hoteldetail.Hotel_province}}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>รหัสไปรษณีย : </q-item-section>
            <q-item-section>{{hoteldetail.Hotel_zipcode}}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>เบอร์ติดต่อ : </q-item-section>
            <q-item-section>{{hoteldetail.Hotel_tel}}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>อีเมล : </q-item-section>
            <q-item-section>{{hoteldetail.Hotel_email}}</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>เลขประจำตัวผู้เสียภาษี : </q-item-section>
            <q-item-section>{{hoteldetail.Hotel_taxid}}</q-item-section>
            </q-item>
        </q-list>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="editdata()" fab icon="edit" color="primary"  />
        </q-page-sticky>
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
      ...sync('hotel/*')
},
    /*-------------------------Methods------------------------------------------*/
methods:{
  ...call('hotel/*'),
    /******* Methods default run ******/
    load:async function(){
      let getRoute =this.$route.query
      await this.readOne(getRoute.id);
}
},
    }
</script>
