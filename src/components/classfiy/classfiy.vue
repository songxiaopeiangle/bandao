<template>
  <div>
    <div class="classfiyBox"></div>
    <div class="classfiy_content">
      <div class="adivertiseBox" id="wrapper" ref="wrapper">
        <ul ref="advUl">
          <li class="adv_item" ref="advItem" v-for="(item,index) in datas"  @click="control(index,$event)">
            <a href="javascript:;" class="gap" :class="{borderitem: (i == index) || (i == -1 && index == 0)}">
              {{item.cateTitle}}
            </a>
          </li>
        </ul>
      </div>
      <!--<transition name="back">-->
        <!--<router-view ></router-view>-->
      <!--</transition>-->
      <v-Rating ref="child"></v-Rating>
    </div>
    <v-footer></v-footer>
  </div>

</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import footer from 'components/Footer/Footer';
  import globle from 'components/global';
  import Rating from 'components/classfiy/rating/rating';
  export default {
    components:{
      "v-footer":footer,
      "v-Rating":Rating
    },
    data(){
      return {
        activeName: '',
        i: -1,
        show: false,
        datas:[],
        classifyTitle:[]
      }
    },
    created() {

    },
    computed: {

    },
    mounted() {


      //请求数据

        this.$http.get(globle.url+'showFirstCates?token='+globle.tokens).then(function(res){
          this.datas = res.data.categories;
          console.log(this.datas);
          this.$nextTick(function() {
          this.getWidth();
          let myScroll = new IScroll(this.$refs.wrapper,{scrollX: true, scrollY: false,click:true,bounce:false});
          });
            this.$refs.child.test(this.datas[0].id);
        },function(res){
          console.log(res)
        })


    },
    methods: {
      control(index,e) {
        this.i = index;
        this.show = true;
        this.$refs.child.test(this.datas[index].id);

      },
      childrenControl(item1) {
        this.activeName = item1;
      },
      getWidth () {
          let li=this.$refs.advItem;
          let ul=0;
          console.log(li)
          for(let i=0;i<li.length;i++){
            ul+=li[i].clientWidth;
          }
          this.$refs.advUl.style.width=ul+'px';

      }
    }
  };
</script>
<style lang="less" scoped>
  @import "../../../static/css/fontLess.less";
  .classfiy_content{

  }
  .classfiyBox{
    width:100%;
  .px2rem(height, 340);
    background: #808080;
    overflow: hidden;
  }
  .tip_box{
  .px2px(width,260);
    height:auto;
    z-index: 30;
    position:absolute;
    left:10px;
  .px2rem(top,70);
  .bg_top{
    width: 13px;
    height: 12px;
    background: url("top.png");
    position: absolute;
    top:0;
    left:33px;
  }
  }
  .tip_content{
    width: 100%;
    border:1px solid #d9d9d9;
    background:#f8f8f8;
    margin-top: 10px;
  .px2px(width,220);
  .px2px(padding,20);
  li{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
  }
  .list_item{
  .px2px(font-size,22);

  }
  }
  .adivertiseBox{
    overflow: hidden;
  }
  .adivertiseBox ul{
    display: flex;
    align-items: center;
    color: #333333;
  .px2px(font-size, 26);
    background: #ffffff;
  .px2px(padding-top, 30);
  .adv_item{
  .px2px(padding-bottom, 28);
    flex-shrink: 0;
    position:relative;
    overflow:hidden;
    .px2px(font-size,28);
  .gap{
  .px2px(padding-right, 20);
  .px2px(padding-left, 20);
  .px2px(padding-bottom, 30);
  }
    .borderitem{
      border-bottom:5px solid #b41c21;
    }
  }
  }
  .active1{
    color:#b41c21;


  }
  .active2{
    color:#b41c21;
  .px2px(padding-bottom, 18);
    border-bottom:5px solid #b41c21;
  }
  .active{
    color:#b41c21;
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

</style>
