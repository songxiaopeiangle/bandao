
<template>
    <div class="recharge-box" ref="rechargeBox">
      <div class="my-recharge">
        <p><img src="./restMoney@2x.png" alt="">我的余额 （元）</p><span>100</span></div>
      <div class="recharge-sel-box">
        <p class="recharge-sel-title">充值</p>
        <div class="recharge-sel-num">
          <div class="first-line" @click="selectMoney">
            <button class="price-sel"  >10元</button>
            <button class="price-sel">20元</button>
            <button class="price-sel">40元</button>
          </div>
          <div class="second-line" @click="selectMoney">
            <button class="price-sel">50元</button>
            <button class="price-sel">80元</button>
            <button class="price-sel">100元</button>
          </div>
        </div>
        <p class="recharge-instruction-title">充值说明</p>
        <div class="instruction-detail">
          <span class="first-num">1.</span>
          <p class="recharge-instruction">说明明哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈师大哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="instruction-detail">
          <span class="first-num">2.</span>
          <p class="recharge-instruction">说明明哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈师大哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="instruction-detail">
          <span class="first-num">3.</span>
          <p class="recharge-instruction">说明明哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈师大哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="instruction-detail">
          <span class="first-num">4.</span>
          <p class="recharge-instruction">说明明哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈师大哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="instruction-detail">
          <span class="first-num">5.</span>
          <p class="recharge-instruction">说明明哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈师大哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="pay-btn-box">
          <div class="pay-btn charge">充值</div>
          <div class="pay-btn give">转赠</div>
        </div>
      </div>
    </div>
</template>

<script type=“text/ecmascript-6“>
  export default{
    data() {
      return{
      }
    },
     mounted() {
      this.bodyHeight=document.body.clientHeight;
      this.$refs.rechargeBox.style.height=this.bodyHeight+'px';
    },
    methods: {
      selectMoney(e){
        if(e.target.nodeName==='BUTTON'){
          $(e.target).addClass('btn-active').siblings('.price-sel').removeClass('btn-active');
        $(e.target).parent().siblings().children('.price-sel').removeClass('btn-active');
        }
      }
    }
  }
</script>
<style lang="less"  scoped>
  @import "../../../../static/css/fontLess";
  .recharge-box{
    background:#f5f4f4;
  }
  .my-recharge{
    .px2rem(height,100);
    color:#333;
    .px2px(font-size,28);
    font-weight:bold;
    .px2rem(line-height,100);
    background:#fff;
    .px2rem(margin-bottom,27);
    .px2rem(padding-left,20);
    .px2rem(padding-right,20);
    display: flex;
    justify-content:space-between;
    border-bottom:1px solid #d9d9d9;
    p{
      display: flex;
      align-items:center;
      img{
        .px2rem(margin-right,20);
        .px2rem(width,36);
        .px2rem(height,36);
      }
    }
    span{
      color:#b41c21;
    }
  }
  .recharge-sel-box{
    .px2rem(padding-left,20);
    .px2rem(padding-right,20);
    .recharge-sel-title{
      .px2px(font-size,24);
      color:#333;
      .px2rem(margin-bottom,27);
    }
    .first-line,.second-line{
     display: flex;
      justify-content:space-between;
      .px2rem(margin-bottom,20);
    }
    .price-sel{
      outline:none;
      border:2px solid #b41c21;
      .px2rem(border-radius,10);
      .px2rem(height,100);
      .px2rem(width,200);
      text-align: center;
      .px2rem(line-height,100);
      .px2px(font-size,28);
      color:#b41c21;
      background:#fff;
      flex: 0 1 auto;
    }
    .btn-active{
      background:#b41c21;
      color:#fff ;
    }
    .recharge-instruction-title{
      .px2px(margin-top,75);
      .px2px(margin-bottom,36);
      .px2px(font-size,24);
      color:#333;
    }
    .instruction-detail{
      .px2px(font-size,22);
      color:#333;
      display: flex;
      .px2px(line-height,35);
      .first-num{
        display: inline-block;
        height:100%;
      }
      .recharge-instruction{
        display: inline-block;
      }
    }
    .pay-btn-box{
      .px2rem(margin-top,50);
      .px2rem(padding-left,15);
      .px2rem(padding-right,15);
    }
    .pay-btn{
      border:0;
      outline:none;
      .px2rem(height,72);
      .px2rem(line-height,72);
      .px2px(font-size,32);
      text-align: center;
      .px2rem(border-radius,10);
      width:100%;
    }
    .charge{
      background:#b41c21;
      color:#fff;
    }
    .give{
      background: #fff;
      border:1px solid #b41c21;
      color:#b41c21;
      .px2rem(margin-top,20);
    }
  }

</style>
