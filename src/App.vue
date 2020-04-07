<template>
  <div id="app">
    <router-view></router-view>
    <!--<div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <validation-provider name="用户名" rules="required|email" v-slot="{errors}">
            <div class="layui-input-inline">
              <input type="text"
                     name="name"
                     v-model.trim="name"
                     placeholder="请输入用户名"
                     class="layui-input">
            </div>
            <div class="layui-form-mid error">{{errors[0]}}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input type="password" v-model="password"
                   placeholder="请输入密码"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item code">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" placeholder="请输入验证码"
                   v-model="code"
                   class="layui-input">
          </div>
          <div class="layui-form-mid" v-html="svg" @click="getCaptcha"></div>
          <a href="javascript:;" @click="getCaptcha">看不清换一张</a>
        </div>
        <button type="button" class="layui-btn">点击登陆</button>
        <a href="http://www.layui.com" class="getPassword">忘记密码？</a>
      </form>
    </div>-->
  </div>
</template>

<script>
/*
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  })
}
*/

export default {
  name: 'app'
  /* data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/captcha').then(res => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    }
  } */
}
</script>

<style lang="scss" scoped>
  @import "assets/layui/css/layui.css";
  @import "assets/css/global.css";
  @import "assets/layui/css/modules/layer/default/layer.css";
  /*#app {
    background-color: #f2f2f2;
  }

  .layui-container {
    background-color: #fff;
  }

  input {
    width: 190px;
  }

  .code {
    display: flex;
    align-items: center;

    a {
      &:hover {
        color: #42b983;
      }
    }
  }

  .getPassword {
    margin-left: 10px;

    &:hover {
      color: #42b983;
    }
  }

  .error {
    color: #ff2130;
  }*/
</style>
