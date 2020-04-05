<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" :class="{'form-group--error': $v.name.$error}">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input type="text"
                   placeholder="请输入用户名"
                   v-model.trim="$v.name.$model"
                   @input="setName($event.target.value)"
                   class="layui-input">
          </div>
          <div class="error layui-form-mid" v-if="!$v.name.required">用户名不得为空</div>
          <div class="error layui-form-mid" v-if="!$v.name.email">用户名输入格式错误</div>
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    }
  },
  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    setName (value) {
      this.name = value
      this.$v.name.$touch()
    },
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
  }
}
</script>

<style lang="scss" scoped>
#app{
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
  a{
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
  display: none;
}
.form-group--error {
  .error {
    color: #ff2130;
    display: block;
  }
}
</style>
