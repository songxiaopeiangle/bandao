<template>
  <div>
    <div class="browse-item" v-for="item in datas">
      <div class="browse-img-box">
        <img :src="item.key" >

        <img src="./audioicon@2x.png" >
      </div>
      <div class="item-right-box">
        <div class="box-right">
          <p class="browse-title">{{item.title}}

          </p>
          <div class="browse-classfiy">{{item.cateTitle}}</div>
          <div class="expert-name">{{item.professor}}</div>
        </div>

        <span>{{time(item.created_at)}}</span>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import listComponent from 'components/listComponent/listComponent';
  import globle from 'components/global';
  export default{
    props:{
      bossTitle :{

      }
    },
    data() {
      return{
        datas:[],
        collectData:[]
      }
    },
    mounted() {

      this.$http.get(globle.url+'myCollect/41?token='+globle.tokens).then(function(res){
        this.datas = res.data;
        console.log(this.datas)

      },function(res){
        console.log(res)
      })

    },
    methods: {
      time(data){
        let timeing = new Date(data);
        console.log(data)
        return timeing.getMonth() + 1+ "月"+  timeing.getDate()+"日";
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../../../static/css/fontLess.less";
  .browse-item{
  .px2px(padding,20);
    border-bottom:1px solid #d9d9d9;
    display: flex;
    .browse-img-box{
      position: relative;
      img:nth-child(1){
      .px2rem(width,168);
      .px2rem(height,192);
      .px2px(border-radius,10);
        display: block;
      }
      img:nth-child(2){
        position: absolute;
      .px2px(top,14);
      .px2px(right,14);
      .px2rem(width,25);
      .px2rem(height,20);
      }
    }
    .item-right-box{
    .px2px(margin-left,20);
    .px2rem(height,192);
      flex: 1;
      position: relative;
      .box-right{

        .browse-title{
        .px2px(font-size,26);
          color:#333;
        .px2rem(margin-bottom,20);
        .px2px(line-height,40);
          .px2rem(max-width,430);
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        img{
          position:absolute;
          right:0;
          top:50%;
          .px2rem(width,28);
          .px2rem(height,38);
        }
      }
      span{
        position:absolute;
        top:0;
        right:0;
        color:#999;
        .px2px(font-size,22);
      }
  .browse-classfiy{
    position:absolute;
  .px2rem(padding-top,5);
  .px2rem(padding-bottom,5);
  .px2px(font-size,20);
  .px2px(border-radius,10);
    color:#fff;
    background:#999;
  .px2rem(padding-left,15);
  .px2rem(padding-right,15);
    top:45%;
    .px2rem(max-width,400);
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }
  .expert-name{
    position:absolute;
  .px2px(font-size,22);
    display: block;
    color:#999;
    bottom:0;
    .px2rem(width,430);
  }
  }
  }
</style>
