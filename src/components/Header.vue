<template>
  <mt-header fixed title="创作你的创作">
    <router-link to="/" slot="left">
      <img src="//cdn2.jianshu.io/assets/mobile/new-logo-b91aa17d78f7a85a829cd081b38e1588.png" alt="">
    </router-link>
  </mt-header>
</template>

<script>

  export default {
    name: 'head'
  }
</script>

<style lang='scss' scoped>
  @import "../assets/css/base.scss";
  .mint-header{
    background-color: #FFF;
    height: 48px;
    line-height: 48px;
    color:$fontColor1;
    box-shadow: 0px 2px 3px #EAEAEA;
    text-align: left;

    .mint-header-button > a{
      display: block;
      height: 48px;
    }
    .mint-header-button.is-left > a{
      padding-left: 10px;
    }
    img{
      margin-top: 4px;
      height: 42px;
    }
  }
</style>
