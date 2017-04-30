<template>
  <div class="click-buy-show">

      <div class="add-cart-mask">

        <div class="add-cart-box">
          <div class="goods-info">
            <div class="goods-img">
              <!--<img :src="src" alt="">-->
            </div><span class="goods-title">标题</span>
            <span class="goods-money">100元</span>
          </div>
          <div class="total-money">共计：￥100</div>
          <div class="btn-box">
            <a href="javascript:;" class="add-btn" @click="addCart(item,price)">转赠他人</a>
            <router-link to="/shopCart" class="buy-btn" @click="rightBuy(item,price)">
              立即结算
            </router-link>
          </div>
          <img src="./x@2x.png" class="close" @click="close">
        </div>

      </div>



    <!--购物车组件-->
    <!--<v-shopCart ref="child" :item="transferItem" :price="transferPrice" :src="transferSrc" :titleDescript="transferDescript"></v-shopCart>-->

  </div>
</template>

<script type=“text/ecmascript-6“>
  import shopCart from 'components/shopCart/shopCart';
  export default{
     components:{
       "v-shopCart":shopCart
     },
     props: {
      item: {
        type: String
      },
      price: {
        type: String
      },
      titleDescript:{
        type: String
      },
      src:{
        type: String
      }
    },
    beforeCreate() {

    },
    mounted() {

    },
    created() {

    },
    data() {
      return {
        noClose:true,
        newsItem: '',
        transferItem:'',
        transferPrice:'',
        transferDescript:'',
        transferSrc:''
      }
    },
    methods:{
      close () {
        this.$emit('close');
      },
      addCart() {
        //this.$refs.child.show();

         this.newsItem = this.item;
      },
      rightBuy(item,price) {
        this.showing = false;
      },
      show() {
        this.showing = true;
        this.transferItem = this.item;
        this.transferPrice = this.price;
        this.transferDescript = this.titleDescript;
        this.transferSrc = this.src;
        //console.log(this.transferDescript+"打印了"+this.transferSrc)

      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../static/css/fontLess";
  .click-buy-show{

    width: 100% ;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
  }
  .add-cart-mask{
    height:10000px;
    width: 100% ;
    background: rgba(0,0,0,.6);
  }

  .add-cart-box{
    position: fixed;
    left:0;
    bottom:0;
    .px2rem(height,480);
    width: 100%;
    background: #fff;
    z-index: 101;
    .goods-info{
      .px2rem(padding-top,30);
      .px2rem(padding-bottom,30);
      .px2rem(padding-left,20);
      .px2rem(margin-left,10);
      border-bottom:1px solid #d9d9d9;
      .px2rem(margin-right,10);
      position:relative;
      .goods-img{
        .px2rem(height,128);
        .px2rem(width,128);
        background:#ff0000;
        .px2rem(margin-right,18);
        display:inline-block;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .goods-title{
        .px2px(font-size,26);
        font-weight: bold;
        color:#333;
        position: absolute;
        .px2rem(top,47);
      }
      .goods-money{
        .px2px(font-size,28);
        color:#ff0000;
        position: absolute;
        .px2rem(top,123);
      }
    }
    .total-money{
      .px2rem(padding-left,20);
      .px2rem(margin-left,10);
      .px2rem(font-size,26);
      color:#333;
      border-bottom:1px solid #d9d9d9;
      .px2rem(padding-top,20);
      .px2rem(padding-bottom,20);
    }
    .btn-box{
      position:absolute;
      bottom:0;
      left:0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
    .px2rem(line-height,78);
      align-items:center;
      .add-btn,.buy-btn{
        .px2rem(height,78);
        background:#ff9c00;
        .px2px(font-size,26);
        color:#fff;
        border-radius:0;
        border:0;
        -webkit-box-flex:1;
        -webkit-flex:1;
        -ms-flex:1;
        flex:1;
        text-align: center;
      }
      .buy-btn{
        background:#b41c21;
      }
    }
    .close{
      position: absolute;
      .px2rem(top,20);
      .px2rem(right,20);
      .px2rem(width,30);
      .px2rem(height,30);
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .move-enter-active,.move-leave-active{
    transition:all .5s;
  }
  .move-enter{
    transform: translate3d(0, 0, 0);
  }
  .move-leave{
    transform: translate3d(0, 100px, 0);
  }
  @keyframes move-in {
    0% {
      transform: translate3d(0, 0, 0);
    }
    /*50% {*/
    /*transform: translate3d(50%, 0, 0);*/
    /*}*/
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes move-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    /*50% {*/
    /*transform: translate3d(50%, 0, 0);*/
    /*}*/
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }
</style>
