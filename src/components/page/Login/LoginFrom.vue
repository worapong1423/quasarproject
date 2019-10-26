<!----------Make By YourName---------------->

<template  >
<div class="Fullscreen" >
<div style="padding:5%;"  >

    <div class="grid-container">
      <div class="item1">
        <q-img
          src="../statics/logo.png"
          style="height: 204px; max-width: 144px"
        />
      </div>
    </div><br>
    <form @submit.prevent="loginform()">
        <q-input bg-color="white" v-model="user.email" required square outlined label="อีเมลล์" /><br>
        <q-input bg-color="white" v-model="user.password"  type="password" required square outlined label="รหัสผ่าน" /><br>
        <q-btn  type="submit" style="width:100%;" color="primary" label="เข้าสู่ระบบ" />
    </form>
<br>


</div>
</div>
</template>
<style type="text/css">
  .Fullscreen
  {
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* Optional - just for DIV)*/
    border: solid 1px #000000;
    background-color:#00B0FF;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 10px;
    padding: 10px;
  }

  .grid-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  .item1 {
    grid-column: 1 ;
  }
</style>
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
              this.$router.replace({name: "hotel"})

          }else{
                alert('login error');
          }


        },

    load:async function(){
}
},
    }
</script>
