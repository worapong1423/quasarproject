<!----------Make By YourName---------------->
<template>
  <div class="grid-container">
    <!-----------ส่งค่าให้รูปเปลี่ยนสถานะเอานะ---------->
    <div class="item1">
      <div v-if="$route.query.type == 'driver'">
        <q-img
          src="../statics/car.png"
          style="height: 144px; max-width: 144px"
        /><br>
        <div class="text-h6">
          สถานะ : พนักงานส่งของ
        </div>
      </div>
      <!----------สถานะพนักงานทั่วไป------------->
      <div v-if="$route.query.type == 'employee'">
        <q-img
          src="../statics/washing-machine001.png"
          style="height: 144px; max-width: 144px"
        /><br>
        <div class="text-h6">
          สถานะ : พนักงานทั่วไป
        </div>
      </div>
    </div>

    <div class="item2">
      <div>
        <p><q-input bg-color="white"  required square outlined label="ชื่อ" v-model="form.name" /></p>
        <p><q-input bg-color="white"  required square outlined label="ชื่อผู้ใช้" v-model="form.email"/></p>
        <p><q-input bg-color="white"  type="password" required square outlined label="รหัสผ่าน" v-model="form.password"/></p>
        <p><q-input bg-color="white"  type="password" required square outlined label="ยืนยันรหัสผ่าน" v-model="form.password_confirmation"/></p>
        <q-btn type="submit"  color="primary" label="บันทึก" @click="submit()" />
      </div>
    </div>


  </div>
</template>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 5px;
    padding: 0px;
    justify-content: center;
  }

  .grid-container > div {
    text-align: center;
    padding: 20px 0;
  }

  .item1 {
    grid-column: 1 ;
  }

  .item2 {
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
                form:{
                  name:null,
                  email:null,
                  password:null,
                  password_confirmation:null,
                  usertype:null,
                },
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
            async submit() {
              if(this.$route.query.type == 'driver'){
                this.form.usertype = 2
                this.registerUser(this.form).then(res =>{
                  console.log(res)
                  if(res.status == 201 ){
                    this.$router.push({name : "personels" })
                  }
                  else{
                    alert("ไม่สามารถเพิ่มพนักงานได้")
                  }
                })
              }
              else if(this.$route.query.type == 'employee') {
                this.form.usertype = 3
                this.registerUser(this.form).then(res =>{
                  console.log(res)
                  if(res.status == 201 ){
                    this.$router.push({name : "personels" })
                  }
                  else{
                    alert("ไม่สามารถเพิ่มพนักงานได้")
                  }
                })
              }
            },
            /******* Methods default run ******/
            load:async function(){
            }
        },
    }
</script>
