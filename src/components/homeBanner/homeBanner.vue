<template>
  <div class="banner">
   <router-link to="/home/bannerDetail/002">
     <swipe class="my-swipe">
       <swipe-item class="slide1" v-for="(dataItem, index) in datas">
         <img :alt="dataItem.title" :src="dataItem.key" :index="index"  />
       </swipe-item>
     </swipe>
   </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
 import swipe from 'components/swiper/swipe';
 import swipeItem from 'components/swiper-item/swipe-item';
 import globle from 'components/global';
 //http://bandao.c-office.cn/api/carousels
  export default {
    components: {
         "swipe": swipe,
         "swipe-item": swipeItem
       },
    data() {
      return {
         datas:[],
         nowIndex: 0,
         selectItem: {},
         bannerData:[
          {
            title: "电脑",
            href: "1",
            url: "/static/image/1.jpg"
          },
          {
            title: "手机",
            href: "2",
            url: "/static/image/2.jpg"
          },
          {
            title: "平板",
            href: "3",
            url: "/static/image/3.jpg"
          }
        ]
      }
    },
    mounted(){
      this.$nextTick(function() {
        this.$http.get(globle.url+'carousels?token='+globle.tokens).then(function(res){
          this.datas = res.data.carousels;
        },function(res){
          console.log(res)
        })
      });
    },
    methods: {
      bannerPage(dataItem, $event) {
        this.selectItem = dataItem;
      }
    }
  };
</script>
<style lang="less">
  @import "../../../static/css/fontLess.less";
  .banner-bg{
    width: 100%;
    height: 100%;
    background:#666666;
  }
.banner{
  width:100%;
 .px2rem(height, 360);
  z-index:-1;
}
.banner img{
  width: 100%;
  height: 100%;
}
.my-swipe {
.px2rem(height, 360);
  color: #fff;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
  .mint-swipe-indicator{
   .px2px(width,14);
    .px2px(height,14);
    background:#fff!important;
    opacity: 1!important;
  }
  .mint-swipe-indicator.is-active{
    opacity: 1!important;
  .px2px(width,24);
  .px2px(height,14);
    border-radius: 10px;
    background: #ffffff!important;
  }
</style>
