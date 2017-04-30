<template>
  <div class="footer_box">
    <div class="footer_item" v-for="(item,index) in datas">
      <router-link :to="item.url">
        <div class="icon index_bg" v-if="index == 0"></div>
        <div class="icon classify_bg" v-if="index == 1"></div>
        <div class="icon listen_bg" v-if="index == 2"></div>
        <div class="icon buying_bg" v-if="index == 3"></div>
        <div class="icon myUser_bg" v-if="index == 4"></div>
        <p>{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
  export default {
    data(){
      return{
        turn:true,
        datas:[]
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.$http.get(globle.url+'bottomMenus?token='+globle.tokens).then(function(res){
          this.datas = res.data.bottomMenus;
        },function(res){
          console.log(res)
        })
      });

    },
    methods:{

    }
  }
</script>
<style lang="less">
  @import "../../../static/css/fontLess.less";
.footer_box{
 .px2rem(height,97);
  .px2px(font-size,20);
  width:100%;
  border:1px solid #d9d9d9;
  position:fixed;
  left:0;
  bottom:0;
  display:flex;
  display:-webkit-flex;
  display:-webkit-box;
  -webkit-box-pack:space-around;
  justify-content: space-around;
  align-items:center;
  -webkit-box-align:center;
  -webkit-align-items:center;
  color:#848484;
  background:#fff;
  z-index: 30;
}
  .footer_box .footer_item:nth-of-type(1) .icon{
    .px2rem(width,29);
    .px2rem(height,36);
  }
  .footer_box .footer_item:nth-of-type(2) .icon{
    .px2rem(width,39);
    .px2rem(height,36);
  }
  .footer_box .footer_item:nth-of-type(3) .icon{
    .px2rem(width,38);
    .px2rem(height,36);
  }
  .footer_box .footer_item:nth-of-type(4) .icon{
    .px2rem(width,36);
    .px2rem(height,36);
  }
  .footer_box .footer_item:nth-of-type(5) .icon{
    .px2rem(width,37);
    .px2rem(height,36);
  }
  .footer_item{
    .px2rem(padding-top,26);
  .px2rem(padding-bottom,3);
    width:20%;
    height: 100%;
  -webkit-flex:1;
  -webkit-box-flex:1;
    .icon{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer_item a div:first-child{
    .px2rem(margin-bottom,6);
    .px2rem(height,36);
    margin:0 auto;
  }
  .footer_item a{
   text-align: center;
  }
.active p{
  color: #b41c21;
}
  .index_bg{
    background:url("i@2x.png") no-repeat center ;
    background-size: 100% 100%;
  }
  .active .index_bg{
    background: url("index_bg.png") no-repeat center;
    background-size: 100% 100%;
  }

  .classify_bg{
    background:url("c@2x.png") no-repeat center ;
    background-size: 100% 100%;
  }
  .active .classify_bg{
    background:url("分类红色@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .listen_bg{
    background: url("l@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .active .listen_bg{
    background: url("随心听红色@2x.png") no-repeat center;
    background-size: 100% 100%;
  }

  .buying_bg{
    background: url("b@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .active .buying_bg{
    background: url("订阅红色@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .myUser_bg{
    background: url("m@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .active .myUser_bg{
    background: url("我的红色@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
</style>
