<template>
  <div>
    <!--<transition name="router-fade" mode="out-in">-->
      <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>
  import globle from 'components/global';
  export default {
    created(){
      this.$http.get(globle.url+'isfirst?token='+globle.tokens).then(function(res){
        console.log(res.data);
        if(res.data.status === true){
          console.log(1);
          this.$router.push({path:'/indexMake'});
        }else{
          console.log(2);
          this.$router.push({path:'/home'});
        }

      },function(res){
        console.log(res)
      });
    },
  }

</script>
<style lang="less">
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
