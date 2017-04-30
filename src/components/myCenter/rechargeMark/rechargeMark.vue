<template>
  <div class="rechargeMark-box">
   <div v-for="(item,index) in datas">
     <div class="rechargeMark-item" v-for="(item1,index) in item.articles">
       <p>{{item1.title}}</p>
       <span>{{test(item1.created_at)}}</span>
       <span>￥{{item1.price}}</span>
     </div>
   </div>
   </div>
</template>

<script type=“text/ecmascript-6“>
  import globle from 'components/global';
  export default {
    data() {
      return{
        datas:[]
      }
    },
    mounted() {
       this.$nextTick(function(){
        this.$http.get(globle.url+'bought/39?token='+globle.tokens).then(function(res){
          this.datas = res.data;
          console.log(this.datas);
         // console.log(this.datas[this.i].articles[index].articleId);
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
       test(index){
        let timeing = new Date(index);
        return timeing.getMonth() + 1+ "月"+  timeing.getDate()+"日";
      }
    }
  }
</script>
<style lang="less">
  @import "../../../../static/css/fontLess.less";
  .rechargeMark-box{
    .px2px(padding,20);
     padding-top:0 !important;
    .rechargeMark-item {
      .px2px(padding-bottom, 20);
      .px2px(padding-top, 20);
      position: relative;
      border-bottom:1px solid #d9d9d9;
      p {
        .px2px(font-size, 26);
        color: #333;
      }
      span:nth-child(2) {
        display: block;
        .px2px(font-size, 22);
        color: #999;
      }
      span:nth-child(3){
        position:absolute;
        .px2px(font-size,28);
        bottom:50%;
        right:0;
        .px2px(margin-bottom,-14);
      }
    }
  }
</style>
