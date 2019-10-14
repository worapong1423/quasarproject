<!----------Make By YourName---------------->
<template>
    <div style="padding:5%;">
        <q-input outlined v-model="text" label="โรงเเรม" /><br>
        <q-input outlined v-model="text" label="ที่อยู่" /><br>
        <q-input outlined v-model="text" label="อำเภอ" /><br>
        <q-input outlined v-model="text" label="จังหวัด" /><br>
        <q-input outlined v-model="text" label="รหัสไปรษณีย" /><br>
        <q-input outlined v-model="text" label="เบอร์ติดต่อ" /><br>
        <q-input outlined v-model="text" label="อีเมล" /><br>
        <q-input outlined v-model="text" label="เลขประจำตัวผู้เสียภาษ" /><br>

        <q-btn style="width:100%;" color="primary" label="บันทึก" @click="hotel()" />

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
    async hotel() {
          this.$router.push('/hotel')


        },
    load:async function(){
}
},
    }
</script>