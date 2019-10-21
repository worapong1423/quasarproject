<!----------Make By YourName---------------->
<template>

</template>

<script>
    import {get, sync, call} from "vuex-pathify";

    export default {
        name: 'Root',
        /*-------------------------Load Component---------------------------------------*/
        components: {},
        /*-------------------------Set Component---------------------------------------*/
        props: {},
        /*-------------------------DataVarible---------------------------------------*/
        data() {
            return {
                ilke: false,
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
        computed: {
            ...call('rate/*')

        },
        /*-------------------------Methods------------------------------------------*/
        methods: {
            ...sync('rate/*'),
            /******* Methods default run ******/
            load: async function () {
                let id = this.$route.params.id;
                await this.readOne(id);
            }
        },
    }
</script>
