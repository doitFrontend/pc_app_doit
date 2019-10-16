<template>
    <div id="login">
        <div class="login" style="visibility: hidden;"></div>
        <div class="login">
          <div class="header">
            <div :style="isCountLog ? activeStyle : ''" @click="changeLog('count')">账号登录</div>
            <div :style="!isCountLog ? activeStyle : ''" @click="changeLog('code')">手机动态码登录</div>
          </div>
          <input type="text" v-model="phoneNum" placeholder="请输入手机号">
          <input v-if="!isCountLog" type="text" v-model="idCode" placeholder="请输入动态码">
          <input v-else type="text" v-model="password" placeholder="请输入密码" @keyup.enter="signIn">
          <input type="button" value="登录" @click="signIn">
          <div v-if="!isCountLog" class="rcode" @click="sendIDCode">{{text}}</div>
          <div v-if="!isCountLog && isFloat" class="rcode" style="opacity: 0">遮罩</div>
          <div class="common forgetcode">忘记密码</div>
          <div class="common registry">免费注册</div>
          <div class="company">
            <h4>合作网站账号登录</h4>
          </div>
          <div class="inputlogo">
            <div class="inputlog">
              <Icon size="24" color="#999" custom="icon iconfont icon-shouji" />
            </div>
            <div class="inputlog">
              <Icon size="24" color="#999" custom="icon iconfont icon-mima1" />
            </div>
          </div>
          <div class="logo">
            <div class="log">
              <Icon size="40" color="rgb(4, 172, 238)" custom="icon iconfont icon-qq" />
            </div>
            <div class="log">
              <Icon size="38" color="rgb(10, 183, 14)" custom="iconfont icon-weixin" />
            </div>
          </div>
        </div>
        <Spin size="large" fix v-if="spinShow">
          <Icon type="ios-loading" size=36 class="demo-spin-icon-load"></Icon>
          <div>登陆中...</div>
        </Spin>
    </div>
</template>
<script>
import Qs from 'qs';
export default {
  name: 'Login',
  data() {
    return {
      text: '发送验证码',
      default_scondes: 60,
      timer: null,
      phoneNum: '',
      password: '',
      idCode: '',
      isCountLog: true,
      activeStyle: {
        color: '#00a1e9',
        borderBottom: '1px solid #00a1e9',
      },
      isFloat: false,
      spinShow: false,
    };
  },
  computed: {
    isClickAble: function() {
      return this.REGEXP.phoneRegExp.test(this.phoneNum);
    },
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  },
  methods: {
    sendIDCode() {
      if (this.isClickAble) {
        this.timer = setInterval(() => {
          if (this.default_scondes === 0) {
            this.isFloat = false;
            this.text = '发送验证码';
            this.default_scondes = 60; // 重置定时器 ton
            clearInterval(this.timer);
          } else {
            this.countDown();
          }
        }, 1000);
      } else {
        this.$Message.warning({
          content: '请填写正确的手机号码',
          duration: 3,
        });
      }
    },
    countDown() {
      this.isFloat = true;
      this.default_scondes--;
      this.text = `已发送(${this.default_scondes}s)`;
    },
    signIn() {
      this.spinShow = true;
      let isLegal = this.checkData();
      if (isLegal) {
        this.login();
      }
    },
    moreTodo(res) {
      localStorage.setItem('username', res.data.username);
      let temp_url = decodeURIComponent(this.$router.currentRoute.fullPath); // /login?redirect=/checkout
      let url = '';
      if (temp_url.indexOf('?') !== -1) { // 到支付页面 // 登录成功后，跳转刚刚购买的页面
        url = temp_url.split('=')[1];
      } else { // 直接登录
        url = 'home';
      }
      this.$router.push({
        path: url
      });
    },
    login() {
      let data = {
        username: this.phoneNum,
        password: this.password,
        orgId: '0be0cef1d45f11e984598866394de9ee',
      };
      this.$axios({
        method: 'POST',
        url: 'login.do',
        data: data,
        transformRequest: [function(data) {
          return Qs.stringify(data);
        }], // 重要
      }).then(res => {
        this.spinShow = false;
        if (res.data.code === 200) {
          this.moreTodo(res);
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
    checkData() {
      let sign = false;
      if (!this.phoneNum) {
        this.$Message.warning({
          content: '请输入手机号码',
          duration: 3,
        });
        return;
      }
      if (this.isCountLog) {
        if (!this.password) {
          this.$Message.warning({
            content: '请输入密码',
            duration: 3,
          });
          return;
        }
        sign = true;
      } else {
        if (!this.idCode) {
          this.$Message.warning({
            content: '请输入验证码',
            duration: 3,
          });
          return;
        }
        sign = true;
      }
      return sign;
    },
    changeLog(sign) {
      switch (sign) {
        case 'code':
          this.isCountLog = false;
          break;
        default:
          this.isCountLog = true;
          this.resetStatus();
          break;
      }
    },
    // tab 切换时 重置状态
    resetStatus() {
      clearInterval(this.timer);
      this.isFloat = false;
      this.default_scondes = 60;
      this.text = '发送验证码';
    },
  },
};
</script>
<style lang="scss" scoped>
$input_padding_up_down: 0;
$input_padding_left_right: 30px;
#login {
    background: url('../assets/swim.jpg') no-repeat;
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .login {
        height: 480px;
        width: 390px;
        background: #fff;
        opacity: 0.9;
        padding: $input_padding_up_down $input_padding_left_right $input_padding_up_down $input_padding_left_right;
        border-radius: 4px;
        position: relative;
        .header {
          display: flex;
          div {
            font-size: 16px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            &:hover {
              cursor: pointer;
            }
            &:nth-child(1) {
              flex-grow: 1.9;
            }
            &:nth-child(2) {
              flex-grow: 1;
            }
          }
        }
        input {
            display: block;
            width: 330px;
            height: 46px;
            font-size: 16px;
            padding: 14px 0 14px 45px;
            background: #EFEFEF;
            border: 1px solid lightblue;
            border-radius: 4px;
            outline: none;
            &:nth-child(2) {
                margin-top: 36px;
            }
            &:nth-child(3) {
                margin-top: 20px;
            }
            &:nth-child(4) {
                margin-top: 64px;
                padding: 0;
                background: $g_default_color;
                border: none;
                color: #fff;
                cursor: pointer;
            }
            &::-webkit-input-placeholder {
                color: #999;
            }
        }
        .rcode {
            position: absolute;
            top: 162px;
            right: $input_padding_left_right;
            color: #999;
            padding: 14px;
            &:hover {
                cursor: pointer;
            }
        }
        .common {
            position: absolute;
            right: $input_padding_left_right;
            color: $g_default_color;
            padding: 14px;
            &:hover {
              cursor: pointer;
            }
        }
        .forgetcode {
          top: 216px;
        }
        .registry  {
          top: 326px;
        }
        .company {
            position: absolute;
            top: 380px;
            right: $input_padding_left_right;
            color: #000;
            width: calc(100% - 60px);
            font-size: 14px;
            padding: 14px;
            border-top: 1px solid #999;
            display: flex;
            justify-content: center;
            h4 {
              position: absolute;
              top: -13px;
              background: #fff;
              padding: 2px 10px;
              font-weight: 500;
            }
        }
        .logo {
          position: absolute;
          top: 418px;
          height: 40px;
          width: calc(100% - 60px);
          display: flex;
          justify-content: center;
          .log {
            &:nth-child(2) {
              margin-left: 30px;
            }
          }
          &:hover {
            cursor: pointer;
          }
        }
        .inputlogo {
          position: absolute;
          top: 108px;
          left: 40px;
          .inputlog {
            &:nth-child(2) {
              margin-top: 40px;
            }
          }
        }
    }
}
</style>
