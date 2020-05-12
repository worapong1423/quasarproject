<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div v-if="!typeheader">
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="Menu"
          />
        </div>

        <div v-else-if="typeheader">
          <q-btn
            flat
            dense
            round
            @click="gotoback"
            icon="arrow_back_ios"
          />
        </div>


        <q-toolbar-title>
          {{menuName}}
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="store" />
            </q-item-section>
            <q-item-section @click="shoppage()">
              ข้อมูลร้าน
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>
            <q-item-section @click="personelpage()">
              พนักงาน
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple onclick>
            <q-item-section avatar>
              <q-icon name="apartment" />
            </q-item-section>

            <q-item-section @click="Hotelpage()">
              โรงแรม
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="description" />
            </q-item-section>

            <q-item-section @click="billpage()">
              ใบเสร็จ
            </q-item-section>
          </q-item>
        </q-list>
        <q-btn    style="width:100%;" color="red" icon="close" label="logout" @click="logoutform()" />
      </q-scroll-area>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <!-- <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar> -->
          <div class="text-weight-bold">นายวรพงศ์ รัตนอุมดสวัสดิ์</div>
          <!-- <div>@worapong</div> -->
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
    import { get,sync,call } from "vuex-pathify";
    export default {
        name: 'MyLayout',
        /*-------------------------Load Component---------------------------------------*/
        components: {
        },
        /*-------------------------Set Component---------------------------------------*/
        props:{

        },
        /*-------------------------DataVarible---------------------------------------*/
        data() {
            return {
                leftDrawerOpen: false,
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
            typeheader: function () {
                return this.$route.meta.topic;
            },
            ...sync('login/*'),
            ...sync('app/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('login/*'),
            /******* Methods default run ******/
            async gotoback() {
                var {back} = this.$route.meta;
                if (back) {
                    this.$router.replace({name: back});
                } else {
                    // When no one knows where to go
                    this.$router.replace('/');
                }
            },

            async logoutform() {
                await this.userLogout();
                await this.$router.replace({name : "login"});
            },
            async Hotelpage() {
                this.$router.push({name : "hotel"})
            },
            async shoppage() {
                this.$router.push({name : "shop"})
            },
            async personelpage() {
                this.$router.push({name : "personels"})
            },
            async billpage() {
                this.$router.push({name : "bill"})
            },
            load:async function(){
            }
        },
    }
</script>
