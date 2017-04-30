<template>
    <div>
      <p class="lawer-title">法律声明</p>
      <p class="lawer-content" v-for="item in datas">
       {{item.content}}
      </p>
    </div>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
    export default{
        data(){
            return {
              datas:[]
            }
        },
        mounted() {
          this.$nextTick(function() {
            this.$http.get(globle.url+'lawStatement?token='+globle.tokens).then(function(res){
              //console.log(res.data.statements);
              this.datas = res.data.statements;
            },function(res){
              console.log(res)
            })
          });
        }
    }

</script>
<style lang="less">
  @import "../../../../static/css/fontLess.less";
  .lawer-title{
    .px2px(font-size,28);
    font-weight: bold;
    text-align: center;
    .px2rem(padding-top,38);
    color: #333333;
    .px2rem(padding-bottom,10);
  }
  .lawer-content{
    .px2px(font-size,26);
    color:#333333;
    .px2rem(padding-left,30);
    .px2rem(padding-right,30);
    text-indent: 2em;
  }
</style>
