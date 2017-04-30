<template>
  <div>
    <div class="myHonor-box">
      <div v-for="(obj,i) in honorData">
        <img :src="obj.src" @click="honorDetail(i)">
      </div>
    </div>
    <div class="mask-honor" v-show="mask">
      <div class="mask-box">
        <img src="./delete@2x.png" class="delete" @click=" honorDetailHide">

        <img src="../../../../static/image/adviceGray1@2x.png" class="sel-honor"/>
        <p class="honor-name">出勤模范 I</p>
        <p class="honor-require">连续登陆超过7天</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import footer from 'components/Footer/Footer';
 export default {
   data() {
     return {
       mask:false,
       honorData:[
         {'src':'static/image/attendenceGray1@2x.png','name':'出勤模范 I','require':'连续登陆超过7天'},
         {'src':'static/image/attendenceGray2@2x.png','name':'出勤模范 II','require':'连续登陆超过7天'},
         {'src':'static/image/attendenceGray3@2x.png','name':'出勤模范 III','require':'连续登陆超过7天'},
         {'src':'static/image/adviceGray1@2x.png','name':'意见领袖 I','require':'连续登陆超过7天'},
         {'src':'static/image/adviceGray2@2x.png','name':'意见领袖 II','require':'连续登陆超过7天'},
         {'src':'static/image/adviceGray3@2x.png','name':'意见领袖 III','require':'连续登陆超过7天'},
         {'src':'static/image/teacherGray1@2x.png','name':'家有塾师 I','require':'连续登陆超过7天'},
         {'src':'static/image/teacherGray2@2x.png','name':'家有塾师 II','require':'连续登陆超过7天'},
         {'src':'static/image/teacherGray3@2x.png','name':'家有塾师 III','require':'连续登陆超过7天'},
       ]
     }
   },
   methods: {
     honorDetail(i) {
         this.mask=true;
         let target=this.honorData[i];
         document.querySelector('.sel-honor').setAttribute('src',target.src);
       document.querySelector('.honor-name').innerHTML=target.name;
       document.querySelector('.honor-require').innerHTML=target.require;
     },
     honorDetailHide() {
       this.mask=false;
     }
   },
   components:{
     "v-footer":footer
   }

 };
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../../../static/css/fontLess.less";
  .myHonor-box{
    .px2rem(padding,30);
     overflow:hidden;
    div {
      float: left;
      .px2rem(margin-right,44);
      .px2rem(width,200);
      .px2rem(height,160);
      .px2rem(margin-bottom,30);
      img{
        .px2rem(width,200);
        .px2rem(height,160);
      }
    }
    div:nth-child(3n+3){
      margin-right:0;
    }

  }
  .mask-honor{
    width:100%;
    .px2rem(height,1334);
    background:rgba(0,0,0,.3);
    position:fixed;
    top:0;
    z-index: 100;
    .mask-box{
      .px2rem(width,588);
      .px2rem(height,477);
      background:#fff;
       margin:0 auto;
      .px2rem(margin-top,266);
      .px2rem(border-radius,15);
      position: relative;
      .px2rem(padding-top,90);
      .delete{
        position:absolute;
        .px2rem(width,50);
        .px2rem(height,50);
        .px2rem(top,-25);
        .px2rem(right,-25);
      }
      .sel-honor{
        display: block;
        .px2rem(width,300);
        .px2rem(height,240);
       margin:0 auto;

      }
      .honor-name{
        .px2rem(margin-top,70);
        text-align: center;
        .px2px(font-size,32);
        color:#333;
        font-weight: bold;
      }
      .honor-require{
        .px2rem(margin-top,5);
        text-align: center;
        .px2px(font-size,28);
        color:#666;
      }
    }
  }

</style>
