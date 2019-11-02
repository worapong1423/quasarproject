<!----------Make By YourName---------------->
<template>
  <div>
      <div class="grid-container">
        <div class="item1">
          <q-img
            src="../statics/logo.png"
            style="height: 102px; max-width: 72px"
          />
        </div>
        <div class="item2" >
          <div >
            บริษัท<br>
            ปัญญาคลีนนิ่ง
          </div>
        </div>
      </div>
    </div>
</template>

<style>
  .grid-container {
    display: grid;
    grid-gap: 2px ;
    padding: 2px;
    justify-content: center;
    grid-template-columns: 100px 100px 100px 100px 100px;
  }
  .grid-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  .item1 {
    grid-column: 2 ;
  }
  .item2 {
    grid-column: 3/5 ;
  }
</style>

<script>
    import {
        get,
        sync,
        call
    } from "vuex-pathify";
    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {
        },
        /*-------------------------Set Component---------------------------------------*/
        props: {
        },
        /*-------------------------DataVarible---------------------------------------*/
        data() {
            return {
            };
        },
        /*-------------------------Run Methods when Start this Page------------------------------------------*/
        async mounted() {
            /**** Call loading methods*/
            await this.load();
        },
        /*-------------------------Run Methods when Start Routed------------------------------------------*/
        async beforeRouteEnter(to, from, next) {
            next()
        },
        /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
        computed: {
        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            /******* Methods default run ******/
            load: async function () {
            }
        },
    }
</script>
