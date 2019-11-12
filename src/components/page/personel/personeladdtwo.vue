<!----------Make By YourName---------------->
<template>
  <div class="grid-container">
    <!-----------ส่งค่าให้รูปเปลี่ยนสถานะเอานะ---------->
    <div class="item1">
      <div>
        <q-img
          src="../statics/car.png"
          style="height: 144px; max-width: 144px"
        /><br>
        <div class="text-h6">
          สถานะ : พนักงานส่งของ
        </div>
      </div>
      <!----------สถานะพนักงานทั่วไป
      <div>
        <q-img
          src="../statics/washing-machine001.png"
          style="height: 144px; max-width: 144px"
        /><br>
        <div class="text-h6">
          สถานะ : พนักงานทั่วไป
        </div>
      </div>------------->
    </div>

    <div class="item2">
      <div>
        <p><q-input bg-color="white"  required square outlined label="ชื่อ" /></p>
        <p><q-input bg-color="white"  required square outlined label="ชื่อผู้ใช้" /></p>
        <p><q-input bg-color="white"  required square outlined label="รหัสผ่าน" /></p>
        <p><q-input bg-color="white"  required square outlined label="ยืนยันรหัสผ่าน" /></p>
        <q-btn type="submit"  color="primary" label="บันทึก" @click="submit()" />
      </div>
    </div>


  </div>
</template>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 5px;
    padding: 0px;
    justify-content: center;
  }

  .grid-container > div {
    text-align: center;
    padding: 20px 0;
  }

  .item1 {
    grid-column: 1 ;
  }

  .item2 {
    grid-column: 1 ;
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
            async submit() {
                this.$router.push({name : "personels" })
            },
            /******* Methods default run ******/
            load:async function(){
            }
        },
    }
</script>
