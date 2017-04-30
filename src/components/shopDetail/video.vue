<template>
  <div ref="video_box" class="video_box">
    <div class="buy-show">
      <div class="head-img">
        <img :src="datas.contentThumb" alt="" class="bg">
        <img :src="styleItem ? 'static/image/collect-sel@2x.png' : 'static/image/collect@2x.png' " class="collect-icon" @click="collect($event)">
        <button @click="showAddCart(item,$event)" v-if="datas.price != 0">购买</button>
      </div>

      <!--视频区块开始-->
      <div class="video-play-box-1" v-if="datas.type == 2">
        <video controls id="video" poster="static/image/demo-img.jpg" class="video-item" :src="datas.freeVideo">
        </video>
        <div class="video-masking" v-show="show"></div>
        <a class="play-img-box" @click="videoPlay" >
          <!--用的默认样式，不用这个了:class="isPlaying ? 'stopCon': 'playCon'"-->
        </a>
      </div>
      <!--视频区块结束-->
      <!--音频区块开始-->
      <div class="music-box" v-if="datas.type == 1">
        <div class="play-box-big">
          <img class="play-box-s" :src="isPlaying ? 'static/image/play@2x.png' : 'static/image/stop@2x.png'" @click="playItem(audioDuration,audioCurrentTime)">
          <audio id="audio" ref="audioBox" :src="datas.freeAudio"></audio>
          <!--<img src="./stopRed@2x.png" class="music-state">-->
        </div>
        <div class="right-progress-box">
          <p class="music-time">
            <span class="current-time">{{audioCurrentTime}}</span>
            <span class="total-time">{{audioDuration}}</span>
          </p>
          <div class="progress-bar">
            <span class="progress-bar-move"></span>
            <span class="progress-ball"></span>
          </div>
        </div>
      </div>

      <!--音频区块结束-->
      <p class="common-title">{{datas.title}}</p>
      <div class="title-state">
        <div>
          <span class="time">{{test(datas.updated_at)}}</span>
          <span class="skimmed">{{datas.views}}人看过</span>
        </div>
        <div @click="zan(datas)">

          <a href="javascript:;" class="zaning" :class="zans ? 'redzan' : 'nozan' "></a>
          <span class="agreeNum">{{zanNum}}人</span>

        </div>
      </div>
      <div class="title-content" v-if="buying" v-html="datas.desc">
        {{datas.desc}}
      </div>
      <div class="title-content" v-else>

      </div>
      <div v-if="buying">
        <p class="common-title">购买须知</p>
        <div class="buy-instruction">
          <p v-html="datas.notice">{{datas.notice}}</p>
          <!--<p>1、购买须知购买须知购买须知购买须知购买须知购买须知!</p>-->
          <!--<p>2、购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知</p>-->
          <!--<p>3、购买须知购买须知购买须知购买须知购购买须知购买须知购买须知购买须</p>-->
        </div>
      </div>
      <p class="common-title">精彩推荐</p>
      <div class="boxing-box" v-for="(item,index) in datas.artRecommend" >
        <div class="recommend-title">
          <div class="title-state">
            <p @click="detail(item)">{{item.title}}</p>
            <div @click="praising(index,item,$event)">
              <a href="javascript:;" class="zaning nozan"></a>
              <span class="agreeNum">{{item.zans}}</span>
            </div>
          </div>
        </div>
        <div class="recommend-content" v-html="item.desc">
          {{item.desc}}

        </div>
        <div class="type-item" v-if="item.type == 0">阅读文章</div>
        <div class="type-item" v-if="item.type == 1">音频播放</div>
        <div class="type-item" v-if="item.type == 2">视频播放</div>
      </div>

    </div>
    <!--弹出层开始-->
    <div class="click-buy-show" v-show="shows">
      <transition name="move">
        <div class="add-cart-mask">
          <div class="add-cart-box">
            <div class="goods-info">
              <div class="goods-img">
                <img :src="datas.contentThumb" alt="">
              </div><span class="goods-title">{{datas.title}}</span>
              <span class="goods-money">{{datas.price}}元</span>
            </div>
            <div class="total-money">共计：￥{{datas.price}}</div>
            <div class="btn-box">
              <a href="javascript:;" class="add-btn" @click="addCart(item,price)">转赠他人</a>
              <a href="javascript:;" class="buy-btn" @click="rightBuy(datas)">
                立即结算
              </a>
            </div>
            <img src="./x@2x.png" class="close" @click="close">
          </div>
        </div>
      </transition>

    </div>
    <!--弹出层结束-->
  </div>
</template>
<script type="text/ecmascript-6">
  import  BScroll from  'better-scroll';
  import globle from 'components/global';
  export default {
    props: {
      item: {
        type: Object
      }
    },
    data() {
      return {
        transferAddcart:{},
        selectBuy: false,
        showing:false,
        styleItem:false,
        praise:false,
        praiseLast:false,
        isPlaying: false,
        show: true,
        buying:true,
        scrollWatch: true,
        datas:[],
        audioDuration:"",
        audioCurrentTime:"0:0",
        storage:{},
        jingcai:[],
        shows:false,
        zans:false,
        zanNum:0
      }
    },
    mounted() {
      $(window).scrollTop(0);
      $(window).on('scroll',() => {
        if(this.scrollWatch){
        }
      });
      this.$nextTick(function() {
          var id=this.$route.query.itemId;
          var type=this.$route.query.itemType;
        this.$http.get(globle.url +'show/'+id+'/41/'+type+'?token='+globle.tokens).then(function (res) {
          this.datas = res.data;
          this.zanNum=this.datas.zans;

          console.log(this.zanNum);
          if(this.datas.collect=='true'){
            this.styleItem=true;
          }
          let hour1,other1,minute1,second1;
          hour1 = Math.floor(this.datas.audioDuration / 3600);
          other1 = this.datas.audioDuration % 3600;
          minute1 = Math.floor (other1 / 60);
          second1 = (other1 % 60).toFixed (0);
          this.audioDuration = minute1 + ":" + second1;
          this.$nextTick(function() {
            this.init();
          })
        }, function (res) {
          console.log(res);
        });


      });
    },
    destroyed (){
      this.scrollWatch = false;
    },
    methods: {
      rightBuy(item) {
        this.$router.push({path:'/shopCart',query:{detailData:item}});
      },
      detail(item){
        var id=item.id;
        var type=item.type;

        this.$http.get(globle.url +'show/'+id+'/41/'+type+'?token='+globle.tokens).then(function (res) {
          this.datas = res.data;
          console.log(res.data);

          if(this.datas.collect=='true'){
            this.styleItem=true;
          }
          let hour1,other1,minute1,second1;
          hour1 = Math.floor(this.datas.audioDuration / 3600);
          other1 = this.datas.audioDuration % 3600;
          minute1 = Math.floor (other1 / 60);
          second1 = (other1 % 60).toFixed (0);
          this.audioDuration = minute1 + ":" + second1;
          this.$nextTick(function() {
            this.init();
          })
        }, function (res) {
          console.log(res);
        });
      },
      zan(item){
        console.log(item);
        this.zans = !this.zans;
        if(this.zans){
          item.iszan='true';
          this.zanNum = parseInt(this.datas.zans);
          console.log(this.zanNum);
          this.zanNum += 1;
          this.$http.get(globle.url+'zan/41/'+item.id+'/1?token='+globle.tokens).then(function(res) {

          });

        }
        else{
          item.iszan='false';
          this.zanNum -= 1;
          console.log(this.zanNum);
          this.$http.get(globle.url+'cancelZan/41/'+item.id+'/1?token='+globle.tokens).then(function(res) {

          });

        }
      },
      praising(i,item,e){
        console.log(0);
        if($(e.target).hasClass("nozan")){
          item.iszan='true';
          this.$http.get(globle.url+'zan/41/'+item.id+'/1?token='+globle.tokens).then(function(res) {
            console.log(res.data)
          });
          $(e.target).removeClass("nozan").addClass("redzan");

        }
        else{
          item.iszan='false';
          this.$http.get(globle.url+'cancelZan/41/'+item.id+'/1?token='+globle.tokens).then(function(res) {
          });
          $(e.target).removeClass("redzan").addClass("nozan");
        }
      },
      showAddCart(item, event) {
        this.selectBuy=true;
        this.transferAddcart = item;
        this.shows = true;
      },
      closeAddCart() {
        this.selectBuy=false;
      },
      show(){
        this.showing = true;
        this.$nextTick(function(){
          if( !this.scroll ){
            this.scroll = new BScroll(this.$refs.video_box,{
              click:true,bounce:false
            })
          }else{
            this.scroll.refresh();
          }
        })
      },
      close () {
        this.shows = false;
      },
      collect(e){

        this.styleItem = !this.styleItem;
        if(this.styleItem){
          $(e.target).addClass('scale');
          setTimeout(function(){
            $(e.target).removeClass('scale');
          },500);
          this.$http.get(globle.url+'collect/41/'+this.datas.id+'/'+this.datas.type+'?token='+globle.tokens).then(function(res) {
            console.log(res.data);
          });
        }else{

          this.$http.get(globle.url+'cancelCollect/41/'+this.datas.id+'/'+this.datas.type+'?token='+globle.tokens).then(function(res) {
            console.log(res.data);
          });
        }
      },
      videoPlay() {
        let video = document.querySelector('#video');
        if(!this.isPlaying){
          video.play();
          this.show = false
          this.isPlaying = true;
        }else{
          video.pause();
          this.show = true;
          this.isPlaying = false;
        }
      },
      init(){
        this.audio = document.querySelector('#audio');
        if(document.querySelector('#audio')){
          this.audio.addEventListener("durationchange", function(){
            let hour,other1,minute,second;
            let id= JSON.parse(sessionStorage['timeInfo']).id;
            if(sessionStorage['timeInfo']){
              let progressBar = document.querySelector(".progress-bar");
              let progressBarMove = document.querySelector(".progress-bar-move");
              let progressBall = document.querySelector(".progress-ball");
              if(this.$route.query.id !==id){
                this.audio.currentTime=0;
              }else{
                this.audio.currentTime=JSON.parse(sessionStorage['timeInfo']).currentTime;
              }
              let percent = audio.currentTime/audio.duration ;
              progressBarMove.style.width = progressBar.offsetWidth * percent + "px";
              progressBall.style.left = progressBar.offsetWidth * percent - 8 + "px";
              let other2 = audio.currentTime % 3600;
              let minute1 = Math.floor(other2 / 60);
              let second1 = (other2 % 60).toFixed (0);
              this.audioCurrentTime =  minute1 + ":" + second1;

            }else{
              this.audioCurrentTime = this.audio.currentTime + ":0";
            }
          }.bind(this));
        }

      },
      playItem(audioDuration,audioCurrentTime){
        let progressBar = document.querySelector(".progress-bar");
        let progressBarMove = document.querySelector(".progress-bar-move");
        let progressBall = document.querySelector(".progress-ball");
        if(!this.isPlaying){
          audio.play();
          this.isPlaying = !this.isPlaying;
          audio.addEventListener("timeupdate", function(){
            let percent = audio.currentTime/audio.duration ;
            progressBarMove.style.width = progressBar.offsetWidth * percent + "px";
            progressBall.style.left = progressBar.offsetWidth * percent - 8 + "px";
            let other2 = audio.currentTime % 3600;
            let minute1 = Math.floor(other2 / 60);
            let second1 = (other2 % 60).toFixed (0);
            if(audio.ended){
              this.isPlaying = !this.isPlaying;
              this.audioCurrentTime = "0:0";
              progressBarMove.style.width = 0 + "px";
              progressBall.style.left = -8 + "px";
              sessionStorage.removeItem('timeInfo');
            }
            else{
              this.audioCurrentTime =  minute1 + ":" + second1;
            }
          }.bind(this),false);
          //进度条拖拽
          let startX;
          let endX;
          progressBall.addEventListener('touchstart',function(e){
            startX=e.touches[0].pageX;
          }, false);
          progressBall.addEventListener('touchmove',function(e){
            endX=e.touches[0].pageX;
            if(endX>=startX){
              this.audio.currentTime++;
            }else{
              this.audio.currentTime--;
            }
          }.bind(this), false);
          progressBar.onclick=function(e){
            let endLeft = e.offsetX-8;
            progressBarMove.style.width=endLeft+'px';
            progressBall.style.left=endLeft+'px';
            let percent=parseInt(progressBarMove.style.width)/parseInt(progressBar.offsetWidth);
            audio.currentTime=audio.duration*percent;
          }
        }
        else{
          audio.pause();
          this.storage={currentTime:this.audio.currentTime,id:this.$route.query.id};
          sessionStorage['timeInfo']=JSON.stringify(this.storage);
          this.isPlaying = !this.isPlaying;
        }
      },
      test(index){
        let timeing = new Date(index);
        return timeing.getMonth() + 1+ "月"+  timeing.getDate()+"日";
      }
    }
  }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../../static/css/fontLess";

  .zaning{
    display: block;
    .px2rem(width,20);
    .px2rem(height,20);
  }
  .redzan{
    background: url("./redZan@2x.png") no-repeat center;
  }
  .nozan{
    background: url("./agree@2x.png") no-repeat center;
  }
  .video-play-box-1{
  .px2rem(width,710);
    /*.px2rem(height,300);*/
  .px2rem(margin-bottom,50);
  .px2rem(margin-top,50);
    position:relative;
  .video-masking{
    height:100%;
    width:100%;
    background: rgba(0,0,0,.3);
    position:absolute;
    top:0;
    left:0;

  .px2rem(border-radius,10);
  }
  .play-img-box {
    position: absolute;
    display: block;
  .px2rem(height, 140);
  .px2rem(width, 140);
    top: 50%;
    left: 50%;
  .px2rem(margin-left, -70);
  .px2rem(margin-top, -70);
    border-radius: 50%;

  }
  .playCon{
    background: url("playWhite@2x.png") no-repeat center center;
  }
  .stopCon{
    background: url("stopRed@2x.png") no-repeat center center;
  }
  .video-item{
    width:100%;
    /*height: 100%;*/
    /*background: #000 url("demo-img.jpg") no-repeat 0 0;*/
    background-size: cover;
    border-radius: 10px;
  }

  }

  .video_box{
    width:100%;
    height:auto;
    background:#fff;
    overflow: hidden;
  }
  .fa-heart{
  .px2rem(font-size,60);
    color:#b41c21;
  .px2px(padding-right,20);
  }
  .fa-heart-o{
    color:#b41c21;
  .px2rem(font-size,60);
  .px2px(padding-right,20);
  }
  .fa-thumbs-up{
    color:#b41c21;
  }
  .buy-show{
  .px2rem(padding-left,20);
  .px2rem(padding-right,20);
  .px2rem(padding-bottom,57);
  .music-play-box{
  .px2rem(padding-bottom,50);
  .px2rem(padding-top,50);
  .px2rem(padding-left,26);
  .px2rem(padding-right,26);
  }
  .video-play-box{
  .px2rem(margin-bottom,50);
  .px2rem(margin-top,50);
  .px2rem(height,300);
    position: relative;
  .px2rem(border-radius,10);
    /*.video-mask{*/
    /*height:100%;*/
    /*width:100%;*/
    /*background: rgba(0,0,0,.3);*/
    /*position:absolute;*/
    /*top:0;*/
    /*left:0;*/
    /*.px2rem(border-radius,10);*/
    /*}*/
    /*.play-img-box{*/
    /*position: absolute;*/
    /*.px2rem(height,140);*/
    /*.px2rem(width,140);*/
    /*background: rgba(0,0,0,.6);*/
    /*top:50%;*/
    /*left:50%;*/
    /*.px2rem(margin-left,-70);*/
    /*.px2rem(margin-top,-70);*/
    /*border-radius: 50%;*/
    /*!*img{*!*/
    /*!*position: absolute;*!*/
    /*!*top:50%;*!*/
    /*!*left:50%;*!*/
    /*!*.px2rem(height,46);*!*/
    /*!*.px2rem(width,36);*!*/
    /*!*.px2rem(margin-left,-18);*!*/
    /*!*.px2rem(margin-top,-23);*!*/
    /*!*}*!*/
    /*}*/
  }
  .common-title{
  .px2rem(padding-bottom,10);
  .px2rem(font-size,26);
    color:#333;
    font-weight: bold;
    border-bottom:1px solid #d9d9d9;
  }
  .title-state{
  .px2rem(padding-bottom,10);
  .px2rem(font-size,20);
    color:#999;
    display:flex;
    justify-content:space-between;
    align-items:center;
  div{
    display: flex;
    align-items: center;
  }
  .time{
  .px2rem(margin-right,21);
  }
  .agreeNum,img{
    float:right;
  }
  img{
  .px2rem(margin-right,4);
  .px2rem(height,20);
  .px2rem(width,20);
  }
  }
  .title-content,.buy-instruction{
  .px2rem(font-size,22);
    color:#666;
    text-indent:2em;
  .px2rem(margin-bottom,40);
    line-height:150%;
    overflow: hidden;
  }
  .buy-instruction{
    text-indent:0;
  }
  .recommend-title{
    color:#333;
  .px2px(font-size,24);

  .title-state p{
  .px2px(font-size,24);
    color:#333;
  }
  .agreeNum,img{
    /*float:right;*/
    color:#999;
  .px2px(font-size,20);
  }


  }
  .recommend-content{
    color:#999;
  .px2px(font-size,22);
  }
  .recommend-content.read{
    margin-bottom:0;
    border: 0;
  }
  }
  .head-img{
    width:100%;
  .px2rem(height,240);
    position:relative;
  .px2px(margin-top,30);
  .px2px(margin-bottom,30);
  button{
  .px2px(font-size,26);
    color:#fff;
  .px2px(padding-left,30);
  .px2px(padding-right,30);
  .px2px(padding-top,12);
  .px2px(padding-bottom,12);
    background: #b41c21;
  .px2px(border-radius,10);
    border: none;
    position: absolute;
  .px2px(bottom,20);
  .px2px(right,20);
  }
  }
  .bg{
    width:100%;
    height:100%;
  .px2px(border-radius,10);
  }
  .collect-icon{
    position:absolute;
  .px2px(top,20);
  .px2px(right,20);
  .px2px(width,42);
  .px2px(height,39);
  }
  .collect-icon.img-border{
  .px2rem(width,42);
  .px2rem(height,40);
  .px2px(top,19);
    transition:all .5s;
    transform:scale(1);
  }
  .img-title,.img-classfiy{
  .px2px(font-size,26);
    color:#fff;
    font-weight: bold;
    position: absolute;
  .px2px(bottom,64);
  .px2px(left,20);
  }
  .img-classfiy{
  .px2px(font-size,24);
  .px2px(bottom,20);
    font-weight: normal;
  }

  .music-box{
  .px2rem(padding-left,30);
  .px2rem(padding-right,30);

  .px2rem(margin-bottom,20);
    border:1px solid #dbdbdb;
  .px2rem(border-radius,10);
    box-shadow: 0 0 1px rgba(0,0,0,.25);
    display: flex;
  .play-box-big{
  .px2rem(margin-right,30);
  .px2rem(padding-right,30);
  .px2rem(padding-bottom,10);
    border-right:1px solid #dbdbdb;
  .px2rem(height,75);
  .px2rem(width,33);
    position: relative;
  .play-box-s{
  .px2rem(width,33);
  .px2rem(height,39);
    position: absolute;
    top:50%;
  .px2rem(margin-top,-19.5);
  }
  }
  .music-time{
  .px2rem(font-size,20);
    color:#999;
  .px2rem(padding-left,4);
  .px2rem(padding-right,4);
  .total-time{
    float:right;
  }
  }
  .right-progress-box{
    flex: 1;
  .px2rem(padding-top,5);
  .progress-bar{
  .px2rem(height,6);
    background:#d9d9d9;
  .px2rem(margin-top,14);
    position:relative;
  .px2rem(border-radius,4);
  .progress-bar-move{
    position: absolute;
    background:#b41c21;
    height:100%;
    width:8px;
    top:0;
    left:0;
  .px2rem(border-radius,4);
  }
  .progress-ball{
    position: absolute;
    background:#b41c21;
  .px2rem(width,24);
  .px2rem(height,24);
    border-radius: 50%;
  .px2rem(top,-10);
    left:-8px;
  }
  }
  }

  }
  .type-item{
    color:#b41c21;
  .px2px(font-size,20);

    text-align: right;
  }
  .title-state img{
  .px2rem(margin-right,6);
  }
  .title-state p{
  .px2rem(width,520);
    overflow : hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .boxing-box{
  .px2rem(padding-top,10);
  .px2rem(padding-bottom,10);
    border-bottom:1px solid #999;
  }
  .click-buy-show{

    width: 100% ;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
  }
  .add-cart-mask{
    height:10000px;
    width: 100% ;
    background: rgba(0,0,0,.6);
  }

  .add-cart-box{
    position: fixed;
    left:0;
    bottom:0;
  .px2rem(height,480);
    width: 100%;
    background: #fff;
    z-index: 101;
  .goods-info{
  .px2rem(padding-top,30);
  .px2rem(padding-bottom,30);
  .px2rem(padding-left,20);
  .px2rem(margin-left,10);
    border-bottom:1px solid #d9d9d9;
  .px2rem(margin-right,10);
    position:relative;
  .goods-img{
  .px2rem(height,128);
  .px2rem(width,128);
    background:#ff0000;
  .px2rem(margin-right,18);
    display:inline-block;
  img{
    width: 100%;
    height: 100%;
  }
  }
  .goods-title{
  .px2px(font-size,26);
    font-weight: bold;
    color:#333;
    position: absolute;
  .px2rem(top,47);
  .px2rem(left,168);
  .px2rem(width,490);
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-money{
  .px2px(font-size,28);
    color:#ff0000;
    position: absolute;
  .px2rem(top,123);
  }
  }
  .total-money{
  .px2rem(padding-left,20);
  .px2rem(margin-left,10);
  .px2rem(font-size,26);
    color:#333;
    border-bottom:1px solid #d9d9d9;
  .px2rem(padding-top,20);
  .px2rem(padding-bottom,20);
  }
  .btn-box{
    position:absolute;
    bottom:0;
    left:0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
  .px2rem(line-height,78);
    align-items:center;
  .add-btn,.buy-btn{
  .px2rem(height,78);
    background:#ff9c00;
  .px2px(font-size,26);
    color:#fff;
    border-radius:0;
    border:0;
    -webkit-box-flex:1;
    -webkit-flex:1;
    -ms-flex:1;
    flex:1;
    text-align: center;
  }
  .buy-btn{
    background:#b41c21;
  }
  }
  .close{
    position: absolute;
  .px2rem(top,20);
  .px2rem(right,20);
  .px2rem(width,30);
  .px2rem(height,30);
  }
  }
  .scale{
    transform:scale(1.2);
  }
</style>
