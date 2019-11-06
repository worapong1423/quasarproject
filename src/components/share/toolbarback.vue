<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div>
          <q-btn
            flat
            dense
            round
            @click="back"
            icon="arrow_back_ios"
          />
        </div>

        <q-toolbar-title>
          {{menuName}}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
    import { get,sync,call } from "vuex-pathify";
    import back from "../../store/back";

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
                leftDrawerOpen: false
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
            ...sync('login/*'),
            ...sync('app/*'),
            ...sync('back/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('login/*'),
            /******* Methods default run ******/

            async back(){
                $router.go(-1)
            },
            load:async function(){
            }
        },
    }
</script>
