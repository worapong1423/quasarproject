<!----------Make By YourName---------------->
<template>
  <div class="grid-container">
    <div class="item1">
      <div class="text-h5">
        เลือกสถานะพนักงาน
      </div><br><br>
      <div @click="openadd()">
        <q-img
          src="../statics/car.png"
          style="height: 144px; max-width: 144px"
        /><br>
        <div class="text-subtitle1">
          สถานะ : พนักงานส่งของ
        </div><br><br>
      </div>
      <div @click="openadd()">
        <q-img
          src="../statics/washing-machine001.png"
          style="height: 144px; max-width: 144px"
        /><br>
        <div class="text-subtitle1">
          สถานะ : พนักงานทั่วไป
        </div>
      </div>
    </div><br>


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
            async openadd() {
                this.$router.push({name : "personeladdtwo" })
            },
            /******* Methods default run ******/
            load:async function(){
            }
        },
    }
</script>
