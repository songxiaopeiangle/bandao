<template>
  <div class="recommond-boxing">
    <div class="weui-flex title-box">
      <p class="weui-flex__item">
        <span class="left-border"></span>{{bossTitle[29].title}}
      </p>
      <div class="changeAnother weui-flex" @click="huan($event)">
        <img  src="./change@2x.png" alt="" class="rightBtn"/>
        换一换
      </div>
    </div>
    <div class="recommond-box ">
      <ul class="scroll">
        <li class="boss_list" v-for="(dataItem, index) in datas" :index="index" @click="detail(dataItem)">
          <!--<router-link to="/home/audioDetail">-->
          <a href="javascript:;">
            <img :src="dataItem.key" alt="">
            <div class="type_name">
              <span class="price-img articleimg" v-if="dataItem.type == 0"></span>
              <span class="price-img audioImg" v-if="dataItem.type == 1"></span>
              <span class="price-img videoImg" v-if="dataItem.type == 2"></span>
                <span class="price-choice" v-if="dataItem.price != 0">
                    {{dataItem.price}}元
                  </span>
                  <span class="price-choice" v-else>
                    免费
                  </span>
            </div>
          </a>
        </li>
      </ul>
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
  import listComponent from 'components/listComponent/listComponent';
  import globle from 'components/global';
  export default{
    props:{
      bossTitle :{

      }
    },
    components: {
      "v-listComponent": listComponent
    },
    data() {
      return{
        selectItem: {},
        datas:[],
        topicId:-1
      }
    },
    computed: {

    },
    mounted() {
      this.$nextTick(function(){
        this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[29].id+'/2?token='+globle.tokens).then(function(res){
          this.topicId=this.bossTitle[29].id;
          this.datas = res.data;
          console.log(res.data);
        },function(res){
          console.log(res);
        })
      });
    },
    methods: {
      huan(e){
          $(e.target).find('img').css('animation','rotat 1s');
          setTimeout(function(){
            $(e.target).find('img').css('animation','0');
          },1000)
        this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[29].id+'/2/huan?token='+globle.tokens).then(function(res){
          this.datas = res.data;
        },function(res){
          console.log(res)
        })
      },
      moreData(){
        this.$router.push({path:'/home/listComponent',query:{id:this.topicId}});
      },
      detail(dataItem){
        this.$router.push({path:'/home/videoDetail',query:{itemId:dataItem.id,itemType:dataItem.type}});
      }
    }
  }
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import "../../../../static/css/fontLess.less";
  .recommond-box {
  ul {
    display: flex;
    align-items: center;
    position: relative;
  .px2rem(height, 340);
    overflow: hidden;
    justify-content: space-between;
    width:100%;
  .boss_list {
    flex: 1;
  .px2rem(height, 340);
    position: relative;
  .px2rem(margin-right, 24);
  a{
    display: block;
  .px2rem(height, 340);
  img {
    width: 100%;
  .px2rem(height, 340);
  .px2rem(border-radius,14);
  }

  .type_name {
    position: absolute;
  .px2rem(height, 65);
    width:100%;
  .px2rem(line-height,65);
    background:rgba(0,0,0,.5);
    color: #fff;
  .px2px(font-size, 26);
    left: 0;
    bottom:0;

  .px2rem(border-bottom-left-radius,14);
  .px2rem(border-bottom-right-radius,14);
    display: flex;
    align-items: center;
    justify-content: space-between;
  .price-img{
    .px2rem(margin-left,20);
  .px2rem(width,44);
  .px2rem(height,44);
  }
  .price-choice{
    .px2rem(margin-right,20);
  }
  .videoImg{
    display: inline-block;
    background:url('vedio@2x.png')  no-repeat  center ;
    background-size:100% 100%;
  }
  .audioImg{
    display: inline-block;
    background:url('audio@2x.png')  no-repeat  center ;
    background-size:100% 100%;
  }
  .articleimg{
    background:url('article@2x.png')  no-repeat  center;
    background-size:100% 100%;
  }
  }
  }

  }
  .boss_list:nth-child(2){
    margin-right:0 ;
  }
  }
  }
  .recommond-boxing{
  .px2px(padding-left, 20);
  .px2px(padding-right, 20);
  .px2px(padding-top, 5);
  }
  .title-box{
    border-bottom:1px solid #d9d9d9;
  .px2px(margin-bottom, 20);
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

  .see-more{
  .px2rem(font-size,26);
    text-align: center;
  .px2rem(height,85);
  .px2rem(line-height,85);
    border-top:1px solid #d9d9d9;
  .px2rem(margin-top,20);
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

