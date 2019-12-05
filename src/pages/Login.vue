<template>
    <div id="login">
        <div class="login" style="visibility: hidden;"></div>
        <div class="login">
          <div class="header">
            <div :style="isCountLog ? activeStyle : ''" @click="changeLog('count')">用户登录</div>
            <div :style="!isCountLog ? activeStyle : ''" @click="changeLog('code')">用户注册</div>
          </div>
          <input type="text" v-model="phoneNum" placeholder="请输入手机号">
          <input v-if="!isCountLog" type="text" v-model="code" placeholder="请输入动态码">
          <input v-if="!isCountLog" type="text" v-model="name" placeholder="请输入用户姓名">
          <input type="text" v-model="password" placeholder="请输入密码">
          <input  v-if="!isCountLog" type="button" value="注册"  id="register" @click="register">
          <input  v-if="isCountLog" type="button" value="登录" @click="login" id="login">
          <div v-if="!isCountLog" class="rcode" @click="getCode">{{codeText}}</div>
          <div v-if="!isCountLog && isFloat" class="rcode" style="opacity: 0">遮罩</div>
        </div>
        <Spin size="large" fix v-if="spinShow">
          <Icon type="ios-loading" size=36 class="demo-spin-icon-load"></Icon>
          <div>登陆中...</div>
        </Spin>
    </div>
</template>
<script>
// import Qs from 'qs';
export default {
  name: 'Login',
  data() {
    return {
      text: '发送验证码',
      codeText: '发送验证码',
      timer: null,
      interval_timer: null,
      phoneNum: '',
      password: '',
      name: '',
      idCode: '',
      code: '',
      codeSn: '',
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
    getCode() {
      // 以下赋值采用that可，this不可为何？
      let countdown = 60;
      let that = this;
      let data = {
        phone: that.phoneNum,
      };
      if (this.isClickAble) {
        that.$axios({
          method: 'POST',
          url: '/sendmsg/doit.do',
          data: data,
        }).then(res => {
          that.spinShow = false;
          if (res.data.code === 200) {
            that.codeSn = res.data.code;
            if (that.codeText.indexOf('s') === -1) {
              that.interval_timer = setInterval(function() {
                if (countdown === 0) {
                  that.codeText = '重新获取验证码';
                  countdown = 60;
                  clearInterval(that.interval_timer);
                  that.interval_timer = null;
                } else {
                  countdown--;
                  that.codeText = countdown + 's';
                  console.log(that.codeText);
                }
              }, 1000);
            }
          } else {
            that.$Message.warning(res.data.data);
          }
        }).catch(error => {
          console.log(error);
        });
      } else {
        this.$Message.warning({
          content: '请填写正确的手机号码',
          duration: 3,
        });
      }
    },
    signIn() {
      this.spinShow = true;
      let isLegal = this.checkData();
      if (isLegal) {
        this.login();
      }
    },
    moreTodo(res) {
      localStorage.setItem('username', res.data.data.memberName);
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
    register() {
      let data = {
        memberPhone: this.phoneNum,
        memberPassword: this.password,
        memberSex: '保密',
        memberName: this.name,
        orgId: '123456',
      };
      if (this.password) {
        this.$axios({
          method: 'POST',
          url: 'addOrUpdateMemberZcr.do',
          data: data,
        }).then(res => {
          console.log(res);
          if (res.data.code === 200) {
            this.$Message.warning('会员注册成功');
            this.login();
          } else {
            this.$Message.warning(res.data.data);
          }
        }).catch(error => {
          console.log(error);
        });
      } else {
        this.$Message.warning({
          content: '请填写密码',
          duration: 3,
        });
      }
    },
    login() {
      let data = {
        memberPhone: this.phoneNum,
        memberPassword: this.password,
        orgId: '123456',
      };
      this.$axios({
        method: 'POST',
        url: 'memberLogin.do',
        data: data,
        // transformRequest: [function(data) {
        //   return Qs.stringify(data);
        // }], // 重要
      }).then(res => {
        this.spinShow = false;
        // console.log(res.data);
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
                margin-top: 20px;
            }
            &:nth-child(5) {
                margin-top: 20px;
            }
            &::-webkit-input-placeholder {
                color: #999;
            }
        }
        #login,#register {
                margin-top: 64px;
                padding: 0;
                background: $g_default_color;
                border: none;
                color: #fff;
                cursor: pointer;
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
