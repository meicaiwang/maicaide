// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem, Tabbar, TabbarItem,NavBar,Area, RadioGroup, Radio,Picker, PasswordInput, NumberKeyboard,Field,Icon, Button,
GoodsAction,GoodsActionIcon,GoodsActionButton,AddressList,CouponCell, CouponList,Card,CountDown,Toast,Search,Rate} from 'vant';
import Vuex from 'vuex'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import App from './App'
import router from './router'
import store from './store'
import './data/userinfo.js'
import './data/prolist.js'
Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Vuex).use(IScrollView,IScroll)
Vue.use(Swipe).use(SwipeItem).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Radio).use(Picker).use(Icon);
Vue.use(Tabbar).use(TabbarItem).use(AddressList).use(Card).use(CountDown).use(Rate).use(RadioGroup).use(Field).use(Button);
Vue.use(NavBar).use(Area).use(CouponCell).use(CouponList).use(Toast).use(Search).use(PasswordInput).use(NumberKeyboard);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
