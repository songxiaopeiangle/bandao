<template>
  <div class="indexMake-box">
    <div class="indexMake-head">
      <p class="one">选择你感兴趣的话题</p>
      <p class="two">选择3个分类，定制你的专属页面</p>
    </div>
    <div class="indexMake-btnBox">
        <button v-for="item in datas" @click="btnClick($event)">{{item.cateTitle}}</button>
    </div>
    <a v-if="index < 3" href="javascript:;" class="enter-index">进入首页&gt;&gt;</a>
    <router-link v-else to="/home" class="enter-index">进入首页&gt;&gt;</router-link>

  </div>

</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
export default{
    data (){
      return{
        datas:[],
        index:0
      }
    },
  mounted() {
    this.$nextTick(function() {
      this.$http.get(globle.url+'indexCustom?token='+globle.tokens).then(function(res){
        this.datas = res.data.categories;
//        if(this.datas.length>=4){
//          for(let i=0;i<4;i++){
//            this.oneDatas.push(this.datas[i]);
//          }
//          if(this.datas.length>=7){
//            for(let i=4;i<7;i++){
//              this.twoDatas.push(this.datas[i]);
//            }
//          }
//          if(this.datas.length>=11){
//            for(let i=7;i<11;i++){
//              this.threeDatas.push(this.datas[i]);
//            }
//          }
//          if(this.datas.length>=15){
//            for(let i=11;i<15;i++){
//              this.fourDatas.push(this.datas[i]);
//            }
//          }
//          if(this.datas.length>=19){
//            for(let i=15;i<19;i++){
//              this.fiveDatas.push(this.datas[i]);
//            }
//          }
//        }
      },function(res){
        console.log(res)
      })
    });
  },
  methods: {

      btnClick:function(e){

          if($(e.target).css('color')!='rgb(255, 255, 255)') {
            this.index++;
            let color = $(e.target).css('color');
            $(e.target).css('backgroundColor', color);
            $(e.target).css('color', '#fff');
          }else{
              let bg= $(e.target).css('backgroundColor');
            this.index--;
            if(this.index <= 3){

            }
            $(e.target).css('color',bg);
            $(e.target).css('backgroundColor','#fff');
          }
      }
  }

}
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../../../static/css/fontLess.less";
  .indexMake-head{
    .px2px(padding-top,100);
    .one{
      .px2px(font-size,34);
      color:#333;
      text-align: center;
    }
    .two{
      .px2px(font-size,26);
      color:#999;
      text-align: center;
      .px2px(margin-bottom,10);
    }
  }
  .indexMake-btnBox{
    .px2rem(padding-left,20);
    .px2rem(padding-right,20);
    .px2px(margin-bottom,100);
    .px2px(margin-top,50);
    .px2rem(width,710);
    text-align:center;
    margin:0 auto;
  /*@media only screen and (min-device-width : 320px) and (max-device-width : 480px){*/
      /*button:nth-of-type(3){*/
        /*margin-right: 0;*/
      /*}*/
      /*button:nth-of-type(6){*/
        /*margin-right: 0;*/
      /*}*/
      /*button:nth-of-type(8){*/
        /*margin-right: 0;*/
      /*}*/
  /*}*/
  /*@media only screen and (min-device-width: 375px) and (max-device-width: 667px){*/
    /*button:nth-of-type(4){*/
      /*margin-right: 0;*/
    /*}*/
    /*button:nth-of-type(7){*/
      /*margin-right: 0;*/
    /*}*/
    /*button:nth-of-type(9){*/
      /*margin-right: 0;*/
    /*}*/
  /*}*/
    button{
      .px2rem(padding,20);
      border:1px solid #b300b6;
      .px2px(font-size,26);
      background:#fff;
      .px2rem(margin-right,30);
      .px2px(border-radius,10);
      color:#b300b6;
      white-space:nowrap;
      outline: none;
      /*@media screen and (max-width: 640px){*/
        /*.px2rem(padding,10);*/
      /*}*/
    }
    .btnBox-two{
      button{
        border:1px solid #fa2a57;
        color:#fa2a57;
      }
    }
    .btnBox-three,.btnBox-four{
      button{
        border:1px solid #ffba20;
        color:#ffba20;
      }
    }
    .btnBox-five{
      button{
        border:1px solid #ff7701;
        color:#ff7701;
      }
    }
  }
  .enter-index{
    text-align: center;
    .px2rem(width,492);
    .px2rem(height,76);
    .px2rem(line-height,76);
    background:#b41c21;
    color:#fff;
    .px2px(font-size,28);
    border:0;
    outline: none;
    .px2px(border-radius,10);
    margin:0 auto;
    display: block;
  }
</style>
