<template>
    <div>
      <div class="cart-item" v-show="showing">
        <a class="check">
          <i class="fa fa-check-circle"></i>
        </a>
        <div class="goods-show">
          <img src="./photo.jpg" class="cart-goods-img" @click="result">
          <div class="volume">
            <img src="./volume@2x.png">
          </div>
        </div>
        <div class="cart-goods-info">
          <p class="cart-title"></p>
          <p class="description">商品描述</p>
          <p class="cart-money">￥多少钱</p>
          <a class="close-x">
            <i class="fa fa-close"></i>
          </a>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default{
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
  data() {
    return{
      showing:false
    }
  },
  created(){

  },
  methods:{
    result(){
      console.log("详情页+"+this.src);
    },
    show(){
      this.showing = true;
      console.log("详情页地方个+"+this.src);
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../../../static/css/fontLess.less";
  .cart-item{
    display: flex;
    align-items:center;
    border:1px solid #d9d9d9;
    background: #fff;
  .px2px(padding-top,20);
  .px2px(padding-left,40);
  .px2px(padding-bottom,20);
  .px2px(padding-right,20);
  .check{
  .px2px(margin-right,40);
  i{
    color:#b41c21;
  .px2px(font-size,50);

  }
  }
  .goods-show{
  .px2rem(width,168);
  .px2rem(height,190);
    flex-grow: 1;
  .px2px(margin-right,20);
    position:relative;
  .cart-goods-img{
    width: 100%;
    height: 100%;
  }
  .volume{
  .px2rem(width,20);
  .px2rem(height,20);
    position:absolute;
    right:14px;
    top:14px;
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
  .px2rem(height,50);
  .px2rem(line-height,50);
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
</style>
