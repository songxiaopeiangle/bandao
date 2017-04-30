<template>
  <div class="commonPart">
    <!--写了数据的版本-->

    <li class="wonderful_list" v-for="(item,index) in datas" @click="detail(item)">
      <a href="javascript:;">
        <div class="list_left">
          <img :src="item.key" alt="">
          <div class="info-type type-video" v-if="item.type == 2">

          </div>
          <div class="info-type type-audio" v-if="item.type == 1">

          </div>
          <div class="info-type type-reading" v-if="item.type == 0">

          </div>
        </div>
        <div class="list_right">
          <p class="title">{{item.title}}</p>
          <!--如果类型是0，点击内容描述时候，就跳转到视频详情页-->
          <a class="content" >
            <div class="content_item" v-html="item.desc">
              {{item.desc}}
            </div>
          </a>
          <div class="shop_list">
            <span class="free" v-if="item.price == 0">免费</span>
            <span class="free" v-else>￥{{item.price}}元</span>
            <a href="javascript:;"  class="buying" @click="buyDetail(item)" v-if="item.price!='0'">
              <span v-if="item.isorder == 1">已购</span>
              <span v-else>购买</span>
            </a>
          </div>
        </div>
      </a>
    </li>
    <!--写了数据的版本-->
  </div>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
    export default{
      props:{
      },
        data(){
            return {
              datas:[],
              testId:0,
            }
        },
        mounted() {

        },
        computed:{
          dynamaicSegment(){

          }
        },
       methods:{
         test(test){
           this.$nextTick(function(){
             this.$http.get(globle.url+'getArticlesById/'+test+'?token='+globle.tokens).then(function(res){
               this.datas = res.data;
               console.log(res.data);
               for(let i = 0; i < res.data.length; i++){

               }
             },function(res){
               console.log(res)
             })
           });
         },
         detail(item){
           this.$router.push({path:'/home/videoDetail',query:{itemId:item.id,itemType:item.type}});
         }
       }
    }

</script>
<style lang="less">
  @import "../../../../static/css/fontLess.less";
  .commonPart{
    height: auto;
  .px2rem(padding-right, 18);
  .px2rem(padding-left, 18);
  .wonderful_list{
    border-bottom:1px solid #d9d9d9;
  .px2rem(padding-top, 20);
  .px2rem(padding-bottom, 20);
  .px2rem(width,710);
  a{
    display:flex;
  }
  }
  }
  .list_left{
  .px2rem(width,194);
  .px2rem(height,168);
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
    background: url("../../../../static/image/audio@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .type-video{
  .px2rem(width,22);
  .px2rem(height,20);
    background: url("../../../../static/image/video@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .type-reading{
  .px2rem(width,25);
  .px2rem(height,20);
    background: url("../../../../static/image/reading@2x.png") no-repeat center;
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
  position:relative;
  .title {
  .px2px(font-size, 26);
    overflow : hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .content {
    display: block;
  .content_item{
  /*.px2rem(height,70);*/
  .px2rem(line-height,30);
  .px2px(font-size, 22);
  .px2rem(margin-top,5);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  }
  .shop_list {
    color: #ff0000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  /*.px2rem(width, 524);*/
  .px2rem(width, 480);
    position:absolute;
  .px2rem(left,34);
  .px2rem(bottom,0);

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
  .px2rem(padding-top,6);
  .px2rem(padding-bottom,6);
  .px2rem(padding-left,12);
  .px2rem(padding-right,12);
    color:#ff0000;
  }
  }
  }
</style>
