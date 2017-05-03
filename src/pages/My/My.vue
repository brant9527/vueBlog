<template>
  <div class="box">
    <div class="container">
      <index></index>
    </div>
    <article-list></article-list>
    <Loadmore></Loadmore>
    <foot></foot>
  </div>
</template>

<script>
  import Index from './Header.vue'
  import ArticleList from './ArticleList.vue'
  import Loadmore from './LoadMore.vue'
  import Foot from './Footer.vue'
  export default {
    name: 'my',
    components: {
      Index,
      ArticleList,
      Loadmore,
      Foot
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/css/base.scss";
</style>
