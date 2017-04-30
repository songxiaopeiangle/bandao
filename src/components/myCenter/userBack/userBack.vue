<template>
    <div class="user-back-box" ref="userBack">
      <div class="score knowledge">
        知识内容评分
        <ul>
          <li v-for="n in 5" ><img src="./gStar@2x.png" alt="" @touchstart="selectedStar1(n,$event)" class="starImg"></li>
        </ul>
      </div>
      <div class="score designer">
       页面设计评分
        <ul>
          <li v-for="n in 5"><img src="./gStar@2x.png" alt="" @touchstart="selectedStar2(n,$event)"></li>
        </ul>
      </div>
      <div class="score interaction">
        交互体验评分
        <ul>
          <li v-for="n in 5" ><img src="./gStar@2x.png" alt="" @touchstart="selectedStar3(n,$event)"></li>
        </ul>
      </div>
      <textarea   class="user-advise" name="userAdvise" ref="userAdvise" :class="{fail:adviseFailShow}" @focus="focus($event)">输入您的建议，我们会不断的优化和改善。</textarea>
      <input type="text" value="请留下您的联系方式或者邮箱，方便我们给您回馈处理的结果！" class="user-phone" :class="{fail:phoneFailShow}" name="userPhone" ref="userPhone" @focus="focus($event)" >
      <button class="submit" @touchstart="testPhone">提交</button>

        <div class="success-box animated bounceInDown" v-show="succShow">
          <img src="./finish@2x.png" alt="">
          <p>反馈成功</p>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
  import globle from 'components/global';
  export default{
    data(){
      return {
        bodyHeight:0,
        succShow:false,
        adviseFailShow:false,
        phoneFailShow:false,
        emailFailShow:false,
        counting:[],
        knowledge:0,
        page:0,
        interactive:0,
        message:''
      }
    },
    mounted() {
      this.bodyHeight=document.body.clientHeight;
      this.$refs.userBack.style.height=this.bodyHeight+'px';
    },
    methods: {
        selectedStar1(n,e) {
          let target=$(e.target).parents('ul').find('img');
          let count = 0;
           for(let i=0;i<n;i++){
             target[i].src="static/image/oStar@2x.png";
            count += 1;
           }
          this.knowledge = count;
          console.log("我是3："+this.knowledge);
           for(let j=n;j<=4;j++){
             target[j].src="static/image/gStar@2x.png";
             console.log("灰色")
           }
        },
      selectedStar2(n,e) {
        let target=$(e.target).parents('ul').find('img');
        let count = 0;
        for(let i=0;i<n;i++){
          target[i].src="static/image/oStar@2x.png";
          count += 1;
        }
        this.page = count;
        for(let j=n;j<=4;j++){
          target[j].src="static/image/gStar@2x.png";
        }
      },
      selectedStar3(n,e) {
        let target=$(e.target).parents('ul').find('img');
        let count = 0;
        for(let i=0;i<n;i++){
          target[i].src="static/image/oStar@2x.png";
          count += 1;
        }
        this.interactive = count;
        for(let j=n;j<=4;j++){
          target[j].src="static/image/gStar@2x.png";
        }
      },
        testPhone() {
            let phone=this.$refs.userPhone.value;
          console.log(!/^1(3|4|5|7|8)\d{9}$/.test(phone))
            if(this.$refs.userAdvise.value==''||this.$refs.userAdvise.value=='输入您的建议，我们会不断的优化和改善。'){
              this.adviseFailShow=true;
              this.$refs.userAdvise.value="您还没有填写建议哦"
            }else if((/^1(3|4|5|7|8)\d{9}$/.test(phone)) || (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(phone))){

              let that = this;
              //发送数据
              $.ajax({
                type:'POST',
                url:globle.url+'userFeedback?token='+globle.tokens,
                data:{'uid':39,'content':this.$refs.userAdvise.value,'contact':this.$refs.userPhone.value,'knowledge':this.knowledge,"page":this.page,"interactive":this.interactive},
                success:function(data){
                  if(data.status == 200){
                    that.succShow=true;
                      setTimeout(function(){
                        that.$router.push({path:'/myCenter'});
                      },2000)
                  }
                  else{
                    return false;
                  }
                },
                error:function(){
                  console.log("数据有误")
                }
              })
              this.phoneFailShow=false;
              this.adviseFailShow=false;
            }else{
              this.phoneFailShow=true;
              this.$refs.userPhone.value="您输入的手机号码有误，请重新输入"
//
            }
        },
        focus(e){
           e.target.value='';
           if($(e.target).hasClass('user-phone')){
             this.phoneFailShow=false;
           }else if($(e.target).hasClass('user-advise')){
             this.adviseFailShow=false;
           }else{
               this.emailFailShow=false;
           }
        }
    }
  }
</script>
<style lang="less" >
  @import "../../../../static/css/fontLess.less";
  .user-back-box{
    background:#f5f4f4;
    width:100%;
    .px2rem(padding-top,90);
    .score{
      .px2px(font-size,28);
      color:#333;
      font-weight: bold;
      display: flex;
      .px2rem(padding-left,86);
      .px2rem(padding-right,86);
      align-items:center;
      .px2rem(margin-bottom,34);
      ul{
        flex: 1;
        display: flex;
      .px2rem(margin-left,50);
        li{
          flex:1;
          img{
            .px2rem(width,40);
            .px2rem(height,40);
          }
        }
      }
    }
    .user-advise{
      outline:none;
      border:1px solid #d9d9d9;
      .px2rem(width,576);
      .px2rem(height,274);
      .px2px(font-size,24);
      color:#999;
      margin:0 auto;
      display: block;
      .px2rem(padding,28);
      .px2rem(margin-top,44);
      .px2rem(border-radius,10);
    }

    .user-advise:focus{
      border:1px solid #ff9900;
      color:#999;
    }
    .user-phone,.user-email{
      outline: none;
      .px2px(font-size,24);
        color:#999;
      .px2rem(padding-right,28);
    .px2rem(padding-left,28);
      border:1px solid #d9d9d9;
      .px2rem(width,576);
      .px2rem(height,74);
      margin:0 auto;
      display: block;
    .px2rem(margin-top,50);
    .px2rem(border-radius,10);
    }
    .user-phone:focus,.user-email:focus{
      border:1px solid #ff9900;
      color:#999;
    }
    .fail{
      border:1px solid #ff0000;
      color:#fa7a7a;
    }
    .submit{
      .px2rem(width,690);
      .px2px(height,70);
      .px2px(font-size,32);
      color:#fff;
      background:#b41c21;
      border:none;
      .px2rem(border-radius,10);
      outline: none;
      margin:0 auto;
      display: block;
    .px2rem(margin-top,70);
    }
    .success-box{
      .px2rem(width,300);
      .px2rem(height,252);
      border:1px solid #efefef;
      .px2rem(border-radius,10);
      background: #fff;
      position:absolute;
      top:50%;
      left:50%;
    .px2rem(margin-top,-126);
      .px2rem(margin-left,-150);
      box-shadow: 0 0 8px #efefef;
      img{
        .px2rem(width,80);
        .px2rem(height,80);
       display: block;
        margin:0 auto;
        .px2rem(margin-top,58);

      }
      p{
        text-align: center;
        color:#333;
        .px2px(font-size,26);
      .px2rem(margin-top,30);
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
