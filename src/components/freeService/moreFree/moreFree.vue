<template>
  <transition name="move" >
  <div class="more_box" v-if="totalData.length > 0" ref="moreBox">
    <div>
      <div class="freeMore_box" >
        <!--<p class="free_title" >今天</p>-->
        <ul>
          <li class="free_content" v-for="(item,index) in totalData" ref="todayData" >
            <div class="free_left" @click="control(item,index,$event)" >
              <a href="javascript:;" class="title_box">
                {{item.uploadTitle}}
              </a>
              <a class="free_info">
                <span class="time_title">05:13</span>
                <span>{{item.cateTitle}}</span>
              </a>
            </div>
            <div class="free_right">
              <a  class="collect collection_box" @click="collect(index,item,$event)"></a>
              <a  class="praise praise_box" @click="praise(index,item,$event)"></a>
            </div>
          </li>
        </ul>
      </div>
      <!--<div class="freeMore_box" v-if="prevData.length>0">-->
      <!--<p class="free_title" >昨天</p>-->
      <!--<ul>-->
      <!--<li class="free_content" v-for="(item,index) in prevData" ref="prevData" >-->
      <!--<div class="free_left">-->
      <!--<a  class="title_box" @click="control(index)">-->
      <!--{{item.uploadTitle}}-->
      <!--</a>-->
      <!--<a class="free_info">-->
      <!--<span class="time_title">05:13</span>-->
      <!--<span>分类名</span>-->
      <!--</a>-->
      <!--</div>-->
      <!--<div class="free_right">-->
      <!--<a href="javascript:;" class="collect collection_box" @click="collect(index,$event)"></a>-->
      <!--<a href="javascripts:;" class="praise praise_box" @click="praise(index,$event)"></a>-->
      <!--</div>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
    </div>
  </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
  export default{
    data(){
      return {
        totalData:[],
        prevData:[],
        collected:[],
        praised:[]
      }
    },
    mounted(){

      this.$nextTick(function() {
        this.$http.get(globle.url+'freeRecommendsMore/41?token='+globle.tokens).then(function(res){
          this.totalData = res.data;

          this.$nextTick(function(){
              this.$refs.moreBox.style.height=document.body.clientHeight+'px';
            for(let i=0;i<this.totalData.length;i++){

              if(this.totalData[i].collect=='true'){
               // console.log( document.querySelectorAll('.free_content')[i]);
                 $($('.free_content')[i]).find('.collect').removeClass("collection_box").addClass("collection_red");
              }
              if(this.totalData[i].zan=='true'){
               // console.log( document.querySelectorAll('.free_content')[i]);
                $($('.free_content')[i]).find('.praise').removeClass("praise_box").addClass("praise_red");
              }
            }
          });
        },function(res){
          console.log(res)
        })
          // let timestamp = Date.parse(new Date());
          // timestamp = timestamp / 1000;
          //console.log(new Date().toDateString()); //当前时间 Mon Apr 17 2017
          //for(let i = 0; i < this.totalData.length; i++){
          //console.log(this.totalData[i].created_at);
//          let diff = timestamp - this.totalData[i].created_at;
//           if(diff/3600<=24){
//                this.todayData.push(this.totalData[i])
//               for(let z=0;z<this.todayData.length;z++){
//                 //this.todayData[i].created_at=
//               }
//           }else if(diff/3600 <= 48){
//             console.log(timestamp/3600);
//             this.prevData.push(this.totalData[i]);
//           }
          // }

        },function(res){
          console.log(res)
      });
    },
    methods: {
      control(item,index){
        this.$router.push({path:'/listening/playComponent',query:{audioIndex:index,allAudio:this.totalData}});
//          let collect=$(target).next().find('.collect');
//
//          let praise=$(target).next().find('.praise');
//          if(collect.hasClass('collection_red')&& praise.hasClass('praise_red')){
//            this.$router.push({path:'/listening/playComponent',query:{audioIndex:index,allAudio:this.totalData,collected:true,praised:true}});
//          }else if(collect.hasClass('collection_red')&& !praise.hasClass('praise_red')){
//            this.$router.push({path:'/listening/playComponent',query:{audioIndex:index,allAudio:this.totalData,collected:true,praised:false}});
//          }else if(!collect.hasClass('collection_red')&& praise.hasClass('praise_red')){
//            this.$router.push({path:'/listening/playComponent',query:{audioIndex:index,allAudio:this.totalData,collected:false,praised:true}});
//          }else{
//            this.$router.push({path:'/listening/playComponent',query:{audioIndex:index,allAudio:this.totalData,collected:false,praised:false}});
//          }
      },
      collect(i,item,e){
        if($(e.target).hasClass("collection_box")) {
          item.collect='true';
          this.$http.get(globle.url+'collect/13/'+item.id+'/1?token='+globle.tokens).then(function(res) {

          });
          $(e.target).removeClass("collection_box").addClass("collection_red");
          //let date=$($(e.target).parents('ul')[0]).prev()[0].innerHTML;
        //  this.collected.push({index: i});
       //   sessionStorage['collectedData'] = JSON.stringify(this.collected);
          //sessionStorage['collectedData']=i;
        }
        else{
          item.collect='false';
          this.$http.get(globle.url+'cancelCollect/13/'+item.id+'/1?token='+globle.tokens).then(function(res) {
          });
          $(e.target).removeClass("collection_red").addClass("collection_box");
        }
      },
      praise(i,item,e){
        if($(e.target).hasClass("praise_box")){
            item.zan='true';
          this.$http.get(globle.url+'zan/41/'+item.id+'/1?token='+globle.tokens).then(function(res) {
          });
          $(e.target).removeClass("praise_box").addClass("praise_red");

        }
        else{
          item.zan='false';
          this.$http.get(globle.url+'cancelZan/41/'+item.id+'/1?token='+globle.tokens).then(function(res) {
          });
          $(e.target).removeClass("praise_red").addClass("praise_box");
        }
      }

    }
  }
</script>
<style lang="less" scoped>
  @import "../../../../static/css/fontLess.less";
  .more_box{
    width: 100%;
    background: #f5f4f4;
  }
  .freeMore_box {
    width: 100%;
    height: auto;
  ul{
  .px2rem(padding-left,20);
  .px2rem(padding-right,20);
    background: #ffffff;
  }
  .free_title {
  .px2rem(padding, 20);
    width: 100%;
    background: #f5f4f4;
    color: #333333;
  .px2px(font-size, 24);
  }
  .free_content{
    display: flex;
    justify-content: space-between;
    align-items:center;
  .px2rem(padding-top,20);
  .px2rem(padding-bottom,20);
    width:100%;
    position: relative;
    border-bottom:1px solid #d9d9d9;
  .free_left{
  .px2rem(width,467);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  .title_box{
  .px2px(font-size,26);
    display: block;
    color:#333333;
  }
  }
  }
  }
  .free_info{
    display:flex;
  .time_title{
  .px2rem(margin-right,40);
  }
  span{
  .px2px(font-size,22);
    color:#999999;
  }
  }
  .free_right{
    display:flex;
  .pinglun{

  }
  .collection_box{
    display: block;
  .px2rem(margin-right,34);
  .px2rem(height,30);
  .px2rem(width,32);
    background: url("collect-gray@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .collection_red{
    display: block;
  .px2rem(margin-right,34);
  .px2rem(height,30);
  .px2rem(width,32);
    background: url("collect-red@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .praise_box{
  .px2rem(width,30);
    display: block;
  .px2rem(margin-right,34);
  .px2rem(height,30);
    background: url("praise-gray@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  .praise_red{
  .px2rem(width,30);
    display: block;
  .px2rem(margin-right,34);
  .px2rem(height,30);
    background: url("praise-red@2x.png") no-repeat center;
    background-size: 100% 100%;
  }
  }
  .move-enter-active{
    animation-name:move-in;
    animation-duration: .5s;
  }
  .move-leave-active{
    animation-name:move-out;
    animation-duration:.5s;
  }
  @keyframes move-in {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes move-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }

</style>
