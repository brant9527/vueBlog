<template>
  <div class="box">
    <div class="container">
      <mt-field label="标题" placeholder="请输入文章标题" v-model="title"></mt-field>
    </div>
    <div class="container content">
      <vue-editor v-model="content" placeholder="请输入文章内容"></vue-editor>
    </div>
    <div class="buttons container">
      <mt-button size="normal" type="primary">发表文章</mt-button>
      <mt-button size="normal" type="default">保存</mt-button>
    </div>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  export default {
    name: 'write',
    data () {
      return {
        title: '',
        content: ''
      }
    },
    components: {
      VueEditor
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/css/base";
  .container:first-child{
    margin-top: 10px;
  }
  .content{
    margin-top: 10px;
  }
  .buttons{
    margin-top: 20px;
    text-align: right;
    button{
      margin-left: 15px;
    }
  }
</style>
