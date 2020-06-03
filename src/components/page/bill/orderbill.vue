<template>
  <div class="" >
    <div class="item1" ref="content">
    <q-markup-table flat bordered>
      <thead >
      <tr>
        <td colspan="5" >
              <div class="text-right">
                <div class="bill-no">
                  เลขที่ {{summaryData.id}}
                </div>
              </div>
              <tr class="text-left">
                <div class="text-detail">
                  รายการ {{summaryData.order_code}} <br>
                  โรงแรม {{hoteldetail.name}} <br>
                  ที่อยู่ {{hoteldetail.address}} <br>
                  อ.{{hoteldetail.district}} จ.{{hoteldetail.province}} {{hoteldetail.zipcode}}<br>
                  โทรศัพท์: {{hoteldetail.tel}}<br>
                  เลขประจำตัวผู้เสียภาษี: {{hoteldetail.taxid}}<br>
                  วันที่ออกบิล {{dateFormat(summaryData.created_at)}} เวลา {{timeFormat(summaryData.created_at)}}
                </div>
              </tr>
        </td>
      </tr>
      <tr>
        <th class="text-left">รายการ</th>
        <th class="text-right">จำนวน</th>
        <th class="text-right">ราคาต่อหน่วย</th>
        <th class="text-right">ราคารวม</th>
      </tr>
      </thead>
      <tbody >
      <tr v-for="(rate,index) in form?form.order_detail:form.order_detail" :key="index">
        <td class="text-left">{{rate.$rate_name}}</td>
        <td class="text-right">{{rate.amountin}}</td>
        <td class="text-right">{{rate.rate}}</td>
        <td class="text-right">{{rate.amountout*rate.rate}}</td>
      </tr>
      <tr>
        <td class="text-left">รวมทั้งหมด</td>
        <td class="text-right"></td>
        <td class="text-right"></td>
        <td class="text-right">฿{{calTotalPrice()}}</td>
      </tr>
      <!-- <tr>
        <td class="text-left">ผ้าปูที่นอนใหญ่</td>
        <td class="text-right">3</td>
        <td class="text-right">24</td>
      </tr>
      <tr>
        <td class="text-left">ปลอกหมอน</td>
        <td class="text-right">14</td>
        <td class="text-right">70</td>
      </tr> -->
      </tbody>
    </q-markup-table>
    <div class="text-left">
      <div class="admin-name">
      ผู้รับเงิน : {{adminData.name}}
      </div>
    </div>
    </div>

    <div class="item2" >
      <q-btn icon="local_printshop white" @click="exportPDF()" style="width:100%;" color="primary" >พิมพ์</q-btn>
    </div>
  </div>
</template>
<style type="text/css">
  /* .Fullscreen
  {
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: solid 1px #000000;
    background-color:#00B0FF;
  } */
  /* .grid-container {
    display: grid;
    grid-template-columns: auto ;
    grid-gap: 10px;
    padding: 10px;
  } */

  /* .grid-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  } */
  .item1 {
    border: 10px;
    padding: 10px;
    font-size: 30px;
    text-align: center;
    width: 100%;
  }
  .item2 {
    padding: 10px;
  }
  .text-detail {
    font-size: 13px;
  }
  .bill-no{
    font-size: 13px;
  }
  .admin-name{
    font-size: 13px;
    padding-left: 16px;
    padding-top: 7px;
  }


</style>
<script>
    import { get,sync,call } from "vuex-pathify";
    import moment from "moment";
    import jsPDF from 'jspdf';
    import html2canvas from 'html2canvas';
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
              form:null,
              detailData:null,
              summaryData:null,
              hotelData:null,
              adminData:null
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
          ...sync('order/*'),
          ...sync('rate/*'),
          ...sync('hotel/*'),
          ...sync('login/*')
        },
        /*-------------------------Methods------------------------------------------*/
        methods:{
            ...call('order/*'),
            ...call('rate/*'),
            ...call('hotel/*'),
            ...call('login/*'),
            /******* Methods default run ******/
            dateFormat(date){
              moment.locale('th');
              return moment().format("Do-MM-YYYY")
            },
            timeFormat(time){
              moment.locale('th');
              return moment().format("h:mm")
            },
            exportPDF(){
              var doc = new jsPDF({
                        //   orientation: 'landscape',
                        unit: 'px',
                        format: [1000, 2500]
                        })
              // let source = this.$refs.content.innerHTML
              // doc.setFont('Roboto','normal')
              // doc.text('เลขที่', 40, 40)
              // doc.fromHTML(source,20,20)
              // doc.save('a4.pdf')
              let docname = this.summaryData.order_code
              var canvasElement = document.createElement('canvas');
              window.scrollTo(0,0);
              html2canvas(this.$refs.content,{scrollY: -window.scrollY}).then(function (canvas) {

                console.log('canvas',canvas)
                const img = canvas.toDataURL();
                doc.addImage(img,'JPEG',55,20);
                // var pdfOutput = doc.output();
                // window.open(URL.createObjectURL(blob))
                doc.save(`${docname}.pdf`);
              });
              window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
            },
            calTotalPrice(){
              let totalprice = 0
              for(let i of this.form.order_detail){
                console.log(i)
                totalprice += i.rate*i.amountout
              }
              return totalprice
            },
            load:async function(){
                let id = this.$route.query.hotelid;
                let orderId = this.$route.query.id
                await this.readhotelbyId(id);
                await this.readratebyID(id);
                let adminid = {
                  id:12
                }
                this.adminData =  await this.getUserById(adminid).then(res => {
                  console.log(res)
                  return res
              })
                this.summaryData = await this.getorderbyID({hotelId:id,orderID:orderId})
                this.detailData = await this.getOrderDetailData(orderId);
                let orderDetail = [];
                await this.rateList.forEach((x) => {
                    orderDetail.push({
                        amountin: 0,
                        amountout: 0,
                        rate: x.price,
                        $rate_name: x.name,
                        product_id:x.id,
                    })
                })
                let amountin = this.detailData.map(res=>{
                  return res.amountin
                })
                let amountout = this.detailData.map(res=>{
                  return res.amountout
                })
                for(let i in orderDetail){
                  orderDetail[i].amountin = amountin[i]
                  orderDetail[i].amountout = amountout[i]
                }
                this.form = {
                    hotel_id: this.$route.query.hotelid,
                    order_detail: orderDetail,
                }
            }
        },
    }
</script>

