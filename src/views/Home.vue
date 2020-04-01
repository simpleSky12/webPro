<template>
  <div>
    <div class="home">{{msg}}</div>
    <div class="left">
      <form v-if="isShow">
        <div class="item">
          <span>菜品名称</span>
          <input type="text" v-model="unit.name"></div>
        <div class="item">
          菜品图片
          <input type="text" v-model="unit.url"></div>
        <div class="item">
          菜品分类
          <input type="text" v-model="unit.type"></div>
        <div class="item">
          菜品单价
          <input type="text" v-model="unit.price"></div>
        <button type="button" @click="isShow = false">确认</button>
      </form>
      <div class="btn" v-else>
        <div class="info">{{unit.name}}-{{unit.url}}-{{unit.type}}-{{unit.price}}</div>
        <button @click="addUnit">添加</button>
        <button @click="isShow = true">取消</button>
      </div>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          {{item.name}}-{{item.url}}-{{item.type}}-{{item.price}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      msg: 'hello world!',
      unit: {
        name: '土豆肉丝',
        url: 'www.qq.com',
        type: '荤菜',
        price: 10
      },
      list: [],
      isShow: true
    }
  },
  components: {},
  mounted () {
    this.list = this.$store.state.list
  },
  methods: {
    addUnit () {
      /*
      *  ...扩展运算符
      *  相当于新建了一个空的对象，存储 this.unit
      *  避免this.unit 的指向，导致空数据
      * */
      this.list.push({ ...this.unit })
      this.$store.commit('setList', this.list)
      this.unit = {}
      this.isShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{}
  button {
    display: inline-block;
    margin-right: 20px;
    border-style: none;
    width: 60px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
  ul {
    list-style: none;
    li {
      padding: 10px;
    }
  }
  .left {
    float: left;
    width: 40%;
    .item {
      height: 50px;
      margin-top: 20px;
      input{
        display: inline-block;
        margin-left: 20px;
      }
    }
    .btn{
      margin-top: 100px;
      .info{
        margin-bottom: 50px;
      }

    }
  }
  .right {
    float: right;
    width: 55%;
  }
</style>
