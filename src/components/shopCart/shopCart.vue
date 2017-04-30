<template>
  <div class="cart-content">
    <!--加入购物车的商品（文章)开始-->
    <div class="cart-item">
      <a class="check" @click="checking">
        <img :src="check ? 'static/image/checked@2x.png' : 'static/image/unchecked@2x.png'" alt="">
      </a>
      <div class="goods-show">
        <img :src="datas.contentThumb" class="cart-goods-img">
        <div class="volume">
          <img src="static/image/readIcon@2x.png" v-if="datas.type == 0">
          <img src="static/image/audioIcon@2x.png" v-if="datas.type == 1">
          <img src="static/image/videoIcon@2x.png" v-if="datas.type == 2">
        </div>
      </div>
      <div class="cart-goods-info">
        <div class="cart-title">{{datas.title}}</div>
        <div class="description" v-html="datas.desc">{{datas.desc}}</div>
        <div class="cart-money">￥{{datas.price}}</div>
        <a class="close-x" @click="close">
          <i class="fa fa-close"></i>
        </a>
      </div>
    </div>
    <!--加入购物车的商品（文章)结束-->
    <!--<v-articleCart ref="child" :item="transferItem" :price="transferPrice" :src="transferSrc" :titleDescript="transferDescript"></v-articleCart>-->
    <div class="close-account">
      <img class="check" @click="checking" :src="check ? 'static/image/checked@2x.png' : 'static/image/unchecked@2x.png'" alt="">
      <p class="total">
        <span>合计:</span>
        <span v-if="check">￥{{datas.price}}</span>
        <span v-else>￥0</span>

      </p>
      <p class="extra-money">
        <span>余额:</span>
        <span>￥2000</span>
      </p>
      <button class="buy-btn" @click="payoff($event)">结算<span class="buy-num">(1)</span></button>
    </div>
  </div>
</template>

<script type=“text/ecmascript-6“>
 import globle from 'components/global';
  export default{
    components:{

    },
     data() {
        return{
          datas:[],
          check:true
        }
     },
     mounted(){
       this.$nextTick(function(){
       console.log(this.$route.query.detailData);
       let detailId=this.$route.query.detailData.id;
       let detailType=this.$route.query.detailData.type;

        this.$http.get(globle.url + 'show/' + detailId + '/41/'+detailType+'?token=' + globle.tokens).then(function(res){
          this.datas = res.data;
          console.log(this.datas);

        },function(res){
          console.log(res)
        })
      });
     },
     methods:{
       checking(){
         this.check = !this.check;
       },
      payoff(event){
         if(!event._constructed) {
          return;
        }
        console.log("结算")
      },
      close(){

      }
     }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../static/css/fontLess";
  .cart-content{
    width: 100%;
    height: 5000px;
    background: #f5f4f4;
    position:fixed;
    left: 0;
    top: 0;
    z-index: 103;
  }
  .cart-item{
    display: flex;
    align-items:center;
    border:1px solid #d9d9d9;
    background: #fff;
  .px2rem(padding-top,20);
  .px2rem(padding-left,40);
  .px2rem(padding-bottom,20);
  .px2rem(padding-right,20);
  .check{
  .px2rem(margin-right,40);
  i{
    color:#b41c21;
  .px2px(font-size,50);

  }
  }
  .goods-show{
  .px2rem(width,168);
  .px2rem(height,190);
    flex-grow: 1;
  .px2rem(margin-right,20);
    position:relative;
  .cart-goods-img{
    width: 100%;
    height: 100%;
  }
  .volume{
  .px2rem(width,20);
  .px2rem(height,20);
    position:absolute;
  .px2rem(right,14);
  .px2rem(top,14);
  img{
    width: 100%;
    height: 100%;
    display: block;
  }
  }
  }
  .cart-goods-info{
    position:relative;
    flex-grow: 1;
  .px2rem(width,405);
  .cart-title{
    color:#333;
  .px2px(font-size,26);

  }
  .description{
    color:#666;
  .px2px(font-size,24);
  }
  .cart-money{
  .px2px(font-size,24);
    color:#b41c21;
  }
  .close-x{
  .px2rem(width,13);
  .px2rem(height,15);
    display: block;
    /*background-size: 13px 15px;*/
    /*background: url("./close.png");*/
    position: absolute;
    right: 0;
    top: 0;
  i{
    color:#d9d9d9;
  .px2px(font-size,25);
    display: block;
  }
  }
  }
  }
  .close-account{
  .px2rem(height,100);
    width:100%;
    background:#fff;
    position: fixed;
    bottom:0;
    left: 0;
    display: flex;
    align-items: center;
  .check{
  .px2rem(margin-right,40);
  .px2rem(margin-left,40);
  .px2rem(height,50);
  .px2rem(width,50);
  }
  .total{
  .px2px(font-size,26);
    color:#333;
    flex: 1;
  }
  .extra-money{
  .px2px(font-size,26);
    color:#999;
    flex: 1;
  }
  .buy-btn{
    border:0;
  .px2rem(border-radius,10);
  .px2rem(height,70);
  .px2rem(width,200);
    background:#b41c21;
    color:#fff;
  .px2px(font-size,26);
  .px2rem(margin-right,20);
    flex: 1;
  }
  }

</style>
