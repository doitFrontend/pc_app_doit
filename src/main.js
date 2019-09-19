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

// element辅助
import { Autocomplete } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './theme/element_index.scss';
Vue.use(Autocomplete);

Vue.use(router);
Vue.use(store);
Vue.use(iView);

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

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(to.fullPath);
  let notOpenUrl = ['/train', '/games', 'mall', '/community'];
  if (notOpenUrl.indexOf(to.fullPath) !== -1) {
    next({
      path: '/404',
    });
  }
  // 判断该路由是否需要登陆
  if (to.matched.some(res => res.meta.isLogin)) {
    if (sessionStorage['username']) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    };
  } else {
    next();
  };
  // 判断是否需要选择城市
  if (localStorage['currentCity']) {
    next();
  } else {
    next({
      name: 'City'
    });
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
