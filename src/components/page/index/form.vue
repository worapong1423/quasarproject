<!----------Make By YourName---------------->
 <template>
<div style="padding:5%;">
    <form @submit.prevent="(form.id)?updateFrom():submitFrom()">
        <q-input v-model="form.name" required square outlined label="ชื่อ" /><br>
        <q-input v-model="form.surname" required square outlined label="สกุล" /><br>
        <q-input v-model="form.age" required type="number" square outlined label="อายุ" /><br>
        <q-btn v-if="!form.id" type="submit" style="width:100%;" color="primary" icon="check" label="Save" />
        <q-btn v-else type="submit" style="width:100%;" color="orange" icon="edit" label="Edit" />
    </form>
<br>
 <q-btn v-if="form.id"   style="width:100%;" color="brown" icon="close" label="reform" @click="form = {}" />
    

</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
import axios from 'axios';
const ccc = 'hello';


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
        this.load();
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
        async submitFrom() {
          let check = await this.create(this.form);
          if(check){
              alert('Create Success');
              this.form = {};
              await this.read();
          }else{
                alert('Create Error');
          }
           
        
        },

         async updateFrom() {
          let check = await this.updateData(this.form);
          if(check){
              alert('Create Success');
              this.form = {};
              await this.read();
          }else{
                alert('Create Error');
          }
           
        
        },

        /******* Methods default run ******/
        load: async function () {
         
        }
    },
}
</script>
