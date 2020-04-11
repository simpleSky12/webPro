<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <a class="fly-logo" href="/">
        <img src="../assets/logo-2.png" alt="layui">
      </a>
      <ul class="layui-nav fly-nav layui-hide-xs">
        <li class="layui-nav-item">
          <a href="/"><i class="iconfont icon-jiaoliu"></i>交流</a>
        </li>
        <li class="layui-nav-item">
          <a href="/case/2017/"><i class="iconfont icon-iconmingxinganli"></i>案例</a>
        </li>
        <li class="layui-nav-item">
          <a href="/"><i class="iconfont icon-ui"></i>框架</a>
        </li>
      </ul>
      <ul class="layui-nav fly-nav-user">
        <li class="layui-nav-item">
          <a class="iconfont icon-touxiang layui-hide-xs" href="/user/login/"></a>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{name: 'login'}">登入</router-link>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{name: 'reg'}">注册</router-link>
        </li>
        <li class="layui-nav-item layui-hide-xs">
          <a href="/app/qq/" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" title="QQ登入" class="iconfont icon-qq"></a>
        </li>
        <li class="layui-nav-item layui-hide-xs">
          <a href="/app/weibo/" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" title="微博登入" class="iconfont icon-weibo"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .fly-logo {
    left: -15px;
    top: -10px;
    margin-left: 15px;
  }
</style>
