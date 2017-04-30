<template>
  <div class="products-recommond">
    <div class="weui-flex title-box">
      <p class="weui-flex__item">
        <span class="left-border"></span>{{bossTitle[28].title}}</p>
      <div class="changeAnother weui-flex" @click="huan($event)">

        <img  src="./change@2x.png" alt="" class="rightBtn"/>

        换一换
      </div>
    </div>
    <div class="activity-list">

      <div  v-for="(item,index) in datas" class="activity-item" @click="detail(item)">
        <a href="javascript:;">
          <img :src="item.key" alt="">
          <div class="shadow_box">
            <div class="shadow_text">
              {{item.title}}
            </div>
            <div class="price-box">
              <div>
                <img src="./download@2x.png" alt="" v-if="item.isattachment == 1">
                <div v-else></div>
                <span class="activity-price" v-if="item.price == 0">免费</span>
                <span class="activity-price" v-else>{{item.price}}元</span>
              </div>
            </div>
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
  import globle from 'components/global';
  import moreClassify from 'components/home/moreClassify/moreClassify';
  export default{
    props:{
      bossTitle :{

      }
    },
    components:{
    },
    data() {
      return {
        activeName: '',
        i:-1,
        datas:[],
        topicId:-1
      }
    },
    mounted() {
      this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[28].id+'/2?token='+globle.tokens).then(function(res){
        this.datas = res.data;
        console.log(res.data);
        this.topicId=this.bossTitle[28].id;
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
        this.$http.get(globle.url+'getArticlesById/'+this.bossTitle[2].id+'/2/huan?token='+globle.tokens).then(function(res){
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
  .px2px(padding-top,10);
  .px2px(padding-bottom,10);
  .px2rem(height,45);
  .px2rem(line-height,45);
  p{
    color:#333;
    font-weight: bold;
  .px2px(font-size, 28);
  .px2rem(height,44);
  .left-border{
    display: inline-block;
  .px2rem(width,4);
  .px2rem(height,20);
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
  .px2rem(height,280);
  a{
    display: block;
    height:100%;
  }
  img{
    width:100%;
  .px2rem(height,280);
  .px2rem(border-radius,15);
  }
  .shadow_box{
    position: absolute;
    top:0;
    left:0;
  .px2rem(height,280);
    width: 100%;
    background: rgba( 0 ,0 ,0 ,.4);
  .px2rem(border-radius,15);

  .shadow_text{
  .px2rem(padding,20);
  .px2px(font-size,26);
    color:#fff;
    text-align: center;
  }
  p{
  .px2px(font-size,24);
    color:#666;
  }

  .price-box{

    margin-bottom:0;
    position: absolute;
    bottom:20px;
    right:0;
    width: 100%;
  div{
  .px2rem(padding-left,20);
  .px2rem(padding-right,20);
    display: flex;
    align-items: center;
    justify-content: space-between;
  .activity-price{
    color:#ff0000;
  .px2px(font-size,28);

  }
  img{
  .px2rem(width,44);
  .px2rem(height,44);
  }
  }

  }
  }

  }
  .activity-item:nth-child(3){
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
