<template>
  <div class="adv_content waterfalls wrapper">
    <ul id="waterfalls-left" class="container animated fadeInLeft">
    </ul>
    <ul id="waterfalls-right" class="container animated fadeInRight">
    </ul>
    <ul id="items" class="container">
      <li v-for="(item,index) in datas" class="adv-li">
        <a href="javascript:;" @click="detail(item)">
          <div class="adv_list">
            <span class="adv_img" >
              <img :src="item.key" alt="">
              <span class="read_count">50人观看</span>
            </span>
            <div class="adv_title weui-flex">
              <span class="title-item">{{item.title}}</span>
              <span class="type_list audio_icon">
                 <img src="static/image/audioIcon@2x.png" alt="" v-if="item.type == 1">
                 <img src="static/image/videoIcon@2x.png" alt="" v-if="item.type == 2">
                 <img src="static/image/readIcon@2x.png" alt="" v-if="item.type == 0">
              </span>
            </div>
            <div class="adv_con">
              <span>
                  {{item.title}}
              </span>
            </div>
            <div class="adv_bar">
              <div v-if="item.price == 0">
                免费
              </div>
              <div v-else>
                {{item.price}}元
              </div>
              <div>
                <span  class="buy_btn" v-if="item.isorder == 1">已购</span>
                <span  class="buy_btn" v-else>购买</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import globle from 'components/global';
  export default {
    data() {
      return{
        datas:[]
      }
    },
    mounted(){
      this.$nextTick(function(){
      //this.addItem();
      })

    },
    methods:{
      test(test){
        this.$nextTick(function(){
          this.$http.get(globle.url+'getArticlesById/'+test+'?token='+globle.tokens).then(function(res){
            this.datas = res.data;
            let wrapper = document.querySelector('.wrapper');
            let container = document.querySelector('.container');
            let that = this;
//            document.addEventListener('scroll', function() {
//              let scrollTop = wrapper.scrollTop;
//              if(document.body.scrollTop +900 >= container.clientHeight){
//                console.log("ok");
//              that.$nextTick(function(){
//                that.$http.get(globle.url+'getArticlesById/'+test+'?token='+globle.tokens).then(function(res){
//                 // console.log(res.data);
//                  for(let i = 0; i < res.data.length; i++){
//                    if(this.datas.length > 2* res.data.length){
//                      return false;
//                    }
//                    this.datas.push(res.data[i]);
//                  }
//                  //console.log(this.datas);
//                  let _this = this,$l = $("#waterfalls-left"),$r = $("#waterfalls-right");
//                  setTimeout(function () {
//                    $("#items").children("li").each(function (index, val) {
//                      this.addItem(val);
//                    }.bind(this));
//                  }.bind(this), 0);
//
//                },function(res){
//                  console.log(res)
//                })
//              })
//              }
//            })

            setTimeout(function () {
              $("#items").children("li").each(function (index, val) {
                let $li = $(val).find("li").first();
//               // console.log(val);
                $li.on("load", function(val) {
                 console.log(this);
                this.addItem();
                }.bind(this))
                this.addItem(val);
              }.bind(this));
            }.bind(this), 0);
          },function(res){
            console.log(res)
          })
        });
      },
      addItem(val){
       let $l = $("#waterfalls-left"),$r = $("#waterfalls-right");
        if($l.height() <= $r.height()){
          $l.append($(val));
          $('#items').html('');
        }else{
          $r.append($(val));
          $('#items').html('');
        }
      },
      detail(item){
        this.$router.push({path:'/home/videoDetail',query:{itemId:item.id,itemType:item.type}});
      }
    }
  };
</script>
<style lang="less" scoped>
  @import "../../../../static/css/fontLess.less";
  #waterfalls-left,#waterfalls-right{
    float:left;
  }
  .adv_content{
    width:100%;
    height:auto;
    background: #f5f4f4;
  .px2rem(padding-top,10);
  .px2rem(padding-bottom,97);
    overflow: hidden;
    .px2rem(min-height,520);
  }
  .adv_content ul{
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: flex-start;*/
    .px2rem(padding-left,20);
    /*.px2rem(padding-right,20);*/
  }
  /*.adv-li:nth-child(2n){*/
    /*margin-right: 0;*/
  /*}*/
  .adv_content ul li{
    height:auto;
    border:1px solid #d9d9d9;
    background: #ffffff;
  .px2px(border-radius, 10);
  .px2rem(padding-left, 20);
  .px2rem(padding-right, 20);
  .px2rem(margin-bottom, 10);
    .px2rem(width,302);
    /*.px2rem(margin-right,20);*/
  }
  .adv_content ul li img{
    width:100%;
    height:100%;
  }
  .adv_img{
    display: block;
  .px2rem(width, 302);
  .px2rem(height, 190);
  .px2px(margin-top,20);
  .px2px(margin-bottom,10);
    margin:0 auto;
    position: relative;
  }
  .read_count{
  .px2px(width,122);
  .px2rem(height,24);
  .px2rem(line-height,24);
    text-align: center;
    background: #424548;
    position: absolute;
  .px2rem(right, 14);
  .px2rem(top, 14);
  .px2px(font-size, 20);
  .px2px(border-radius, 10);
    display: block;
    color:#fff;
  }
  .adv_title{
  .px2px(font-size, 28);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .title-item{
      .px2rem(width,260);
      overflow : hidden;
      text-overflow: ellipsis;
      white-space:nowrap;

    }
  }
  .adv_con{
  .px2px(font-size, 24);
  .px2rem(margin-top, 5);
  .px2rem(margin-bottom, 20);
    span{
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .adv_list{
    margin: 0 auto;
  }
  .adv-list .adv_title,.adv_con{
  .px2rem(width, 298);
    margin-left: auto;
    margin-right:auto;
  }
  .adv_bar{
  .px2px(margin-bottom, 18);
    display: flex;
    justify-content:space-between ;
  .px2px(font-size, 28);
    color:#ff0000;
  }
  .buy_btn{
    color:#ffffff;
    display: block;
  .px2rem(width, 78);
  .px2rem(height, 42);
  .px2rem(line-height, 42);
    text-align: center;
    border-radius:2px;
  .px2rem(border-radius, 10);
    background:#ff0000;
  .px2px(font-size, 26);
  }
  .audio_icon{
  .px2rem(width, 21);
  .px2rem(height, 20);
  .px2rem(line-height, 20);
  img{
    width:100%;
    height: 100%;
  }
  }
</style>
