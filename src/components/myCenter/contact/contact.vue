<template>
  <div class="contact-box">
    <div class="contact-img">
      <img :src="datas" alt="">
    </div>
    <p>联系电话：{{contact}}</p>
    <p>网址：{{url}}</p>
  </div>
</template>

<script type=“text/ecmascript-6“>
   import globle from 'components/global';
  export default{
    data() {
      return {
        datas:'',
        contact:'',
        url:''
      }
    },
    mounted(){
       this.$nextTick(function() {
        this.$http.get(globle.url+'service?token='+globle.tokens).then(function(res){
         this.datas = res.data.customerServices[0].header;
         this.contact = res.data.customerServices[0].phone;
         this.url = res.data.customerServices[0].url;
        },function(res){
          console.log(res)
        })
      });
    }
  }
</script>
<style lang="less">
  @import "../../../../static/css/fontLess.less";
  .contact-box{

    .contact-img{
      .px2rem(width,264);
      .px2rem(height,264);
      margin:0 auto;
      .px2rem(margin-top,200);
      .px2px(margin-bottom,60);
      .px2px(border-radius,10);
      img{
        width: 100%;
        height: 100%;
      .px2px(border-radius,10);
      }
    }
    p{
      color:#333;
      .px2px(font-size,28);
      .px2px(margin-bottom,16);
      text-align: center;
    }
  }
</style>
