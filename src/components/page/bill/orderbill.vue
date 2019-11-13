<template>
  <div class="grid-container">
    <div class="item1">
    <q-markup-table flat bordered>
      <thead >
      <tr>
        <th colspan="5">
          <div>
            <div class="text-subtitle2 ">
              <div class="text-right">
                เลขที่ 01
              </div>
              <div class="text-left">
                รายการที่ HT0001 <br>
                โรงแรม อินเตอร์เนชั่นแนลเฮาล์ <br>
                1 กุมภาพนธ์ 2560
              </div>
            </div>
          </div>
        </th>
      </tr>
      <tr>
        <th class="text-left">รายการ</th>
        <th class="text-right">จำนวน</th>
        <th class="text-right">รวม</th>
      </tr>
      </thead>
      <tbody >
      <tr>
        <td class="text-left">ผ้าปูที่นอนเล็ก</td>
        <td class="text-right">8</td>
        <td class="text-right">64</td>
      </tr>
      <tr>
        <td class="text-left">ผ้าปูที่นอนใหญ่</td>
        <td class="text-right">3</td>
        <td class="text-right">24</td>
      </tr>
      <tr>
        <td class="text-left">ปลอกหมอน</td>
        <td class="text-right">14</td>
        <td class="text-right">70</td>
      </tr>
      </tbody>
    </q-markup-table>
    </div>

    <div class="item2" >
      <q-btn icon="local_printshop white" v-on:click="typeadd=false" style="width:70%;" color="primary" >พิมพ์</q-btn>
    </div>
  </div>
</template>
<style type="text/css">
  .Fullscreen
  {
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* Optional - just for DIV)*/
    border: solid 1px #000000;
    background-color:#00B0FF;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 10px;
    padding: 10px;
  }

  .grid-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  .item1 {
    grid-column: 1/1 ;
  }
  .item2 {
    grid-column: 1/2 ;
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
        },
        /*-------------------------Run Methods when Start this Page------------------------------------------*/
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

