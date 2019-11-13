<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">

      <div >
        <q-markup-table>
          <thead>
          <th class="text-left">รายการ</th>
          <th class="text-right">
            <th class="text-left">รับ</th>
            <th class="text-right">ส่ง</th>
          </th>
          </thead>
          <tbody>
          <tr>
            <td class="text-left">ผ้าปูที่นอน3.5ฟุต</td>
            <td  class="text-right">
              <td class="text-left">2</td>
              <td class="text-right">2</td>
            </td>
          </tr>
          <tr>
            <td class="text-left">ผ้าปูที่นอน5-6ฟุต</td>
            <td  class="text-right">
              <td class="text-left">3</td>
              <td class="text-right">3</td>
            </td>
          </tr>
          </tbody>
        </q-markup-table><br>

        <div>
          ผู้ส่งผ้า นายดกากสิดอมืสเืเื
          <!-------------------ลายเซ้นรับ------------------>
        </div><br>

        <div>
          ผู้รับผ้า นายดีดดีดีดีดีด
          <!-------------------ลายเซ้นส่ง------------------>
        </div>

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
            async nexts() {
                this.$router.push({name : "layouttab"})

            },
            /******* Methods default run ******/
            load:async function(){
            }
        },
    }
</script>
