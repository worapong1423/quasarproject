<!----------Make By YourName---------------->
<template>
  <div class="grid-container">
    <div v-if="!edits">
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
          <div class="text-subtitle1">
            สถานะ : พนักงานทั่วไป
          </div>
        </div>------------->
      </div><br>

      <div class="item2">
        <div class="text-body1">
          <div class="text-left">
            <p>ชื่อ : นายทองดี ดีดี </p>
            <p>ชื่อผู้ใช้ : tongde </p>
            รหัสผ่าน : 12345678
          </div>
        </div>
      </div>


      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn v-on:click="edits=true" fab icon="edit" color="primary"  />
      </q-page-sticky>
    </div>

    <div v-else-if="edits">
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
      </div><br>

      <div>
          <p><q-input bg-color="white"  required square outlined label="ชื่อ" /></p>
          <p><q-input bg-color="white"  required square outlined label="ชื่อผู้ใช้" /></p>
          <p><q-input bg-color="white"  required square outlined label="รหัสผ่าน" /></p>
          <q-btn v-on:click="edits=false"  type="submit"  color="primary" label="บันทึก" />
          <q-btn  type="submit"  color="red" label="ลบ" />
      </div>

    </div>
  </div>
</template>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 10px;
    padding: 10px;
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
                edits:false,

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
