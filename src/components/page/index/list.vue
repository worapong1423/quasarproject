<!----------Make By YourName---------------->
 <template>
<div>
    <div v-for="list,index in lists" :key="index">
        {{(index+1)}}
        <pre>{{list}}</pre>
        <q-btn color="orange" icon="edit" label="Edit" @click="form = list"   />

          <q-btn color="red" icon="delete" label="Delete"  @click="destroyData(list.id)"  />
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
        ...sync('list/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('list/*'),
        /******* Methods default run ******/
        load: async function () {
            await this.read();
        }
    },
}
</script>
