<template>

    <transition name="move" >
      <!--<router-link to="/home" @click="back">返回</router-link>-->
      <div class="search-box" v-show="showFlag">
        <div  id="searchBar">
          <form>
            <div class='searchBox'>
              <div id="searchInput">
                <input type="search" v-model="search"  placeholder="搜索关键字" />
              </div>
              <img class="search-con" src="./search@2x.png" alt="">
              <a href="javascript:" class="search-bar__cancel-btn" id="searchCancel" @click="searchCancle">取消</a>
            </div>
          </form>

        </div>
        <div class="bg_gray"></div>
        <div>
          <div class="history_record">
            <div>历史记录</div>
            <a class="del" href="">
              <img src="./rubish@2x.png" alt="">
            </a>
            <!--<h3>热门搜索</h3>-->
            <!--<ul class="hotSearch">-->
            <!--<li v-for="(item, index) in keys">{{keys[index]}}</li>-->
            <!--</ul>-->
          </div>
          <div class="history_item">
            <ul class="item_box">
              <li>
                <a href="" class="record_item">文字文文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字字文下文字文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字文字文文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字文字文文字文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字文字文文字文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">字文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字文字文字</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg_gray"></div>
        <div class="hot_recommonds">
          <div class="history_record">
            <div>
              <img src="./hot@2x.png" alt="">
              热门推荐</div>
            <!--<h3>热门搜索</h3>-->
            <!--<ul class="hotSearch">-->
            <!--<li v-for="(item, index) in keys">{{keys[index]}}</li>-->
            <!--</ul>-->
          </div>
          <div class="history_item">
            <ul class="item_box">
              <li>
                <a href="" class="record_item">文字文字文字文字问下文字文字文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">文文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字文字文文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字文文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字文字文文字文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">字文字文字</a>
              </li>
              <li>
                <a href="" class="record_item">文字文字字文字</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="showHistory" class="historySearch">
          <!--<h3>历史记录</h3>-->
          <!--<ul>-->
          <!--<li v-for="(item, index) in history">{{history[index]}}</li>-->
          <!--</ul>-->
        </div>
      </div>
    </transition>

</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import footer from 'components/Footer/Footer';

  const ERR_OK = 0;
  export default {
    components:{
      "v-footer":footer
    },
    props: {

    },
    data() {
      return {
        showFlag : true,
        showHistory: false,
        search: '',
        keys: '',
        history: [],
        index: 0,
        item: ''
      }
    },
    created() {
//      this.$nextTick( () => {
//        this.initScroll();
//      } )
      console.log("这是搜索页的id："+this.$route.params.id);
       this.$http.get('/api/keys').then( (response) => {
          response = response.body;
          if(response.errno === ERR_OK) {
            this.keys = response.data;
          }
          else{
            console.log("数据请求不到")
          }
        })
    },
    mounted: function(){

    },
    methods: {
//      initScroll() {
//        this.historyScroll = new BScroll(this.$refs.historyWraper,{})
//      },
      back() {
//        this.router.push({
//          path:'/home'
//        });
        this.showFlag = false;


      },
      searchCancle() {
        this.search = '';
      },
      searchContent() {
        localStorage.setItem(this.item, this.search);
        this.history.push(localStorage.getItem(this.item));
        console.log(this.history);
        this.index++;
        this.showHistory = true;

      }
    }
  };
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../../static/css/fontLess.less";
  .search-box {
    width: 100%;
    background: #fff;
    position: relative;

    #searchBar {
      .px2rem(height, 84);
      width: 100%;
      .px2rem(line-height, 84);
      margin-bottom: 15px;
      form {
        display: flex;
        align-items: center;
      }
    }
    .search-bar__cancel-btn {
      display: block;
      .px2px(font-size, 28);
      color: #fff;
      .px2rem(padding-right, 20);
    }

    .searchBox {
      /*.px2rem(height,86);*/
      /*.px2rem(line-height,86);*/
      height: auto;
      width: 100%;
      background-color: #b41c21;
      text-align: center;
      .px2rem(padding-top, 8);
      .px2rem(padding-bottom, 8);
      display: flex;
      align-items: center;
      .search-con {
        position: absolute;
        .px2rem(left, 38);
        .px2rem(top, 30);
        z-index: 10;
        .px2rem(width, 36);
        .px2rem(height, 36);
      }
    }
    #searchInput {
      .px2rem(width, 640);
      .px2rem(height, 70);
      background: #fff;
      margin: auto;
      border-radius: 10px;
    }
    #searchInput input {
      width: 100%;
      height: 100%;
      display: block;
      border: none;
      .px2px(font-size, 28);
      .px2rem(padding-left, 68);
    }

    .bg_gray {
      width: 100%;
      height: 10px;
      background: #f5f4f4;
    }
    .history_record {
      width: auto;
      .px2rem(height, 72);
      .px2rem(margin-top, 10);
      border-bottom: 1px solid #f5f4f4;
      display: flex;
      justify-content: space-between;
      .px2rem(padding-left, 20);
      .px2rem(padding-right, 20);
      align-items: center;
      color: #999999;
      .px2px(font-size, 26);
      .del {
        display: block;
      }
    }
    .history_item {
      padding: 20px;
      .item_box {
        display: flex;
        flex-wrap: wrap;
        li {
          border: 1px solid #999999;
          .px2rem(margin-right, 20);
          .px2rem(margin-bottom, 16);
          border-radius: 10px;
          .record_item {
            .px2px(font-size, 24);
            .px2rem(line-height, 62);
            .px2rem(height, 62);
            display: block;
            .px2rem(padding-left, 24);
            .px2rem(padding-right, 24);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .px2rem(max-width, 680);
            color: #333333;
          }
        }
      }
    }

    .hotSearch {
      display: flex;
    }
    .bottom_div {
      width: 100%;
      .px2rem(height, 500);
      background: #fff;
    }
    .move-enter-active {
      animation-name: move-in;
      animation-duration: .5s;
    }
    .move-leave-active {
      animation-name: move-out;
      animation-duration: .5s;
    }
    @keyframes move-in {
      0% {
        transform: translate3d(100%, 0, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes move-out {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(100%, 0, 0);
      }
    }
  }
</style>
