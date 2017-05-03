<template>
  <div class="home box">
    <Index></Index>
    <Banner></Banner>
    <keep-alive>
      <article-list></article-list>
    </keep-alive>
    <Loadmore></Loadmore>
    <buttons></buttons>
  </div>
</template>

<script>
  import Index from './Index.vue'
  import Banner from './Banner.vue'
  import ArticleList from '../../components/ArticleList.vue'
  import Loadmore from '../../components/LoadMore.vue'
  import Buttons from './Buttons.vue'

  export default {
    name: 'home',
    components: {
      Index,
      Banner,
      ArticleList,
      Loadmore,
      Buttons
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/css/base";
</style>
