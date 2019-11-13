<template>
<div style="padding: 2%">
  <div id="app">
    <div class="container">
      <q-input outlined v-model="customer_receive_name" label="ชื่อผู้ส่ง" /><br>

      <div class="row">
        <div class="col-12 mt-2">
          <VueSignaturePad
            id="signature"
            width="100%"
            height="500px"
            ref="signaturePad"
          />
        </div><br>
        <div class="fit row wrap justify-center items-center content-center">
        <div style="padding:2%" class=".col">
          <q-btn color="primary" @click="undo" label="ยกเลิก" />
        </div>
        <div style="padding:2%" class=".col">
          <q-btn color="primary" @click="save" label="บันทึก" />
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>



<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
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
          ...sync('')
        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            ...call(''),
            undo() {
                this.$refs.signaturePad.undoSignature();
            },
            async save() {
                const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
                alert('Open DevTools see the save data.');
                console.log(isEmpty);
                console.log(data);
                this.$router.push({name : "statustwo"});
            },
        }
    }
