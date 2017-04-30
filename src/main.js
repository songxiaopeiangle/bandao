import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueSwipe from 'vue-swipe';
import App from './App';

//import VueBus from 'vue-bus';

import home from 'components/home/home';
import classfiy from 'components/classfiy/classfiy';
import listening from 'components/listening/listening';
import buying from 'components/buying/buying';
import myCenter from 'components/myCenter/myCenter';

import Rating from 'components/classfiy/rating/rating';


import SearchListInfo from 'components/searchListInfo/searchListInfo';
import playComponent from 'components/playComponent/playComponent';

import shopDetail from 'components/shopDetail/shopDetail.vue';

import indexMake from 'components/myCenter/indexMake/indexMake';
import myBrowse from 'components/myCenter/myBrowse/myBrowse';
import myCollect from 'components/myCenter/myCollect/myCollect';
import contact from 'components/myCenter/contact/contact';
import rechargeMark from 'components/myCenter/rechargeMark/rechargeMark';
import recharge from 'components/myCenter/recharge/recharge';
import userBack from 'components/myCenter/userBack/userBack';
import lawer from 'components/myCenter/lawer/lawer';
import myHonor from 'components/myCenter/myHonor/myHonor';

//加入购物车页面的组件
import shopCart from 'components/shopCart/shopCart';

import bannerDetail from 'components/bannerDetail/bannerDetail';
import moreFree from 'components/freeService/moreFree/moreFree';
import listComponent from 'components/listComponent/listComponent';
import moreClassify from 'components/home/moreClassify/moreClassify';
import videoDetail from 'components/shopDetail/video';



Vue.use(VueRouter);
Vue.use(VueResource);
//Vue.use(VueBus);
const routes = [
  {
    path:'/home',
    component:home
  },
  {
    path:'/classfiy',
    component:classfiy
  },
  {
    path:'/listening',
    component:listening
  },
  {
    path:'/listening/playComponent',
    component:playComponent
  },
  {
    path:'/buying',
    component:buying
  },
  {
    path:'/myCenter',
    component:myCenter
  },
  //加入购物车路由
  {
    path:'/shopCart',
    component: shopCart
  },
 //我的页面的数据,
  {
    path:'/indexMake',
    component: indexMake
  },
  {
    path:'/myCenter/myBrowse',
    component: myBrowse
  },
  {
    path:'/myCenter/myCollect',
    component:myCollect
  },
  {
    path:'/myCenter/contact',
    component: contact
  },
  {
    path:'/myCenter/rechargeMark',
    component: rechargeMark
  },
  {
    path:'/myCenter/recharge',
    component: recharge
  },
  {
    path:'/myCenter/userBack',
    component:userBack
  },
  {
    path:'/myCenter/lawer',
    component: lawer
  },
  {
    path:'/myCenter/myHonor',
    component:myHonor
  },
  {
    path:'/home/SearchListInfo',
    component:SearchListInfo
  },
  {
    path: '/home/bannerDetail',
    component:bannerDetail
  },
  {
    path: '/home/moreFree',
    name:'moreAudio',
    component:moreFree
  },
  {
    path:"/home/moreClassify",
    component:moreClassify
  },
  {
    path:"/home/videoDetail",
    component:videoDetail
  },
  {
    path:"/home/listComponent",
    component:listComponent,
  },
  {
    path: '/home/play',
    component: playComponent
  }
]
const router = new VueRouter({
  routes,
  linkActiveClass:'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      transitionName: "slide"
    }
  },
  router,
  VueRouter,
  template: '<App/>',
  components: { App }
})
