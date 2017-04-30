<template>
  <div  class="bannerBox">
    轮播详情页{{$route.params.id}}
    <!--<div>{{dataItem.title}}</div>-->
    <!--<div>{{dataItem.href}}</div>-->
    <!--<div>{{dataItem.url}}</div>-->
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      dataItem: {
       type: Object
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {

    }
  }
</script>
<style>
.bannerBox{
  width:100%;
  height:auto;
  background:#fff;

}
</style>
