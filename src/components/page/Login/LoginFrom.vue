<!----------Make By YourName---------------->
<template>
<div style="padding:5%;">
    <form @submit.prevent="loginform()">
        <q-input v-model="user.email" required square outlined label="ชื่อ" /><br>
        <q-input v-model="user.password" required square outlined label="สกุล" /><br>
        <q-btn  type="submit" style="width:100%;" color="orange" icon="edit" label="Edit" />
    </form>
<br>
    

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
    /******* Methods default run ******/
     async loginform() {
          let check = await this.login();
          if(check){
              this.$router.replace('/hotelmain')
              
          }else{
                alert('login error');
          }
           
        
        },

    load:async function(){
}
},
    }
</script>