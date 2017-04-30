<template>
  <div class="commonPart">
    <!--写了数据的版本-->
    <li class="wonderful_list" v-for="item in menu">
      <router-link to="/home/videoDetail" v-if="item.type == 0">
        <div class="list_left">
          <img :src="item.src" alt="">
          <div class="info-type type-video">

          </div>
        </div>
        <div class="list_right">
          <p class="title">{{item.title1}}</p>
          <!--如果类型是0，点击内容描述时候，就跳转到视频详情页-->
          <a class="content" >
            <div class="content_item">
              {{item.title2}}
            </div>
          </a>
          <div class="shop_list">
            <span class="free">{{item.info}}</span>
            <router-link to="/alreadyBought" class="buying" @click="buyDetail(item)">{{item.buy}}</router-link>
          </div>
        </div>
      </router-link>
      <router-link to="/home/audioDetail" v-if="item.type == 1">
        <div class="list_left">
          <img :src="item.src" alt="">
          <div class="info-type type-audio"></div>
        </div>
        <div class="list_right">
          <p class="title">{{item.title1}}</p>
          <!--如果类型是1，点击就跳转到音频详情页-->
          <a  class="content" >
            <p @click="shopDetail_audio(item,item.type)" class="content_item">
              {{item.title2}}
            </p>
          </a>
          <!--&lt;!&ndash;如果类型是2，点击就跳转到文章详情页&ndash;&gt;-->
          <!--<a v-if="item.type == 2" class="content">-->
          <!--<p @click="shopDetail_article(item,item.type)" class="content_item">-->
          <!--{{item.title2}}-->
          <!--</p>-->
          <!--</a>-->
          <div class="shop_list">
            <span class="free">{{item.info}}</span>
            <router-link to="/alreadyBought" class="buying" @click="buyDetail(item)">{{item.buy}}</router-link>
          </div>
        </div>
      </router-link>
      <router-link to="/home/articleDetail" v-if="item.type == 2">
        <div class="list_left">
          <img :src="item.src" alt="">
          <div class="info-type type-reading"></div>
        </div>
        <div class="list_right">
          <p class="title">{{item.title1}}</p>
          <!--&lt;!&ndash;如果类型是2，点击就跳转到文章详情页&ndash;&gt;-->
          <a  class="content">
            <p @click="shopDetail_article(item,item.type)" class="content_item">
              {{item.title2}}
            </p>
          </a>
          <div class="shop_list">
            <a class="free">{{item.info}}</a>
            <router-link to="/alreadyBought" class="buying" @click="buyDetail(item)">{{item.buy}}</router-link>
          </div>
        </div>
      </router-link>
    </li>
    <!--写了数据的版本-->
  </div>
</template>
<script type="text/ecmascript-6">

  import addCart from 'components/addCart/addCart';
  export default{
    props:{
      listcom:{

      }
    },
    components:{
    },
    data() {
      return{
        types: '',
        transferPramaters: {},
        menu: [
          {id:"1",type:"0",src: "static/image/aa.png",title1: "标题标题标题1",title2:"1标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题2",
            info:"免费",buy:"购买",itemSrc:"static/video/a.mp4"},
          {id:"2",type:"1",src: "static/image/d.jpg",title1: "标题标题标题2",title2:"2标题题标题标题标题标题标题标题标题标题标题标题标题标题标题标题2",
            info:"￥100.00",buy:"购买",itemSrc:"static/audio/c.mp3"},
          {id:"3",type:"2",src: "static/image/f.jpg",title1: "标题标题标题3",title2:"3标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题2",
            info:"￥200.00",buy:"购买"},
          {id:"4",type:"0",src: "static/image/h.jpg",title1: "标题标题标题4",title2:"4标题题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题2",
            info:"￥300.00",buy:"购买",itemSrc:"static/video/a.mp4"},
          {id:"5",type:"1",src: "static/image/b.jpg",title1: "标题标题标题5",title2:"5标题题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题2",
            info:"￥400.00",buy:"购买",itemSrc:"static/audio/b.mp3"}
        ]
      }
    },
    watch:{
      '$route' (to, form) {

      }
    },
    mounted(){
      console.log(this.listcom);
    },
    created: function() {

    },
    methods: {
      shopDetail_audio(item,type){
        this.types = type;
        this.transferPramaters = item;
      },
      shopDetail_video(item,type){
        this.types = type;
        this.transferPramaters = item;
      },
      shopDetail_article(item,type,$event){
        this.types = type;
        this.transferPramaters = item;
      },
      buyDetail(item) {
        console.log("购买")
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../static/css/fontLess.less";
  .commonPart{
    height: auto;
    padding-left:20px;
    padding-right:20px;
  .wonderful_list{
    border-bottom:1px solid #d9d9d9;
    padding-top:20px;
    padding-bottom:20px;
  .px2rem(width,710);
  a{
    display:flex;
  }
  }
  }
  .list_left{
  .px2px(width,194);
  .px2px(height,168);
    justify-content:space-around;
  position:relative;
  .info-type{
    position: absolute;
    .px2rem(top,14);
    .px2rem(right,14);
  }
  .type-audio{
  .px2rem(width,20);
  .px2rem(height,20);
    background: url("audio@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .type-video{
  .px2rem(width,22);
  .px2rem(height,20);
    background: url("video@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .type-reading{
  .px2rem(width,25);
  .px2rem(height,20);
    background: url("reading@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  img{
    width:100%;
    height:100%;
  }
  }
  .list_right {
    color: #333333;
  .px2rem(width, 480);
  .px2rem(height, 168);
  .px2px(padding-left, 34);
  .title {
  .px2px(font-size, 26);
  .px2px(margin-bottom,10);
  }
  .content {
    display: block;
  .content_item{
  .px2rem(height,70);
  .px2rem(line-height,30);
  .px2px(font-size, 22);
  }
  }
  .shop_list {
    color: #ff0000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  /*.px2rem(width, 524);*/
  /*.px2px(margin-top,15);*/
  .free {
  .px2px(font-size, 26);
    color:#ff0000;
  }
  .buying {
    display: block;
  .px2px(font-size, 22);
  .px2rem(width, 67);
  .px2rem(height, 34);
  .px2rem(line-height, 34);
    border: 1px solid #ff0000;
    border-radius: 10px;
    text-align: center;
  .px2px(padding-top,6);
  .px2px(padding-bottom,6);
  .px2px(padding-left,12);
  .px2px(padding-right,12);
    color:#ff0000;
  }
  }
  }
</style>
