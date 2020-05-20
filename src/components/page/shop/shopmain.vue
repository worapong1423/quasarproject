<!----------Make By YourName---------------->
<template>
  <div>
    <div v-if="!edits" style="padding:5%;">
      <q-list bordered separator >
        <q-item >
          <q-item-section>  ที่อยู่ : </q-item-section>
          <q-item-section >{{shopform.address}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>อำเภอ : </q-item-section>
          <q-item-section>{{shopform.district}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>จังหวัด : </q-item-section>
          <q-item-section>{{shopform.province}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>รหัสไปรษณีย : </q-item-section>
          <q-item-section>{{shopform.zipcode}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>เบอร์ : </q-item-section>
          <q-item-section>{{shopform.tel}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>อีเมล : </q-item-section>
          <q-item-section>{{shopform.email}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>เลขประจำตัวผู้เสียภาษี : </q-item-section>
          <q-item-section>{{shopform.taxid}}</q-item-section>
        </q-item>
      </q-list>

      <q-page-sticky  position="bottom-right" :offset="[18, 18]" v-if="dataApi.usertype == 1">
        <q-btn v-on:click="edits=true" fab icon="edit" color="primary" @click="shopedit = shopform"  />
      </q-page-sticky>
    </div>

      <div v-else-if="edits" style="padding:5%;">
        <q-list bordered separator >
          <q-input outlined v-model="shopedit.address"  label="ที่อยู่" />
          <q-input outlined v-model="shopedit.district"  label="อำเภอ" />
          <q-input outlined v-model="shopedit.province"  label="จังหวัด" />
          <q-input outlined v-model="shopedit.zipcode"  label="รหัสไปรษณีย" />
          <q-input outlined v-model="shopedit.tel"  label="เบอร์ติดต่อ" />
          <q-input outlined v-model="shopedit.email"  label="อีเมล" />
          <q-input outlined v-model="shopedit.taxid"  label="เลขประจำตัวผู้เสียภาษี" />
        </q-list><br>

        <q-btn v-on:click="edits=false" style="width:100%;" color="primary" @click="update()">บันทึก
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
                dataApi:null,
            };
        },
        /*-------------------------Run Methods when Start this Page------------------------------------------*/
        async mounted() {
            /**** Call loading methods*/
            await this.load();
        },
        /*-------------------------Run Methods when Start Routed------------------------------------------*/
        async beforeRouteEnter(to, from, next) {
            //next()
        },
        /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
        computed: {
            ...sync('shop/*'),
            ...sync('login/*'),
        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            ...call('shop/*'),
            ...call('login/*'),
            /******* Methods default run ******/
            async update() {
                let check = await this.updateshopData(this.shopedit);
                if (check) {
                    this.shopedit = {}
                } else {

                }
            },
            load: async function () {
                await this.readshopdatabyID('1');
                this.dataApi = await this.getUser()
            }
        },
    }
</script>
