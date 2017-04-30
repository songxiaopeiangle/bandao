<template>
  <transition name="slide-fade">
  <div class="loading-box" v-show="span" >
    <div class="listen-mask">
      <div class="loading-content">
          <div class="loading-content-img">
            <img src="./listen@2x.png">
          </div>
        <p>正在为您精选音频</p>

          <p v-if="stateLength" class="animated flash">{{stateLength}}</p>
          <p v-else>&nbsp;精选中...</p>

        <p id="bar-box">
          <span class="bar" v-for="n in singerLength"></span>
        </p>
        <audio style="display:none;" preload class="audio" :src="item" v-for="(item,index) in musicShuzu"></audio>
        <!--<button @click="cancle">取消</button>-->
        <!--<button @click="enter">进入</button>-->
        <div class="enter" @click="cancle">取消</div>
      </div>
    </div>
  </div>
  </transition>
</template>
<script type="text/ecmascript-6">
    export default{
        props: {
          musicShuzu:{
            type:Array
          },
          stateLength:{

          },
          singerLength:{

          }
        },
        data(){
            return {
              span:false
            }
        },
        mounted() {

        },
        methods:{
          show(){
            this.span = true;
          },
          cancle() {
            this.span = false;
          }
        }
    }

</script>
<style lang="less">
  @import "../../../../static/css/fontLess.less";
  .loading-box{
    width:100%;
    height:0;
    position:absolute;
    top:0;
    z-index: 1000;
  .listen-mask{
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);
  .loading-content{
  .px2rem(width,606);
  .px2rem(height,562);
    background: #fff;
    position:absolute;
    top:50%;
    left:50%;
  .px2rem(margin-left,-303);
  .px2rem(margin-top,-281);
  .px2rem(padding-top,44);
  .px2px(border-radius,10);
  .loading-content-img{
    text-align: center;
  .px2rem(height,163);
  img{
  .px2rem(width,159);
  .px2rem(height,163);
  }
  }
  p:nth-child(2){
    text-align: center;
    color:#333;
  .px2px(font-size,24);
  .px2rem(margin-top,42);
  }
  p:nth-child(3){
    text-align: center;
    color:#333;
  .px2px(font-size,28);
  .px2rem(margin-top,18);
    font-weight: bold;
    opacity: 1;
  }
  p:nth-child(4){
    text-align: center;
    height:16px;
    display: flex;
  .px2rem(margin-top,46);
  .px2rem(margin-bottom,60);
    justify-content: center;
  .px2rem(padding-left,82);
  .px2rem(padding-right,82);
  span{
    display:block;
  .px2rem(height,16);
    background:#ff282f;
  .px2rem(margin-right,16);
  }
  span:nth-child(2){
    background:#ec252b;
  }
  span:nth-child(3){
    background:#dc2228;
  }
  span:nth-child(4){
    background:#cb2025;
  }
  span:nth-child(5){
    background:#c41e24;
  }
  span:nth-child(6){
    background:#b41c21;
  }
  }
  .enter{
    border:1px solid #d9d9d9;
    color:#999;
  .px2rem(width,420);
  .px2rem(height,76);
    background: #fff;
  .px2px(font-size,28);
  .px2px(border-radius,10);
    margin:0 auto;
    text-align: center;
  .px2rem(line-height,76);
  }
  }
  }
  }

</style>
