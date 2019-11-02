<!----------Make By YourName---------------->
<template>
    <div style="padding:5%;">
      <form @submit.prevent="submit()">
        <q-input outlined v-model="hotelform.name" label="โรงเเรม" /><br>
        <q-input outlined v-model="hotelform.address" label="ที่อยู่" /><br>
        <q-input outlined v-model="hotelform.district" label="อำเภอ" /><br>
        <q-input outlined v-model="hotelform.province" label="จังหวัด" /><br>
        <q-input outlined v-model="hotelform.zipcode" label="รหัสไปรษณีย" /><br>
        <q-input outlined v-model="hotelform.tel" label="เบอร์ติดต่อ" /><br>
        <q-input outlined v-model="hotelform.email" label="อีเมล" /><br>
        <q-input outlined v-model="hotelform.taxid" label="เลขประจำตัวผู้เสียภาษี" /><br>


        <q-btn type="submit" style="width:100%;" color="primary" label="บันทึก"  />
      </form>
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
    async hotel() {
          this.$router.push({name : "hotel"})


        },
        async submit() {
          let check = await this.create(this.hotelform);
          if(check){
              alert('Create Success');
              this.hotelform = {};
              this.$router.replace({name : "hotel"})
              await this.read();
          }else{
                alert('Create Error');

          }

        },

    load:async function(){
}
},
    }
</script>
