<template>
  <div class="listen_page">
    <div class="userInfo">
      <div class="userImage">

      </div>
      <p class="userName">小欢子</p>
    </div>
    <p class="problem">现在想听点什么呢？</p>
    <div class="listenType">
      <!--<a href="javascript:;" class="span-listen" @click="spanListen">跨界听</a>-->
      <!--<a href="#" class="concentrate-listen">专注听</a>-->
    </div>
    <div class="listenTime">
      <div>
        <a href="javascript:;" @click="spanListen1(15)">
          <img src="./15分钟@2x.png" alt="">
        </a>
      </div>
      <div class="time-box">
        <a href="javascript:;"  @click="spanListen1(30)">
          <img src="./30分钟@2x.png" alt="">
        </a>
        <a href="javascript:;" @click="spanListen1(60)">
          <img src="./60分钟@2x.png" alt="">
        </a>
        <a href="javascript:;" @click="spanListen1(90)">
          <img src="./90分钟@2x.png" alt="">
        </a>
      </div>
    </div>

    <v-loadingBox ref="child" :musicShuzu="musicShuzu" :stateLength="stateLength" :singerLength="singerLength"></v-loadingBox>

      <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import footer from 'components/Footer/Footer';
  import loadingBox from 'components/listening/loadingBox/loadingBox';
  import globle from 'components/global';
  const ERR_OK = 0;
 export default {
   components:{
     "v-footer":footer,
     "v-loadingBox":loadingBox
   },
  data() {
    return {
      datas:[],
      singer:'',
      intervalid1: '',
      musicShuzu:[],
      singerLength:'',
      stateLength:'',
      audioTotalBox:0,
      shuzus:[],
      totalMusic:[],
      totalTime:[]
    }
  },
   created(){

   },
  mounted: function () {
    let height=document.documentElement.clientHeight;
     $('.loading-box').css('height',height);
  },
  methods: {
    init(time){
      this.$refs.child.show();
      let audio = document.getElementsByClassName("audio");
      let bars = document.getElementsByClassName("bar");

      this.singerLength = time.length;
      for(let i = 0; i < this.singerLength; i++ ){
        this.musicShuzu.push(time[i].key);//音频的src
        this.totalTime.push(parseInt(time[i].duration));//音频的总时长
        this.audioTotalBox += this.totalTime[i];
      }
      for(let z = 0; z < this.totalTime.length; z++){
          let barBox = document.querySelector("#bar-box");
         this.$nextTick( function() {
           bars[z].style.width = barBox.clientWidth * (this.totalTime[z] / this.audioTotalBox).toFixed(2) + "px";
           bars[z].style.webkitAnimationDelay = 0.5 * ( z+ 1) + "s";
         })
        if( z == this.totalTime.length -1 ){
          this.$nextTick( function(){
            bars[z].style.marginRight = 0 + "px";
            bars[z].addEventListener("webkitAnimationEnd",function(){
              //精选中和几条音频之间的切换
              setTimeout(function(){
                this.stateLength = this.datas.msg;
              }.bind(this),1000)
              //在最后一个动画完成后自动进入到下一个页面
              setTimeout(function(){
                this.$router.push({path:'/listening/playComponent',query:{allAudio:time}});
              }.bind(this),3000)
            }.bind(this),false);
          })
        }
      }
    },
    spanListen1(num) {

        this.$http.get(globle.url+'getAudioByTime/'+ num +'/41?token='+globle.tokens).then(function(res){
          this.datas = res.data;
          this.totalMusic = res.data.audios;
            this.init(this.totalMusic);
            //调用初始化函数
             console.log(this.totalMusic);

        },function(res){
          console.log(11)
        })

    }
  }
 };
</script>
<style lang="less">
  @import "../../../static/css/fontLess.less";
.listen_page{
  .px2rem(padding-top,46);
  .px2rem(padding-bottom,51);
}
 .userInfo{
   display: flex;
   flex-direction: column;
   align-items: center;
   border-bottom:1px solid #d9d9d9;
   .px2px(margin-bottom,38);
 }
  .userImage{
    .px2rem(width,165);
    .px2rem(height,165);
    border-radius: 50%;
    background:#ccc;
  }
  .userName{
    .px2px(font-size,24);
    color:#333;
    .px2px(margin-top,24);
    .px2px(margin-bottom,46);
  }
  .problem{
    text-align: center;
    .px2px(font-size,28);
    font-weight: bold;
  .px2px(margin-bottom,38);
  }
.listenType{
  display: flex;
  justify-content: space-around;
}
.time-box{
  a{
  .px2px(margin-top,38);
  }
}
  .listenType a{
    .px2rem(width,242);
    .px2rem(height,86);
    .px2rem(line-height,86);
    border:1px solid #b41c21;
    .px2px(font-size,28);
    border-radius: 20px;
    text-align: center;
    color:#b41c21;
  }
  .listenTime{
  .px2px(margin-bottom,62);
  }
  .listenTime img{
    width:100%;
    height: 100%;
  }
  .listenTime :first-child a{
    display: block;
  .px2rem(width,242);
  .px2rem(height,242);
    margin: 0 auto;
    .px2px(margin-top,60);
  .px2px(margin-bottom,40);
  }
.listenTime :last-child{
  display: flex;
  justify-content: space-around;

}
.listenTime :last-child a{
  display: block;
  .px2rem(width,178);
  .px2rem(height,177);
  }
.listenTime :last-child a img{
  width:100%;
  height: 100%;
  display: block;
}
  @keyframes fill {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @-moz-keyframes fill {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @-webkit-keyframes fill {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .bar{
    opacity: 0;
    animation: fill 0.5s linear forwards;
    -webkit-animation: fill 0.5s linear forwards;
    -moz-animation: fill 0.5s linear forwards;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
