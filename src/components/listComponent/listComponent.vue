<template>
    <div class="boxing" >
      <!--slider开始-->
      <div class="classfiy_content">
        <div class="adivertiseBox">
          <div class="fixed_ui_box" id="wrapper" ref="wrapper">
            <ul :style="getWidth" ref="slideUl" style="left:0">
              <li class="adv_item"  v-for="(item,index) in datas"  @click="control(index,$event)" >
                {{item.cateTitle}}
              </li>
            </ul>
          </div>
          <div class="slider-right-box" @click="moveSlide">
            <img src="./right.png">
          </div>
        </div>
      </div>
      <!--slider结束-->

      <v-listPart1 ref="child" class="gap"  :num="i">

      </v-listPart1>

      <v-footer></v-footer>
    </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import footer from 'components/Footer/Footer';
  import listPart1 from 'components/listComponent/listPart1/listPart';
  import globle from 'components/global';
  export default{
    props:{

    },
    components: {
      "v-listPart1":listPart1,
      "v-footer":footer
    },
    data() {
      return{
        activeName: '',
        i: -1,
        show:false,
        slideNum:0,
        datas:[],
        dataing:[]
      }
    },
    computed: {
      getWidth () {
        return 'width:' + this.datas.length *px2rem(248)+'rem'
      }
    },
    mounted() {
      let myScroll = new IScroll(this.$refs.wrapper,{scrollX: true, scrollY: false,click:true,bounce:false});
        this.$http.get(globle.url+'getArticlesById/'+this.$route.query.id+'/2/huan/more?token='+globle.tokens).then(function(res){
          this.datas = res.data;
         this.$refs.child.test(this.datas[0].id);
            this.$nextTick(function(){$(document.querySelectorAll('.adv_item')[0]).addClass('active')});
        },function(res){
          console.log(res)
        })

    },
    methods: {
      control(index,e) {
        this.i = index;
        this.$refs.child.test(this.datas[index].id);
        $(e.target).toggleClass('active');
        $(e.target).siblings().removeClass('active');
      },
      childrenControl(item1) {
        this.activeName = item1;
      },
      enter() {
        this.show = true;
      },
      leave() {
        this.show = false;
      },
      moveSlide() {
        this.slideNum= this.slideNum-200;
        let bodyWidth=document.body.clientWidth;
        let ulWidth=parseInt(rem2px(this.$refs.slideUl.style.width));
        let stopNum= this.slideNum*-1+bodyWidth;
        if( stopNum > ulWidth+200){
          this.slideNum= 0;
        }
        this.$refs.slideUl.style.transform="translate("+this.slideNum+"px,0px) translateZ(0px)";
        this.$refs.slideUl.setAttribute('style','-webkit-transform: translate('+this.slideNum+'px,0px) translateZ(0px)');
      },
      receiveId(id){

      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../static/css/fontLess.less";
  .boxing{
    background: #fff;
    height: auto;
    width: 100%;
    overflow: hidden;
  }
  .adivertiseBox{
    border-bottom:1px solid #d9d9d9;
  .px2rem(height,64);
    width:100%;
    position:relative;
  .fixed_ui_box{
    width:90%;
  }
  .slider-right-box{
    position:absolute;
    top:0;
    right:0;
  .px2rem(padding-right,22);
  .px2rem(padding-left,22);
  .px2rem(padding-top,24);
  .px2rem(padding-bottom,22);
    z-index: 100;
    background:#fff;
  img{
    display: block;
  .px2rem(width,12);
  .px2rem(height,16);
  }
  }
  }
  .adivertiseBox ul{
    display: flex;
    align-items: center;
    color: #333333;
  .px2px(font-size, 26);
    position:absolute;
    left:0;
    transition: all .5s !important;
  .adv_item{
    flex-shrink: 0;
  .px2rem(height,64);
  .px2rem(line-height,64);
  .px2rem(padding-right, 20);
  .px2rem(padding-left, 20);

  }
  .adv_item.active{
    color:#b41c21;
  }
  }
  .active1{
    color:#b41c21;
  .px2px(padding-bottom, 18);
    /*border-bottom:5px solid #b41c21;*/
  }
  .active2{
    color:#b41c21;
  .px2px(padding-bottom, 18);
    border-bottom:5px solid #b41c21;
  }
  .active{
    color:#b41c21;
    text-decoration: none;
  }
  .back-transition {
    transition: transform .5s ease;
  }
  .back-enter{
    transform: translate(100%,0);
  }
  .back-leave {
    transform: translate(-100%,0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
