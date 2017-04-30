<template>
  <div class="home-content" v-if="datas.length > 0">
    <!--搜索框开始-->
    <router-link id="search_bar" to="/home/SearchListInfo">
      <form>
        <div id='searchBox'>
          <div id="searchInput">
            <input type="search"  placeholder="搜索关键字" disabled />
          </div>
          <img class="search-con" src="./search@2x.png" alt="">
        </div>
      </form>
    </router-link>
    <!--搜索框结束-->

    <!--轮播组件开始-->
    <div class="bannerBox">
      <v-homeBanner></v-homeBanner>
    </div>
    <!--轮播组件开始-->

    <!--免费推荐组件-->
    <v-freeService></v-freeService>

    <div class="advertise">
      <!--广告位-->
    </div>
    <div class="gray_part"></div>

    <!--掌门人说-->
    <v-bossSaid :bossTitle="datas"></v-bossSaid>

    <div class="mask-home" v-show="mask">
      <div class="mask-home-box">

        <img src="./delete@2x.png" class="delete" @click="honorDetailHide">
        <p class="newHonor">恭喜获得新勋章</p>

        <img src="./honorBg@2x.png"  class="honorBg">

        <img :src="honorData[0].src" class="home-honor"/>
        <p class="home-honor-require">{{honorData[0].require}}</p>
      </div>
    </div>

    <div class="gray_part"></div>
    <!--大咖私塾-->
    <v-productsRcommonded :bossTitle="datas"></v-productsRcommonded>
    <div class="advertise_banner">
      <!--广告位图片-->
    </div>
    <div class="gray_part"></div>
    <!--精彩活动-->
    <v-wonderfulActivities :bossTitle="datas"></v-wonderfulActivities>
    <div class="gray_part"></div>
    <!--私库全书-->
    <v-dataCollection :bossTitle="datas"></v-dataCollection>
    <div class="gray_part"></div>
    <!--工具箱-->
    <v-toolsComponents :bossTitle="datas"></v-toolsComponents>

    <div class="advertise_banner">
      <!--广告位图片-->
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import VueResource from 'vue-resource';
  import BScroll from "better-scroll";

  import freeService from 'components/freeService/freeService';
  import productsRcommonded from 'components/productsRcommonded/productsRcommonded';
  import dataCollection from 'components/dataCollection/dataCollection';
  import searchListInfo from 'components/searchListInfo/searchListInfo';
  import homeBanner from 'components/homeBanner/homeBanner';
  import bossSaid from 'components/home/bossSaid/bossSaid';
  import wonderfulActivities from 'components/home/wonderfulActivities/wonderfulActivities';
  import toolsComponents from 'components/home/toolsComponents/toolsComponents';

  import footer from 'components/Footer/Footer';
  import globle from 'components/global';
  Vue.use(VueRouter);
  Vue.use(VueResource);

  export default {
    components: {
      "v-freeService": freeService,
      "v-productsRcommonded": productsRcommonded,
      "v-dataCollection": dataCollection,
      "v-searchListInfo": searchListInfo,
      "v-homeBanner": homeBanner,
      "v-bossSaid": bossSaid,
      "v-wonderfulActivities": wonderfulActivities,
      "v-toolsComponents": toolsComponents,
      "v-footer":footer
    },
    data() {
      return {
        gridData:"",
        datas:[],
        mask:false,
        honorData:[
          {'src':'static/image/attendence1@2x.png','name':'出勤模范 I','require':'连续登陆超过7天'},
          {'src':'static/image/attendence2@2x.png','name':'出勤模范 II','require':'连续登陆超过7天'},
          {'src':'static/image/attendence3@2x.png','name':'出勤模范 III','require':'连续登陆超过7天'},
          {'src':'static/image/advice1@2x.png','name':'意见领袖 I','require':'连续登陆超过7天'},
          {'src':'static/image/advice2@2x.png','name':'意见领袖 II','require':'连续登陆超过7天'},
          {'src':'static/image/advice3@2x.png','name':'意见领袖 III','require':'连续登陆超过7天'},
          {'src':'static/image/teacher1@2x.png','name':'家有塾师 I','require':'连续登陆超过7天'},
          {'src':'static/image/teacher2@2x.png','name':'家有塾师 II','require':'连续登陆超过7天'},
          {'src':'static/image/teacher3@2x.png','name':'家有塾师 III','require':'连续登陆超过7天'}
        ]
      }
    },
    beforeCreate(){
      console.log("加载前");

    },
    mounted: function() {

      this.$nextTick(function() {
        this.$http.get(globle.url+'cates?token='+globle.tokens).then(function(res){
          this.datas = res.data.data;
        },function(res){
          console.log(res)
        })
      });

    },
    methods:{
      initScroll() {
        this.historyScroll = new BScroll(this.$refs.wrapper,{})
      },
      honorDetail(i) {
        this.mask=true;
      },
      honorDetailHide() {
        this.mask=false;
      },
      firstEnter(){

      }
    }
  };


</script>
<style lang="less" scoped rel="stylesheet/less">
  @import "../../../static/css/fontLess.less";
  #searchBox{
  .px2rem(line-height,76);
    background-color:#d9d9d9;
    text-align: center;
    .px2rem(padding-top,10);
  .px2rem(padding-bottom,10);
  .px2rem(padding-left,20);
  .px2rem(padding-right,20);
    position:relative;
  .search-con{
    position:absolute;
   .px2rem(left,38);
  .px2rem(top,20);
    z-index:10;
  .px2rem(width,36);
  .px2rem(height,36);

  img{

  }
  }
  }
  #searchInput{
  .px2rem(height,56);
    background: #fff;
    margin:auto;
    border-radius: 10px;


  }
  #searchInput input{

    height:100%;
    background: none;
    display: block;
    border: none;
    color:#999999;
  .px2px(font-size,28);
    /*background: url("search@2x.png") no-repeat  18px center;*/
  .px2rem(padding-left,78);
  }
  .home-content{
    width:100%;
    height:auto;
  .px2px(padding-bottom, 60);
    background:#fff;
  }
  .advertise{
    width: 100%;
  .px2rem(height,206);
    background: #666666;
  }
  .advertise_banner{
    width:100%;
  .px2rem(height,234);
    background:#666;
  }
  .gray_part{
    width: 100%;
  .px2rem(height,10);
    background:#f5f4f4;
  }
  .mask-home{
    width:100%;
  .px2rem(height,1334);
    background:rgba(0,0,0,.4);
    position:fixed;
    top:0;
    z-index: 100;
  .mask-home-box{
  .px2rem(width,424);
  .px2rem(height,416);
    background:#fff;
    margin:0 auto;
  .px2rem(margin-top,266);
  .px2rem(border-radius,15);
    position: relative;
  .px2rem(padding-top,42);
  .delete{
    position:absolute;
  .px2rem(width,46);
  .px2rem(height,46);
  .px2rem(top,-23);
  .px2rem(right,-23);
    z-index: 100;
  }
  .newHonor{
  .px2px(font-size,34);
    color:#333;
    font-weight: bold;
    position: absolute;
    z-index: 100;
  .px2rem(margin-bottom,46);
    right:50%;
  .px2px(margin-right,-121);
  }
  .home-honor{
  .px2rem(width,200);
  .px2rem(height,160);
    position: absolute;
    right:50%;
  .px2rem(margin-right,-100);
    z-index: 100;
    top:25%;

  }
  .honorBg{
    position:absolute;
  .px2rem(width,424);
  .px2rem(height,458);
    top:0;
    z-index: 10;
  }
  .home-honor-require{
    position:absolute;
  .px2rem(margin-top,70);
    text-align: center;
  .px2px(font-size,32);
    color:#333;
    font-weight: bold;
    bottom:10%;
    z-index: 10;
    right:50%;
  .px2px(margin-right,-121);
  }
  }
  }
  .bannerBox {
  .px2rem(height, 360);
  #search_bar {
    position: absolute;
    width: 100%;
  .px2rem(height, 100);
    z-index: 200;

  form {
    width: 100%;
    height: 100%;

  #searchBox {

  .px2rem(padding, 20);
  .px2rem(height, 60);
    position: relative;
  img{
    position: absolute;
  .px2rem(width,36);
  .px2rem(height,36);
    top:50%;
  .px2rem(margin-top,-18);
    left:5%;
  }
  input {
    background: rgba(194,194,194,.6);
    width: 100%;
    height: 100%;
    display: block;
    outline: none;
    border: 0;
  .px2px(border-radius, 10);
    color: #fff !important;
  .px2px(font-size, 26);
  .px2rem(padding-left, 78);
  }

  input::-webkit-input-placeholder { /* WebKit browsers*/
    color: #fff;
  }

  }
  }
  }
  }

</style>
