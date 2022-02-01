<template>
  <div class="home">
    <div class="content">
      <div class="test">test</div>
      <div :class="['logContent',{'middle-flip':!isFront}]">
        <div class="front">
          <div class="title">LOGIN</div>
          <el-input class="input" clearable v-model="loginForm.userName" placeholder="Please input account"/>
          <el-input class="input" clearable type="password" show-password v-model="loginForm.password"
                    placeholder="Please input password"/>
          <el-button class="button" type="primary" round @click="load('login')">LOGIN</el-button>
          <div class="tips">
            <div class="row">If you don't have account.Please</div>
            <div class="row">Click hera to <span class="signText" @click="rotate">Sign Up</span></div>
          </div>
        </div>

        <div class="back">
          <div class="title">REGISTER</div>
          <el-input class="input" clearable v-model="registerForm.userName" placeholder="Please input account"/>
          <el-input class="input" clearable type="password" show-password v-model="registerForm.password"
                    placeholder="Please input password"/>
          <el-input class="input" clearable type="password" show-password v-model="registerForm.confirmPassword"
                    placeholder="Please confirm password"/>
          <el-button class="button" type="primary" round @click="load('register')">REGISTER</el-button>
          <div class="tips">
            <div class="row">Have an account? You can</div>
            <div class="row">Click hera to <span class="signText" @click="rotate">Login</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ElMessage} from 'element-plus'
import {getCurrentInstance} from "vue";
import Api from '../api'


export default {
  setup() {
    let {proxy} = getCurrentInstance();
  },
  data() {
    return {
      isFront: true,
      loginForm: {
        userName: '',
        password: ''
      },
      registerForm: {
        userName: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    rotate() {
      this.isFront = !this.isFront;
    },
    load(type) {
      if (type === 'login') {
        if (!this.loginForm.userName) {
          ElMessage({
            message: 'Please input your account',
            type: 'warning',
          })
          return false;
        }
        if (!this.loginForm.password) {
          ElMessage({
            message: 'Please input your password',
            type: 'warning',
          })
          return false;
        }
        const data = {
          userName: this.loginForm.userName,
          password: this.loginForm.password
        }
        Api.user.login(data)
            .then(res => {
              ElMessage({
                message: '登录成功',
                type: 'success',
              })
              localStorage.setItem('token', res.data.user.token);
              setTimeout(() => {
                this.$router.push('note');
              }, 1000)
            })
            .catch(error => {
              if (error.response.data) {
                ElMessage({
                  message: error.response.data.message,
                  type: 'error',
                })
              }
            })

      } else {
        if (!this.registerForm.userName) {
          ElMessage({
            message: 'Please input your account',
            type: 'warning',
          })
          return false;
        }
        if (!this.registerForm.password) {
          ElMessage({
            message: 'Please input your password',
            type: 'warning',
          })
          return false;
        }
        if (!this.registerForm.confirmPassword) {
          ElMessage({
            message: 'Please input your password again',
            type: 'warning',
          })
          return false;
        }
        if (this.registerForm.password !== this.registerForm.confirmPassword) {
          ElMessage({
            message: 'Please confirm your password,make sure they are in common',
            type: 'warning',
          })
          return false;
        }
        const data = {
          userName: this.registerForm.userName,
          password: this.registerForm.password
        }
        Api.user.registe(data)
            .then(res => {
              ElMessage({
                message: '注册成功',
                type: 'success',
              })
              localStorage.setItem('token', res.data.user.token);
              setTimeout(() => {
                this.$router.push('note');
              }, 1000)
            })
            .catch(error => {
              if (error.response.data) {
                ElMessage({
                  message: error.response.data.message,
                  type: 'error',
                })
              }
            })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('http://img.souche.com/f2e/2da0f1c87fb5b3dcc3560c4244dec230.jpeg') no-repeat;
    background-size: cover;

    .test {
      positon: fixed;
      left: 0;
      top: 0;
      font-size: 16px;
      color: red;
    }

    .logContent {
      background: rgba(255, 255, 255, .2);
      padding: 20px;
      width: 350px;
      height: 300px;
      border-radius: 20px;

      .front {
        transform: rotateY(0deg);
      }

      .back {
        transform: rotateY(-180deg);
      }

      .front,
      .back {
        position: absolute;
        width: 350px;
        /* 然后设置为背面朝向用户时不可见 */
        backface-visibility: hidden;
        /* 我觉得用linear顺滑一点 */
        transition: 0.3s linear;

        .title {
          font-size: 30px;
          line-height: 50px;
          color: #fff;
          font-weight: 800;
        }

        .input {
          margin-bottom: 10px;
        }

        .button {
          margin-bottom: 10px;
        }

        .tips {
          font-size: 24px;
          color: #727272;
          cursor: pointer;

          .row {
            text-align: center;
          }

          .signText {
            color: #f9ac49;
          }
        }
      }
    }

    /* 将front旋转180度 */

    .middle-flip .front {
      transform: rotateY(180deg);
    }

    /* 将back旋转180度 */

    .middle-flip .back {
      transform: rotateY(0deg);
    }
  }

}
</style>
