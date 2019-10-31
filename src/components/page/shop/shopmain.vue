<!----------Make By YourName---------------->
<template>
  <div>
    <div v-if="!edits" style="padding:5%;">
      <q-list bordered separator >
        <q-item >
          <q-item-section>  ที่อยู่ : </q-item-section>
          <q-item-section ></q-item-section>
        </q-item>
        <q-item >
          <q-item-section>อำเภอ : </q-item-section>
          <q-item-section></q-item-section>
        </q-item>
        <q-item >
          <q-item-section>จังหวัด : </q-item-section>
          <q-item-section></q-item-section>
        </q-item>
        <q-item >
          <q-item-section>รหัสไปรษณีย : </q-item-section>
          <q-item-section></q-item-section>
        </q-item>
        <q-item >
          <q-item-section>เบอร์ : </q-item-section>
          <q-item-section></q-item-section>
        </q-item>
        <q-item >
          <q-item-section>อีเมล : </q-item-section>
          <q-item-section></q-item-section>
        </q-item>
        <q-item >
          <q-item-section>เลขประจำตัวผู้เสียภาษี : </q-item-section>
          <q-item-section></q-item-section>
        </q-item>
      </q-list>

      <q-page-sticky  position="bottom-right" :offset="[18, 18]">
        <q-btn v-on:click="edits=true" fab icon="edit" color="primary"  />
      </q-page-sticky>
    </div>

      <div v-else-if="edits" style="padding:5%;">
        <q-list bordered separator >
          <q-input outlined v-model="text"  label="ที่อยู่" />
          <q-input outlined v-model="text"  label="อำเภอ" />
          <q-input outlined v-model="text"  label="จังหวัด" />
          <q-input outlined v-model="text"  label="รหัสไปรษณีย" />
          <q-input outlined v-model="text"  label="เบอร์ติดต่อ" />
          <q-input outlined v-model="text"  label="อีเมล" />
          <q-input outlined v-model="text"  label="เลขประจำตัวผู้เสียภาษี" />
        </q-list>

        <q-btn v-on:click="edits=false" style="width:100%;" color="primary">บันทึก
        </q-btn>

      </div>
    </div>
</template>
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
                edits:false,
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
