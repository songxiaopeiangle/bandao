<template>
  <div class="products-recommond">
    <div class="weui-flex title-box">
      <p class="weui-flex__item">
        <span class="left-border"></span>{{bossTitle[30].title}}</p>
      <div class="changeAnother weui-flex" @click="huan($event)">

        <img  src="./change@2x.png" alt="" class="rightBtn"/>

        换一换
      </div>
    </div>
    <div class="recommond-box">

      <li class="wonderful_list" v-for="(item,index) in datas" @click="detail(item)">
        <a href="javascript:;" class="weui-flex">
          <div class="list_left">
            <img :src="item.key" alt="">
          </div>
          <div class="list_right1">
            <span class="title">{{item.title}}</span>
            <!--如果类型是0，点击内容描述时候，就跳转到视频详情页-->

            <span class="content_item">
                {{item.title}}
              </span>
            <span class="free weui-flex__item" v-if="item.isfree == 0">免费</span>
            <span class="free weui-flex__item" v-else>{{item.price}}元</span>
          </div>
        </a>
        <!--<router-link to="/home/audioDetail" class="weui-flex" v-if="item.isaudio == 1 && item.isvideo == 0">-->
          <!--<div class="list_left">-->
            <!--<img :src="item.key" alt="">-->
          <!--</div>-->
          <!--<div class="list_right1">-->
            <!--<span class="title">{{item.title}}</span>-->
            <!--&lt;!&ndash;如果类型是1，点击就跳转到音频详情页&ndash;&gt;-->

            <!--<span  class="content_item">-->
                <!--{{item.title}}-->
              <!--</span>-->

            <!--<span class="free weui-flex__item" v-if="item.isfree == 0">免费</span>-->
            <!--<span class="free weui-flex__item" v-else>{{item.price}}元</span>-->

          <!--</div>-->
        <!--</router-link>-->
        <!--<router-link to="/home/articleDetail" class="weui-flex" v-if="item.isaudio == 0 && item.isvideo == 0">-->
          <!--<div class="list_left">-->
            <!--<img :src="item.key" alt="">-->
          <!--</div>-->
          <!--<div class="list_right1">-->
            <!--<span class="title">{{item.title}}</span>-->
            <!--&lt;!&ndash;&lt;!&ndash;如果类型是2，点击就跳转到文章详情页&ndash;&gt;&ndash;&gt;-->

            <!--<span  class="content_item">-->
                <!--{{item.title}}-->
              <!--</span>-->

            <!--<span class="free weui-flex__item" v-if="item.isfree == 0">免费</span>-->
            <!--<span class="free weui-flex__item" v-else>{{item.price}}元</span>-->

          <!--</div>-->
        <!--</router-link>-->
      </li>
    </div>
    <div class="see-more">
      <div class="more_box" @click="moreData">
        <span>查看更多</span>
        <img  src="static/image/right.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
  export default {
    props:{
      bossTitle :{}
    },
    components: {

    },
    data() {
      return {
        datas: [],
        topicId:-1
      }
    },
    mounted() {
      this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[30].id+'/2?token='+globle.tokens).then(function(res){
        this.datas = res.data;
        this.topicId=this.bossTitle[30].id;
      },function(res){
        console.log(res)
      })
    },
    methods:{
      huan(e){
        $(e.target).find('img').css('animation','rotat 1s');
        setTimeout(function(){
          $(e.target).find('img').css('animation','0');
        },1000)
        this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[30].id+'/2/huan?token='+globle.tokens).then(function(res){
          this.datas = res.data;
        },function(res){
          console.log(res)
        })
      },
      moreData(){
        this.$router.push({path:'home/listComponent',query:{id:this.topicId}});
      },
      detail(item){
        this.$router.push({path:'/home/videoDetail',query:{itemId:item.id,itemType:item.type}});
      }
    }
  };
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import "../../../static/css/fontLess.less";
  .products-recommond{
  .px2px(padding-left, 20);
  .px2px(padding-right, 20);
  .px2px(padding-top, 5);
  }

  .more_recommond{
  .px2rem(width,202);
  .px2rem(height,42);
    text-align: center;
    border:1px solid #d9d9d9;
  .px2px(font-size,22);
    border-radius: 10px;
    margin:0 auto;
  .px2rem(line-height,42);
  .px2px(margin-bottom,20);
  }
  .title-box{
    border-bottom:1px solid #d9d9d9;
  .px2px(padding-top,10);
  .px2px(padding-bottom,10);
  .px2rem(height,45);
  .px2rem(line-height,45);
  p{
    color:#333;
    font-weight: bold;
  .px2px(font-size, 28);
  .px2rem(height,44);
    display: flex;
    align-items: center;
  .left-border{
    display: inline-block;
  .px2rem(width,4);
  .px2rem(height,26);
    background:#b41c21;
  .px2rem(margin-right,8);
  }
  }
  .changeAnother{
    color:#999999;
  .px2px(font-size, 24);
    display: flex;
    align-items: center;
  }
  .rightBtn{
  .px2rem(width,24);
  .px2px(margin-right,6);
  .px2rem(height,22);
  }
  }

  .wonderful_list{
    border-bottom:1px solid #d9d9d9;
  .px2rem(padding-top,20);
  .px2rem(padding-bottom,20);
  a{
    display:flex;
    align-items:flex-start;
  .px2rem(height,188);
  }
  }

  .list_left{
  .px2rem(width,234);
  .px2rem(height,188) !important;
    justify-content:space-around;
    position: relative;
  img:nth-child(1){
    width:100%;
  .px2rem(height,188);
  .px2rem(border-radius,10);
  }
  img:nth-child(2){
  .px2rem(width,44);
  .px2rem(height,44);
    position: absolute;
  .px2rem(bottom,20);
  .px2rem(right,20);
  }
  }
  .list_right1 {
    color: #333333;
  .px2rem(width, 436);
  .px2rem(height, 188);
  .px2px(padding-left, 34);
    position:relative;
  .title {
  .px2px(font-size, 26);
  .px2rem(margin-bottom,10);
    color:#333;
    font-weight: bold;
    display: block;
    overflow : hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .content_item{
    display: block;
  .px2px(font-size, 26);
    color:#797979;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  .px2rem(height,87);
  .px2rem(line-height,35);
  }

  .px2rem(line-height,28);

  .free {
    color: #ff0000;
  .px2px(font-size, 26);
    position: absolute;
  .px2rem(bottom,6);
  .px2rem(left,34);
  }

  }
  .see-more{
  .px2rem(font-size,26);
    text-align: center;
  .px2rem(height,85);
  .px2rem(line-height,85);
    /*border-top:1px solid #d9d9d9;*/
  /*.px2rem(margin-top,20);*/
    color:#999;
  img{
  .px2rem(width,12);
  .px2rem(height,16);
  }
  }
  @keyframes rotat{
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
