<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div style="width: 10%" >
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
            ...sync('app/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('login/*'),
            /******* Methods default run ******/

            load:async function(){
            }
        },
    }
</script>
