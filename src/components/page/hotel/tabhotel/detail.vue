<!----------Make By YourName---------------->
<template>
    <div style="padding:5%;">
        <q-list bordered separator>
            <q-item clickable v-ripple>
            <q-item-section>โรงเเรม : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>ที่อยู่ : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>อำเภอ : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>จังหวัด : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>รหัสไปรษณีย : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>เบอร์ติดต่อ : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>อีเมล : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
            <q-item-section>เลขประจำตัวผู้เสียภาษี : </q-item-section>
            <q-item-section></q-item-section>
            </q-item>
        </q-list>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="addhotel()" fab icon="edit" color="primary"  />
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

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>