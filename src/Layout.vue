<template>
  <div id="layout" v-cloak>
    <div class="header">
      <div class="header_inner">
        <div class="left"></div>
        <div class="location">
          <div class="inner">
            <!-- 首次进来，根据session里面的数据来判断进入城市选择 -->
            <Icon color="#fff" size="24" type="ios-pin" />
            <span>{{location}}</span>
            <router-link tag="Button" to="/changecity">切换城市</router-link>
          </div>
        </div>
        <div class="right">
          <div class="signIn">
            <router-link tag="span" to="/login" v-if="!isSignIn">
              登录
            </router-link>
            <div v-else @mouseleave="handleMouseleave">
              <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div :key="0" @mouseenter="handleMouseenter">欢迎你:{{isSignIn}}</div>
                <div v-show="!isNone" :key="1">个人中心</div>
                <div v-show="!isNone" :key="2" @click="signOut">退出登录</div>
              </transition-group>
            </div>
          </div>
        </div>
        <div class="trial">
          <Button type="default" ghost @click="toTrial">免费试用</Button>
        </div>
      </div>
    </div>
    <div class="nav_container" :class="{ 'nav_fixed': is_nav_fixed }">
      <div class="nav">
          <router-link tag="div" to="/home">首页</router-link>
          <router-link tag="div" to="/bookTicket">票务</router-link>
          <router-link tag="div" to="/bookCard">卡务</router-link>
          <router-link tag="div" to="/bookField">场地</router-link>
          <router-link tag="div" to="/train">培训</router-link>
          <router-link tag="div" to="/games">赛事</router-link>
          <!-- <router-link tag="div" to="/mall">商城</router-link> -->
          <!-- <router-link tag="div" to="/community">社区</router-link> -->
          <router-link tag="div" to="/PersonalCenter">个人</router-link>
          <input type="text" /><Icon size="24" type="ios-search-outline" />
      </div>
    </div>
    <router-view />
    <div class="footer">
      <div class="inner">
        <h2>关于我们</h2>
        <p>了解我们</p>
        <p>加入我们</p>
        <p>联系我们</p>
      </div>
      <div class="inner">
        <h2>合作信息</h2>
        <p>我是场馆</p>
        <p>我是供应商</p>
        <p>帮助中心</p>
      </div>
      <div class="inner">
        <h2>其他产品</h2>
        <p>商家后台</p>
        <p>微信平台</p>
      </div>
      <div class="inner">
        <h2>联系我们</h2>
        <p>地址：南通市崇川区世伦路世濠花园商铺101号3层</p>
        <p>联系电话：400-081-0019</p>
      </div>
      <div class="inner">
        <img src="./assets/erweima.jpg" alt="" srcset="">
      </div>
    </div>
    <back-to-top :isBtnShow="isBtnShow"></back-to-top>
  </div>
</template>
<script>
import Login from '@/pages/Login';
import BackToTop from '@/components/BackToTop';
import { TO_TRIAL_URL } from './utils/urlManage';
export default {
  name: 'Layout',
  components: { Login, BackToTop },
  data() {
    return {
      isBtnShow: false,
      is_nav_fixed: false,
      isNone: true, // 默认隐藏
      // location: '',
    };
  },
  computed: {
    isSignIn: function() {
      return localStorage['username'];
    },
    location: {
      get: function() {
        return localStorage['currentCity'];
      },
      set: function(newV) {
        localStorage['currentCity'] = newV;
      },
    },
  },
  mounted() {
    window.addEventListener('scroll', this.fixHeader);
  },
  destroyed() {
    window.removeEventListener('scroll', this.fixHeader);
  },
  methods: {
    fixHeader() {
      // 按钮
      if (window.pageYOffset >= 400) {
        this.isBtnShow = true;
      } else {
        this.isBtnShow = false;
      }
      if (window.pageYOffset >= 100) {
        this.is_nav_fixed = true;
      } else {
        this.is_nav_fixed = false;
      }
    },
    handleMouseenter(event) {
      this.isNone = false;
    },
    handleMouseleave() {
      this.isNone = true;
    },
    signOut() {
      localStorage.clear(); // 清除数据
      this.$router.go(0); // 刷新页面 TODO: 有没有局部刷新的方式
    },
    toTrial() { // 跳转3.0试用
      window.open(TO_TRIAL_URL, '_blank');
    },
  },
  beforeRouteEnter(to, from, next) { // 组件路由监听 通过vm进行访问
    // 只有从选择城市进来会改变
    if (from.fullPath === '/changecity') {
      next(vm => {
        localStorage['currentCity'] = vm.$route.params.location;
        vm.location = localStorage['currentCity'];
      });
    } else {
      if (localStorage['currentCity']) {
        next(vm => {
          vm.location = localStorage['currentCity'];
        });
      } else {
        next(vm => {
          vm.$router.push({
            name: 'City',
          });
        });
      }
    }
  },
};
</script>
<style lang="scss" scoped>
$g_border_radius: 20px;
#layout {
  [v-cloak] {
    display: none;
  }
  min-width: 1280px;
  font-family: "SourceHanSansCn Normal";
  .header {
    width: 100%;
    height: 6em;
    background: $g_default_color;
    .header_inner {
      height: inherit;
      width: $g_width;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .left {
        height: inherit;
        width: 200px;
        background-image: url('http://img.doit10019.com/15a43798-8ec3-46bf-bf85-e0c1f9d97c57');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 0 10px;
      }
      .location {
        color: #fff;
        height: inherit;
        width: ( $g_width - 2 * (200px) );
        display: flex;
        justify-content: flex-end;
        font-size: 16px;
        .inner {
          padding: 1.4em 0;
          height: inherit;
          .ivu-btn-default {
            color: #fff;
            background: $g_default_color;
            &:hover {
              border-color: #fff;
            }
          }
        }
      }
      .right {
        height: inherit;
        width: 200px;
        .signIn {
          padding: 0.6em;
          color: #fff;
          cursor: pointer;
          text-align: center;
          margin-top: 1em;
          font-size: 16px;
          position: relative;
          z-index: 100;
          & > div > span > div {
            &:nth-child(n+2) {
                background: #fff;
                color: $g_default_color;
              border-radius: 8px;
              &:hover {
                color: #fff;
                background: $g_default_color;
              }
            }
          }
        }
      }
      .trial {
        margin-top: 2em;
        .ivu-btn-default {
          color: #fff;
          background: $g_default_color;
          &:hover {
            border-color: #fff;
          }
        }
      }
    }
  }
  .nav_container {
    background: $g_background;
    transition: all .3s ease;
    .nav {
      height: 6em;
      margin: auto;
      width: $g_width;
      position: relative;
      div {
        display: inline-block;
        width: 4em;
        height: 2em;
        color: #000;
        font-weight: 500;
        font-size: 18px;
        margin: 1em auto;
        padding: 4px 16px 0 18px;
        border-radius: $g_border_radius;
        cursor: pointer;
        &:hover {
          background: #00a1e9;
          color: #fff;
        }
      }
      .router-link-active {
          background: #00a1e9;
          color: #fff;
      }
      input {
        position: absolute;
        top: 2em;
        right: 0;
        padding: 6px 30px 6px 8px;
        height: 2.2em;
        width: 120px;
        border-radius: $g_border_radius;
        border: 1px solid #d0d0d0;
        background: #fff;
        outline: none;
      }
      i {
        position: absolute;
        top: 1em;
        right: 4px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .nav_fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    background: $g_background;
    box-shadow: 0 5px 14px #ccc;
  }
  .footer {
    width: $g_width;
    padding: 3em 1em 1em 1em;
    margin: auto;
    display: flex;
    align-items: flex-start;
    .inner {
      flex: 1;
      min-width: 78px;
      img {
        width: 100%;
        min-width: 110px;
      }
      &:nth-child(4) {
        flex: 2;
        min-width: 150px;
      }
      p {
        margin-top: 0.5em;
        &:nth-child(2) {
          margin-top: 1em;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
