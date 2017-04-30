<template>
  <div class="products-recommond">
    <div class="weui-flex title-box">
      <p class="weui-flex__item">
        <span class="left-border"></span>{{bossTitle[31].title}}</p>
      <div class="changeAnother weui-flex" @click="huan($event)">
        <img  src="./change@2x.png" alt="" class="rightBtn"/>
        换一换
      </div>
    </div>
    <div class="activity-list">
      <div  v-for="(item,index) in datas" class="activity-item ">
        <a href="javascript:;" @click="detail(item)">
          <img :src="item.key" alt="">
          <div class="shadow_box">
            <div class="shadow_text">
              {{item.title}}
            </div>
            <!--<span>{{item.title}}</span>-->

          </div>
        </a>
      </div>
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
  //  import listCommon from "components/listCommon/listCommon";
  import moreClassify from 'components/home/moreClassify/moreClassify';
  import globle from 'components/global';
  export default{
    props:{
      bossTitle :{

      }
    },
    components:{
    },
    data() {
      return {
        datas:[],
        wonderfulTitle:'',
        wonderfulClass:[],
        activeName: '',
        i:-1,
        topicId:-1
      }
    },
    mounted(){
      this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[31].id+'/2?token='+globle.tokens).then(function(res){
        this.datas = res.data;
        this.topicId=this.bossTitle[31].id;
      },function(res){
        console.log(res)
      })
    },
    methods: {
      huan(e){
        $(e.target).find('img').css('animation','rotat 1s');
        setTimeout(function(){
          $(e.target).find('img').css('animation','0');
        },1000)
        this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[31].id+'/2/huan?token='+globle.tokens).then(function(res){
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
  }
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import "../../../../static/css/fontLess.less";
  .products-recommond{
  .px2rem(padding,20);
    padding-bottom:0;
    padding-top:0;
  .title-box{
    border-bottom:1px solid #d9d9d9;
  .px2px(padding-top,20);
  .px2px(padding-bottom,20);
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
  .activity-list{
  .px2rem(margin-top,20);
    display:flex;

  .activity-item{
    flex: 1;
    position: relative;
  .px2rem(margin-right,25);
  .px2rem(height,222);
  a{
    display: block;
  }
  img{
    width:100%;
  .px2rem(height,222);
  .px2rem(border-radius,15);
  }
  .shadow_box{
    position: absolute;
    top:0;
    left:0;
  .px2rem(height,182);
    background: rgba( 0 ,0 ,0 ,.4);
  .px2rem(border-radius,15);
  .px2rem(padding,20);

  .shadow_text{
  .px2px(font-size,26);
    color:#fff;
    font-weight: bold;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  span{
  .px2px(font-size,22);
    color:#5c5561;
  .px2rem(margin-top,20);
    display: block;
  .px2rem(height,66);
  .px2rem(line-height,22);
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  }

  }
  .activity-item:nth-child(2){
    margin:0;
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
