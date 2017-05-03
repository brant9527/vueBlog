<template>
  <div class="loadmore" @click="loadmore">
    展开更多文章 <i class="iconfont icon-xiangxia"></i>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: '',
    methods: {
      ...mapActions({
        loadmore: 'LOADMORE_ARTICLE'
      })
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/css/base";
  .loadmore{
    text-align:center;
    padding: 20px;
    font-size: $fontSize3;
    color: $fontColor3;
    border-bottom: 18px solid #F5F5F5;

    i{
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
