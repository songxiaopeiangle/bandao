<template>
    <div class="parking_box">
      <div class="parking_content">
        <img src="../../../../static/image/0.jpg" alt="">
        <div class="shadow">停车场</div>
      </div>

      <div class="parking_content">
        <img src="../../../../static/image/0.jpg" alt="">
        <div class="shadow">停车场</div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return{
        show: false
      }
    },
    methods: {

    }

  }
</script>
<style lang="less">
  @import "../../../../static/css/fontLess.less";
.parking_box{
  width: 100%;
  height: auto;
  background: #fff;
  .px2px(padding-left,20);
  .px2px(padding-right,20);
  .px2px(font-size,28);
}
  .parking_content{
    .px2rem(width,710);
    .px2rem(height,215);
  .px2rem(line-height,215);
    box-sizing:border-box;
    position:relative;
    .px2px(margin-top,30);
    img{
      width: 100%;
      height: 100%;
      display:block;
    }
    .shadow{
      width: 100%;
      .px2px(height,110);
      .px2px(line-height,110);
      background: rgba(0,0,0,.6);
      position: absolute;
      left: 0;
      top:25%;
      /*.px2rem(top,55);*/
      .px2px(font-size,28);
      color:#fff;
      text-align:center;
    }
  }
</style>
