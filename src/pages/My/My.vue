<template>
  <div class="box">
    <div class="container">
      <index></index>
    </div>
    <article-list></article-list>
    <Loadmore></Loadmore>
  </div>
</template>

<script>
  import Index from './Header.vue'
  import ArticleList from '../../components/ArticleList.vue'
  import Loadmore from '../../components/LoadMore.vue'
  export default {
    name: 'my',
    components: {
      Index,
      ArticleList,
      Loadmore
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/css/base.scss";
</style>
