<template>
  <div class="myUser_page">
    <div class="myUser_center">
      <div class="my_img">
        <img :src="datas.headimgurl" alt="">
      </div>
      <div class="user_info">
        <div class="info_content">
          <span class="avatar">{{datas.nickname}}</span>
        </div>
        <div class="user_money">
          <a href="">Lv.10</a>
          <a href="">剩余金额：
            ￥<span>{{datas.balance}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="honor-box">
        <div>
          <img src="./attendenceF@2x.png" alt="">
        </div>
      <div><img src="./teacherF@2x.png" alt=""></div>
      <div><img src="./adviceF@2x.png" alt=""></div>


    </div>
    <ul class="private_info mycentering">
      <li class="private_names">
        <router-link to="/myCenter/myHonor">
          <div class="weui-flex__item">
            <!--<span class="center_bg index_custom"></span>-->

              <div class="weui-flex center-box">
                <div class="img-box">
                  <img src="./wards.png" alt="">
                </div>
                <span>我的成就</span>
              </div>

          </div>
          <div class="rightBtn">
            <img  src="static/image/right.png" alt="" />
          </div>
        </router-link>
      </li>
      <li class="private_names"><router-link to="/myCenter/myBrowse" class="weui-flex">
        <div class="weui-flex__item">
          <!--<span class="center_bg index_custom"></span>-->
          <div class="weui-flex center-box">
            <div class="img-box">
              <img src="./look.png" alt="">
            </div>
            <span>我的浏览</span>
          </div>
        </div>
        <div class="rightBtn">
          <img  src="static/image/right.png" alt="" />
        </div>
      </router-link></li>
      <li class="private_names">
        <router-link to="/myCenter/myCollect">
          <div class="weui-flex__item">
            <!--<span class="center_bg index_custom"></span>-->
            <div class="weui-flex center-box">
              <div class="img-box">
                <img src="./collect.png" alt="">
              </div>
              <span>我的收藏</span>
            </div>
          </div>
          <div class="rightBtn">
            <img  src="static/image/right.png" alt="" />
          </div>
        </router-link>
      </li>
    </ul>
    <ul class="private_info index_ul">
      <li class="private_names">
        <router-link to="/indexMake" class="weui-flex">
          <div class="weui-flex__item">
            <!--<span class="center_bg index_custom"></span>-->
            <div class="weui-flex center-box">
              <div class="img-box">
                <img src="./indexbox.png" alt="">
              </div>
              <span>首页定制</span>
            </div>
          </div>
          <div class="rightBtn">
            <img  src="static/image/right.png" alt="" />
          </div>
        </router-link>
      </li>
      <li class="private_names"><router-link to="/myCenter/recharge">
        <div class="weui-flex__item">
          <!--<span class="center_bg index_custom"></span>-->
          <div class="weui-flex center-box">
            <div class="img-box">
              <img src="./pay.png" alt="">
            </div>
            <span>账户充值</span>
          </div>
        </div>
        <div class="rightBtn">
          <img  src="static/image/right.png" alt="" />
        </div>
      </router-link></li>
      <li class="private_names"><router-link to="/myCenter/rechargeMark">
        <div class="weui-flex__item">
          <!--<span class="center_bg index_custom"></span>-->
          <div class="weui-flex center-box">
            <div class="img-box">
              <img src="./buy.png" alt="">
            </div>
            <span>购买记录</span>
          </div>
        </div>
        <div class="rightBtn">
          <img  src="static/image/right.png" alt="" />
        </div>
      </router-link></li>
    </ul>
    <ul class="private_info message">
      <li class="private_names">
        <router-link to="/myCenter/contact">
          <div class="weui-flex__item">
            <!--<span class="center_bg index_custom"></span>-->
            <div class="weui-flex center-box">
              <div class="img-box">
                <img src="./call.png" alt="">
              </div>
              <span>人工客服</span>
            </div>
          </div>
          <div class="rightBtn">
            <img  src="static/image/right.png" alt="" />
          </div>
       </router-link>
      </li>
      <li class="private_names">
        <router-link to="/myCenter/userBack">
          <div class="weui-flex__item">
            <!--<span class="center_bg index_custom"></span>-->
            <div class="weui-flex center-box">
              <div class="img-box">
                <img src="./feedback.png" alt="">
              </div>
              <span>用户反馈</span>
            </div>
          </div>
          <div class="rightBtn">
            <img  src="static/image/right.png" alt="" />
          </div>
        </router-link>
      </li>
      <li class="private_names">
       <router-link to="/myCenter/lawer">
         <div class="weui-flex__item">
           <!--<span class="center_bg index_custom"></span>-->
           <div class="weui-flex center-box">
             <div class="img-box">
               <img src="./lawer.png" alt="">
             </div>
             <span>法律声明</span>
           </div>
         </div>
         <div class="rightBtn">
           <img  src="static/image/right.png" alt="" />
         </div>
       </router-link>
      </li>
    </ul>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import footer from 'components/Footer/Footer';
  import globle from 'components/global';
 export default {
   components:{
     "v-footer":footer
   },
   data(){
     return{
       datas:[]
     }
   },
   mounted(){
     this.$nextTick(function() {
       this.$http.get(globle.url+'myBaseInfo?token='+globle.tokens).then(function(res){
         this.datas = res.data;
          console.log(this.datas);

       },function(res){
         console.log(res)
       })
     });
   }
 };
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import "../../../static/css/fontLess.less";

  .mycentering{
    .img-box:nth-of-type(1){
      .px2rem(width,18);
      .px2rem(height,25);
    }
    .img-box:nth-of-type(2){
      .px2rem(width,24);
      .px2rem(height,19);
    }
    .img-box:nth-of-type(3){
      .px2rem(width,24);
      .px2rem(height,22);
    }
  }
  .index_ul{
    .img-box:nth-of-type(1){
      .px2rem(width,24);
      .px2rem(height,25);
    }
    .img-box:nth-of-type(2){
      .px2rem(width,24);
      .px2rem(height,19);
    }
    .img-box:nth-of-type(3){
      .px2rem(width,20);
      .px2rem(height,23);
    }
  }
  .message{
    .img-box:nth-of-type(1){
      .px2rem(width,24);
      .px2rem(height,24);
    }
    .img-box:nth-of-type(2){
      .px2rem(width,24);
      .px2rem(height,24);
    }
    .img-box:nth-of-type(3){
      .px2rem(width,24);
      .px2rem(height,16);
    }
  }
  .myUser_page{
    width: 100%;
    .px2rem(height,1334);
    background:#f5f4f4;
  }
  .myUser_center{

    .px2rem(height,208);
    background:#fff;
    display: flex;
    .px2rem(padding-left,64);
    align-items: center;
    .px2rem(margin-bottom,10);
  }
  .medal{
    display: block;
    .px2rem(width,21);
  .px2rem(height,32);
    img{
      width: 100%;
      height: 100%;
    }
  }
  .my_img{
    .px2rem(width,114);
   .px2rem(height,114);
    img{
      width: 100%;
      height: 100%;
      border-radius:50%;
    }
  }
  .user_info p{

  }

  .user_info{
  .px2px(font-size,24);
    .px2rem(margin-left,28);
  }
.user_info .info_content{
  display: flex;
  align-items: center;
  .px2rem(margin-top,22);
}
.center-box{
  align-items: center;
}
 .img-box{
   /*.px2rem(width,25);*/
   /*.px2rem(height,25);*/
   .px2rem(margin-right,25);
   .px2rem(margin-left,12);
   img{
     width: 100%;
     height:100%;
     display: block;
   }
 }
  .user_info .info_content  a:first-child{
    .px2rem(margin-right,24);
    color:#333;
    .px2px(font-size,28);
  }
  .user_info .user_money a:first-child{
    color:#ffc771;
    .px2rem(margin-right,30);
  }
.user_info .user_money a:last-child{
  color:#333;
}
  .private_info{
    background:#fff;
  .px2rem(padding-left,20);
  .px2rem(padding-right,20);
  .px2rem(margin-bottom,10);
    .private_names{
      border-bottom:1px solid #d9d9d9;
      .rightBtn{
        .px2rem(width,11);
        .px2rem(height,80);
        img{
        .px2rem(width,11);
        .px2rem(height,16);

        }
      }
     a{
     .px2px(font-size,26);
       display: flex;
       color:#333;
       flex-direction: row;
     .px2rem(line-height,80);
     .px2rem(height,80);
     }
    }
  }
  .message{
    .px2rem(margin-bottom,97);
  }
  .honor-box{
    .px2rem(padding-top,20);
    .px2rem(padding-bottom,20);
    .px2rem(padding-left,70);
    .px2rem(padding-right,70);
    background:#fff;
    .px2rem(margin-bottom,10);
  display:flex;
  div{
    flex: 1;
    .px2rem(padding-top,10);
     .px2rem(padding-bottom,10);
    img{
      display: table-cell;

      vertical-align:middle;
    }
  }
    div:nth-child(1){
      .px2rem(padding-right,68);
      border-right:1px solid #d9d9d9;
      img{
      .px2rem(width,110);
      .px2rem(height,88);
      }
    }
    div:nth-child(2){
    .px2rem(padding-right,71);
    .px2rem(padding-left,74);
      border-right:1px solid #d9d9d9;
      img{
      .px2rem(width,105);
      .px2rem(height,88);
      }
    }
    div:nth-child(3){
      .px2rem(padding-right,70);
      .px2rem(padding-left,74);
      img{
      .px2rem(width,106);
      .px2rem(height,88);
      }
    }
  }

</style>
