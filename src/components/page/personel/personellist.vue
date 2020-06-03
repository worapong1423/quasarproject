<!----------Make By YourName---------------->
<template>
  <div class="q-pa-md">
    <q-layout>
      <q-page-container>
        <q-list bordered separator v-for="(user,index) in apiData" :key="index">
          <q-item clickable v-ripple>
            <q-item-section @click="openlist(user.id,user.usertype)">
              <q-item-label lines="1">{{user.name}}</q-item-label>
              <q-item-label caption lines="2">{{userTypeToText(user.usertype)}}</q-item-label>
            </q-item-section>
            <q-item-section top side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="delete" @click="deleteuserbyid(user.id)"/>
                </div>
              </q-item-section>
          </q-item>

        </q-list>


        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn @click="openadd()" fab icon="add" color="primary"  />
        </q-page-sticky>

      </q-page-container>
    </q-layout>
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
              apiData:null,
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
          ...sync('login/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('login/*'),
            async openlist(id,type) {
                this.$router.push({name : "personeldetail",query:{userid:id,type:type }})
            },
            async openadd() {
                this.$router.push({name : "personeladd" })
            },
            /******* Methods default run ******/
            load:async function(){
             this.apiData = await this.getAllUser()
             console.log(this.apiData)
            },
            userTypeToText(usertype){
              if(usertype == 2){
                return 'พนักงานส่งของ'
              }
              else if (usertype == 3){
                return 'พนักงานทั่วไป'
              }
            },
            deleteuserbyid(userId){
              //
              let form ={
                id: userId
              }
              console.log("form===>",form)
              let confirms = confirm('Do you want to delete this data ?');
              if(confirms){
                this.deleteUser(form).then(res => {
                  console.log(res)
                  this.load()
                })
              }
            },
        },
    }
</script>
