<template>
  <div class="moreRecommond" v-show="showFlags">
    <div class="back" @click="back">
       返回
     </div>
    <div>
      <h2>今天</h2>
      <ul>
        <li v-for="(item, index) in keys">
          <p>{{item.title}}</p>
          <div>
            <div>
              <span>{{item.time}}</span>
              <span>{{item.description}}</span>
              <span class="collectBtn" @click="collectData(item)" :class="{red:show == item}">{{item.collect}}</span>
              <span class="praiseBtn" @click="praiseData(item)" :class="{blue:praise == item}">{{item.praise}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

      <div>
           <h2>昨天</h2>
           <ul>
             <li v-for="(item, index) in keys">
               <p>{{item.title}}</p>
               <div>
                 <div>
                   <span>{{item.time}}</span>
                   <span>{{item.description}}</span>
                   <span class="collectBtn">{{item.collect}}</span>
                   <span class="praiseBtn">{{item.praise}}</span>
                 </div>
               </div>
             </li>
           </ul>
         </div>

  </div>
</template>
<script type="text/ecmascript-6">
   const ERR_OK = 0;
  export default {
   props: {

    },
   data() {
       return {
          keys: '',
          show: '',
         praise: '',
          showFlags : false
        }
     },
   mounted() {
         this.$http.get('/api/today').then( (response) => {
            response = response.body;
            if(response.errno === ERR_OK) {
              this.keys = response.data.content;

            }
            else{
              console.log("数据请求不到")
            }
          });
          this.$http.get('/api/yestoday').then( (response) => {
            response = response.body;
            if(response.errno === ERR_OK) {
            console.log(response.data.content);
              this.keys = response.data.content;
            }
            else{
              console.log("数据请求不到")
            }
          })
      },

   methods: {
    showClick() {
       this.showFlags = true;
    },
     back() {
      this.showFlags = false;
    },
     collectData(item) {
       console.log("收藏");
       console.log(item);
       this.show = item;
     },
     praiseData(item) {
       console.log("点赞");
       this.praise = item;
     }
   }
  };
</script>
<style>
.moreRecommond{
  width:100%;
  position:fixed;
  left:0;
  top:0;
  bottom:55px;
  background:#fff;
}
  .red{
    color:red;
  }
  .blue{
    color:blue;
  }
</style>
