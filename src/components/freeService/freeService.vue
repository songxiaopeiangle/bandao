<template>
  <div>
    <div class="recommond-boxing">
      <div class="weui-flex more-box">
        <p class="weui-flex__item">
          <span class="left-border"></span>免费推荐
        </p>
        <div  >
          <div class="chakan weui-flex" @click="listenMore">
            查看更多
            <div class="rightBtn">
              <img  src="static/image/right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="weui-flex recommondd-box">
        <ul class="weui-flex__item">
          <li :class="{active:(activeName == item) || (activeName == index && index != 0) || (activeName == lastId && lastId != 0)}" v-for="(item , index) in datas" @click="playContent(item,index, item.id,$event)">
            <span ></span>
            {{item.uploadTitle}}
          </li>
          <audio id="audio"></audio>
        </ul>
        <div class="play-boxing">
          <img :src="isPlaying ? 'static/image/wplay@2x.png' : 'static/image/wstop@2x.png'" alt="" class="playCon" @click="playButton(lastId)">
        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
  export default {
    components: {

    },
    data() {
      return {
        datas:[],
        totalData:[],
        isPlaying: false,
        isA: false,
        click:false,
        lastId: -1,
        activeName: ''
      }
    },
    mounted: function () {
      this.init();
      this.$nextTick(function() {
        this.$http.get(globle.url+'freeRecommendsMore/41?token='+globle.tokens).then(function(res){
          this.totalData = res.data;
          console.log(this.totalData);
          for(let i = 0; i < 5; i++){
            this.datas.push(res.data[i]);
          }
        },function(res){
          console.log(res)
        })
      });
    },
    methods: {
      init() {
        this.audio = document.querySelector('#audio');
      },
      playButton(lastId) {
        if(!this.click){
          ++lastId;
          //console.log("lastId的值："+lastId);
          this.audio.src=this.datas[lastId].key;
          this.activeName=this.datas[lastId];
          //连续播放开始
          audio.addEventListener('ended', function(){
            if( audio.ended ){
              ++lastId;;
              // console.log(this.audioItem[++index].name);
              if(lastId == 4){
                this.audio.pause();
              }
              this.activeName = lastId;
              audio.src = this.datas[lastId].key;
              this.audio.play();
            }
          }.bind(this), false);
          //连续播放结束
          if(!this.isPlaying){
            this.audio.play();
            this.isPlaying = !this.isPlaying;
          }else{
            this.audio.pause();
            this.isPlaying = !this.isPlaying;
          }
        }else{
          if(!this.isPlaying){
            this.audio.play();
            this.isPlaying = !this.isPlaying;
          }else{
            this.audio.pause();
            this.isPlaying = !this.isPlaying;
          }
        }
      },
      playContent(item,index, id) {
        this.click = true;
        this.activeName = item;
        if (this.lastId == id) {
          if (!this.isPlaying) {
            this.audio.play();
            this.isPlaying = !this.isPlaying;
          } else {
            this.audio.pause();
            this.isPlaying = !this.isPlaying;
          }
        } else {
          //console.log(item.name);
          this.audio.src = item.key;
          this.audio.play();

          //连续播放开始
          audio.addEventListener('ended', function(){
            if( audio.ended ){
              ++index;
              if(index == item.length){
                index = 0;
              }
              this.activeName = index;
              audio.src = this.datas[index].key;
              this.audio.play();
            }
          }.bind(this), false);
          //连续播放结束
          this.isPlaying = true;
        }
        this.lastId = id;
      },
      listenMore(){
        this.$router.push({path:'/home/moreFree'});
      }
    }
  }


  function iosScrollBug(){}
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import "../../../static/css/fontLess.less";
  .recommondd-box{
    align-items:center;
    display: flex;
  li{
  .px2px(font-size,22);
    color:#333333;
  .px2rem(line-height,46);
  .px2rem(height,46);
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  span{
    display: inline-block;
  .px2rem(width,6);
  .px2rem(height,10);
    background:url('triangleB@2x.png') no-repeat center;
    background-size:100% 100%;
  .px2rem(margin-right,10);
  }
  }

  }
  .play-boxing{
  .px2rem(width,170);
  .px2rem(margin-left,30);
  .px2rem(height,170);
  }
  .playCon{
    /*.px2rem(margin-right,64);*/

    width: 100%;
    height: 100%;
  }
  .active{
    color:#b41c21!important;
    text-decoration: underline;
  span{
    background:url('triangleR@2x.png') no-repeat center !important;
    background-size:100% 100% !important;
  }
  }

  .recommond-boxing{
  .px2px(padding-left, 20);
  .px2px(padding-right, 20);
  .px2px(padding-top, 20);
  .px2rem(padding-bottom, 17)
  }
  .more-box{
    border-bottom:1px solid #e4e4e4;
  .px2px(margin-bottom, 10);
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
  }
  .chakan{
    color:#999999;
  .px2px(font-size, 24);
    /*background: url("right.png") no-repeat right center;*/
    /*background-size:12px 16px;*/

  }
  .rightBtn{
  .px2rem(width,11);
  .px2px(margin-left,6);
  img{
  .px2rem(width,11);
  .px2rem(height,16);

  }
  }
</style>
