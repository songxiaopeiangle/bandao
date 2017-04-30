<template>
  <div class="more_list">
    <div class="play_content">
      <div class="playBox">
        <div class="music-info">
          <span class="currentNum">{{i+1}}/</span><span class="allNum">{{$route.query.allAudio.length}}</span>
        </div>
        <div class="play_title">
          <p class="audio_title">{{$route.query.allAudio[i].uploadTitle}}</p>
          <p class="name_title">{{$route.query.allAudio[i].cateTitle}}</p>
        </div>
        <div class="play_info">
          <img src="" alt="">
        </div>
        <div class="state_choice">
          <img :src="checkedLike?'static/image/checkedLike@2x.png':'static/image/like@2x.png'" class="like" @click="checked($event)">
          <img :src="checkedCollect?'static/image/checkedCollect@2x.png':'static/image/collect@2x.png'"  class="collect" @click="checked($event)">
          <img  src="./share@2x.png" class="share" >
        </div>
      </div>
      <div class="music-play-box">
        <p class="music-time">
          <span class="current-time">{{audioCurrentTime}}</span>
          <span class="total-time">{{audioDuration}}</span>
        </p>
        <div class="progress-bar">
          <span class="progress-bar-move"></span>
          <span class="progress-ball"></span>
        </div>
        <div class="music-control-box">
          <img src="../playComponent/prev@2x.png" class="music-prev" @click="prevMusic">
          <div class="play-box-big">
            <div class="play-box-s" :class="isPlaying ? 'stop-control' : 'play-control'" @click="playItem(audioDuration,audioCurrentTime)"></div>
            <audio id="audio" ref="audioBox" :src="$route.query.allAudio[i].key"></audio>
          </div>
          <img src="../playComponent/next@2x.png" class="music-next" @click="nextMusic">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
  export default{
    components: {

    },
    data(){
      return {
        musicNum:1,
        checkedLike:false,
        checkedCollect:false,
        isPlaying:false,
        audioDuration:"",
        audioCurrentTime:"0:0",
        i:0,
        fenleiTitle:''
      }
    },
    mounted(){
      if(this.$route.query.audioIndex){
        this.i=this.$route.query.audioIndex;
      }
      if(this.$route.query.allAudio[this.i].collect=='true'){
          this.checkedCollect=true;
      }
      if(this.$route.query.allAudio[this.i].zan=='true'){
        this.checkedLike=true;
      }
      this.init();
    },
    methods:{
      init(){
        this.audio = document.querySelector('#audio');
        let hour,other1,minute,second;
        other1 = this.$route.query.allAudio[this.i].duration % 3600;//第一首音频的总时长，下标为0
        minute = Math.floor (other1 / 60);
        second = (other1 % 60).toFixed (0);
        this.audioDuration = minute + ":" + second;
      },
      checked(e){
        if(e.target.getAttribute('class')=='like'){
            if(this.checkedLike){
              this.checkedLike=false;
            }else{
              this.checkedLike=true;
            }
        }else if(e.target.getAttribute('class')=='collect'){
          if(this.checkedCollect){
            this.checkedCollect=false;
            console.log(this.$route.query.allAudio[this.i])
            this.$http.get(globle.url+'cancelCollect/13/'+this.$route.query.allAudio[this.i].id+'/1?token='+globle.tokens).then(function(res) {
              console.log(res.data);
            });
          }else{
            this.checkedCollect=true;
            this.$http.get(globle.url+'collect/13/'+this.$route.query.allAudio[this.i].id+'/1?token='+globle.tokens).then(function(res) {
              console.log(res.data);
            });
          }
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
              this.audioCurrentTime = "0:0";
              progressBarMove.style.width = 0 + "px";
              progressBall.style.left = -8 + "px";
              //sessionStorage.removeItem('currentTime');
              this.nextMusic();
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
          this.isPlaying = !this.isPlaying;
        }
      },
      prevMusic(){
        this.i--;
        if(this.i<=-1){
          this.i=this.$route.query.allAudio.length-1;
        }
        this.isPlaying=!this.isPlaying;
        sessionStorage.removeItem('currentTime');
        this.init();
        this.$nextTick(function(){
          this.playItem();
        })
      },
      nextMusic(){
        this.i++;
        if(this.i>=this.$route.query.allAudio.length){
          console.log(this.i);
          this.i=0;
        }
        this.isPlaying=!this.isPlaying;
       // sessionStorage.removeItem('currentTime');
        this.init();
        this.$nextTick(function(){
          this.playItem();
        })
      }
    }
  }
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import "../../../static/css/fontLess.less";
  .more_list{
    width: 100%;
    height:auto;

  }
  .play_content{
    width: 100%;
    height: auto;

  }
  .music-info{
  .px2px(font-size,24);
    color:#333333;
  .px2px(margin-bottom,20);
  }

  .playBox{
    text-align:center;
  .px2px(margin-top,70);
  .play_title{

  .audio_title{
  .px2px(font-size,28);
    color:#333333;
  .px2px(margin-bottom,12);
  }
  .name_title{
  .px2px(font-size,24);
    color:#999999;
  .px2px(margin-bottom,24);
  }
  }
  .play_info{
    margin:0 auto;
  .px2rem(width,346);
  .px2rem(height,424);
    background:#000;

  }
  .state_choice{
  .px2rem(height,40);
  .px2rem(width,270);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  .px2px(margin-top,48);
  .px2px(margin-bottom,79);
  .like{
  .px2rem(width,40);
  .px2rem(height,40);
  }
  .collect{
  .px2rem(width,46);
  .px2rem(height,41);
  }
  .share{
  .px2rem(width,39);
  .px2rem(height,42);
  }
  }
  }
  .play_control{
  .px2rem(width,636);
    margin:0 auto;
  .control_time{
    display:flex;
  .px2px(margin-bottom,20);
    justify-content:space-between;
  span{
    color:#999999;
  .px2px(font-size,20);
  }
  }
  .control_show{
    width: 100%;
    display: flex;
    align-items: center;
  .px2rem(height,24);
  .gray_control{
    width: 100%;
  .px2rem(height,6);
    background:#999999;

  }
  .play_state{
    /*position: relative;*/
    /*left: 0;*/
    /*top:center;*/
  }
  .red_control{
    width:20%;
  .px2rem(height,6);
    background:#b41c21;
  }
  .red_dot{
  .px2rem(width,24);
  .px2rem(height,24);
    border-radius: 50%;
    background:#b41c21;
  }
  }
  }
  .control_play_state{
    display:flex;
  .px2px(margin-top,80);
  .px2rem(width,490);
  .px2rem(height,140);
    margin:0 auto;
    justify-content:space-around;
    align-items:center;
  .pause_play{
    width:140px;
    height:140px;
    border-radius: 50%;
    border:2px solid #d9d9d9;
    background-size: 40px 46px;
    background:url('暂停@2x.png') no-repeat center center;
  }
  }

  .music-play-box{
  .px2rem(padding-bottom,50);
  .px2rem(padding-top,50);
  .px2rem(padding-left,26);
  .px2rem(padding-right,26);
  .music-prev{
  .px2rem(margin-left,75);
  .px2rem(margin-right,132);
  .px2rem(width,44);
  .px2rem(height,59);
    display: inline-block;
    vertical-align: middle;
  }
  .music-control-box{
  .px2rem(margin-top,50);
  }
  .play-box-big{
    display: inline-block;
  .px2rem(width,140);
  .px2rem(height,140);
    border-radius: 50%;
    background:#999;
    vertical-align: middle;
    position:relative;
  .px2rem(margin-right,132);
  .px2rem(margin-bottom,16);
  .play-box-s{
    position:absolute;
    border-radius: 50%;
  .px2rem(width,130);
  .px2rem(height,130);
    top:50%;
    left:50%;
  .px2rem(margin-left,-65);
  .px2rem(margin-top,-65);
  }
  .play-control{
    background:#fff url("playWhite@2x.png") no-repeat center;
  }
  .stop-control{
    background:#fff url("stopRed@2x.png") no-repeat center;
  }
  .music-state{
    position:absolute;
  .px2rem(width,36);
  .px2rem(height,46);
    top:50%;
    left:50%;
  .px2rem(margin-left,-18);
  .px2rem(margin-top,-23);

  }
  }
  .music-next{
  .px2rem(width,44);
  .px2rem(height,59);
    display: inline-block;
    vertical-align: middle;
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
</style>
