<template>
  <div class="buying_box">
    <div class="buyContent" v-for="(item,index) in datas">
      <div class="asset_value weui-flex" @click="controlFn(index)">
        <div class="weui-flex__item">
          {{item.cateTitle}}
        </div>
        <!--<span :class="(i == index) || (index == 0 && i == -1) ? 'active' : 'arrow'" class="fold_content" ></span>-->
        <div class="downBtn" v-if="(i == index) || (index == 0 && i == -1)">
          <img  src="static/image/down@2x.png" alt="" />
        </div>
        <div class="rightBtn" v-else>
          <img  src="static/image/right.png" alt="" />
        </div>

      </div>
        <div v-show="(i == index) || (index == 0 && i == -1)" class="control_box animated" >

          <ul class="all_type" v-for="(item1,index) in item.articles">
            <a href="javascript:;" @click="detail(item1)">

                <li>
                  <div class="expert_content weui-flex">
                    <div class="expert_content_left weui-flex">
                      <a href="" class="expert_img"></a>
                      <a href="" class="expert_name">{{item1.professorName}}</a>
                    </div>
                    <div class="rightBtn1">
                      <img  src="static/image/right.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <p class="expert_title">{{item1.title}}</p>
                    <div class="show_info">
                      <div>
                        <a href="">{{test(item1.created_at)}}</a>
                        <a href="">16666人已购</a>
                      </div>
                      <div>
                        <a href="">点赞</a>
                        <a href="">{{item1.zans}}</a>
                      </div>
                    </div>
                    <a href="javascript:;" class="expert_detail">
                      <img :src="item1.indexThumbUrl" alt="">
                    </a>
                    <p class="types">
                      <a href="javascript:;">{{item1.title}}</a>
                    </p>
                  </div>
                </li>

            </a>
          </ul>

        </div>

    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import footer from 'components/Footer/Footer';
  import globle from 'components/global';
  export default {
    components:{
      "v-footer":footer
    },
    data(){
      return{
        btnShow: true,
        i: -1,
        f:-1,
        datas:[],
        shuzu:[],
        time:-1
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.$http.get(globle.url+'bought/39?token='+globle.tokens).then(function(res){
          this.datas = res.data;
          console.log(this.datas);
          //console.log(this.datas[this.i].articles[index].articleId);
          for(let i = 0;i < this.datas.length; i++){
           for(let j = 0; j < this.datas[i].articles.length; j++){
             this.time = new Date(this.datas[i].articles[j].created_at);
             //this.shuzu.push(this.time.getMonth() + 1+"月"+ this.time.getDate()+"日");
           }
          }
        },function(res){
          console.log(res)
        })
      });
    },
    methods:{
      controlFn(index) {
        this.i = index;
      },
      detail(item){
        console.log(item);
       this.$router.push({path:'/home/videoDetail',query:{itemId:item.articleId,itemType:item.type}});
        //this.$router.push({path:'/home/videoDetail',query:{itemData:this.datas[index]}});
      },
      test(index){
        //console.log(index);
        let timeing = new Date(index);
        return timeing.getMonth() + 1+ "月"+  timeing.getDate()+"日";
      }
    }
  };
</script>
<style lang="less" scoped>
  @import "../../../static/css/fontLess.less";
  @keyframes fat {
    0% {
      height: 100%;
    }
    100%{
      height: 0;
    }
  }
  .move-enter-active{
    animation-name:fat;
    animation-duration: .5s;
  }
  .move-leave-active{
    animation-name:spread-out;
    animation-duration:.5s;
  }
  .active{
    background: url("down@2x.png") no-repeat center;
    background-size: 16px 12px;
  }
  .arrow{
    background: url("../../../static/image/right.png") no-repeat center;
  }
  .buying_box{
    width: 100%;
    height: auto;
    background: #f5f4f4;
  .px2rem(padding-bottom,97);
  }
  .buyContent{
    background: #f5f4f4;
    width: 100%;
  }
  .margin_part{
  .px2rem(padding-top,29);
  }
  .control_box{
  .px2rem(padding-bottom,29);
    opacity: 1;
  }
  .all_type{
  .px2rem(padding-top,29);
  }
  .all_type li{
  .px2rem(padding-left,20);
  .px2rem(padding-right,20);
    background: #fff;
    border-radius: 20px;
  .px2rem(margin-left,20);
  .px2rem(margin-right,20);
    height: auto;
    width: auto;
  }
  .asset_value{
  .px2rem(height,68);
    background:#fff;
  .px2px(font-size,26);
  .px2rem(line-height,68);
  .px2rem(padding-left,20);
  .px2rem(padding-right,20);
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    justify-content: space-between;

  }
  .expert_content{
    display: flex;
    border-bottom:1px solid #d9d9d9;
    justify-content: space-between;
    width: 100%;
  .px2rem(height,80);
  .px2rem(line-height,80);
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .expert_img{
  .px2rem(width,60);
  .px2rem(height,60);
    border-radius: 50%;
    background:#000;
    display: block;
  .px2rem(margin-right,20);
  }
  .expert_name{
  .px2px(font-size,28);
  }
  .fold_content{
  .px2px(font-size,28);
    display: block;
  .px2rem(width,20);
  }
  .expert_content_left{
    display: flex;
    align-items: center;
  }
  .expert_title{
  .px2px(font-size,28);
  .px2rem(margin-top,20);
  .px2rem(margin-bottom,14);
  }
  .show_info{
    display: flex;
    justify-content: space-between;
  .px2px(font-size,20);
  }
  .expert_detail{
    width: 100%;
  .px2rem(height,312);
  .px2rem(margin-top,20);
    display:block;
  .px2rem(margin-bottom,20);
  img{
    width: 100%;
    height: 100%;

  }
  }
  .types{
  .px2px(font-size,22);
    text-align: right;
  .px2rem(padding-bottom,20);
  a{
    color:#b41c21;
  }
  }

  .rightBtn{
  .px2rem(width,11);
  .px2rem(height,80);
  img{
  .px2rem(width,11);
  .px2rem(height,16);
  }
  }
  .rightBtn1{
  .px2rem(width,11);
  img{
  .px2rem(width,11);
  .px2rem(height,16);
    display: block;
  }
  }
  .downBtn{
  .px2rem(width,16);
  .px2rem(height,80);
  img{
  .px2rem(width,16);
  .px2rem(height,12);

  }
  }
</style>
