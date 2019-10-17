// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './theme/index.less';
import './theme/global_style.scss';
import 'animate.css';
import { hasPermission } from '@/utils/index';
import axios from 'axios';
import REGEXP from '@/utils/regExp';
import BaiduMap from 'vue-baidu-map';
import * as filters from './utils/filters';

// element辅助
import { Autocomplete } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './theme/element_index.scss';
import './assets/iconfont/iconfont.css';
import './assets/iconfont1/iconfont.css';
Vue.use(Autocomplete);

Vue.use(router);
Vue.use(store);
Vue.use(iView);
Vue.use(BaiduMap, {
  ak: 'MfTf0gej32MGmr5pSm7qwVjN1vufeRjT',
});

Vue.prototype.hasPermission = hasPermission;
// 根据env获取路径
const baseURL = process.env.API;
console.log(baseURL);
axios.defaults.baseURL = baseURL;
Vue.prototype.$axios = axios;
// Vue.prototype.HOST = '/api';
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

Vue.config.productionTip = false;

Vue.prototype.REGEXP = REGEXP;

// 遍历注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

iView.LoadingBar.config({
  color: '#5cb85c',
  // failedColor: '#f0ad4e',
  height: 8,
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  // to and from are both route objects. must call `next`.
  let notOpenUrl = ['/train', '/games', 'mall', '/community'];
  if (notOpenUrl.indexOf(to.fullPath) !== -1) {
    next({
      path: '/404',
    });
  }
  // 判断该路由是否需要登陆
  if (to.matched.some(res => res.meta.isLogin)) {
    if (localStorage['username']) {
      next();
    } else {
      setTimeout(() => {
        iView.Message.warning({
          content: '请先登录',
          duration: 5,
        });
        next({
          path: '/login',
          query: {
            redirect: to.fullPath,
          },
        });
      }, 0);
    };
  } else {
    next();
  };
  // 判断是否需要选择城市
  if (!localStorage['currentCity'] || localStorage['currentCity'] === 'undefined') {
    next({
      name: 'City'
    });
  } else {
    next();
  }
});

// mode: hash模式下，解决路由跳转，页面会记住滚动位置的问题
router.afterEach(() => {
  iView.LoadingBar.finish();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
