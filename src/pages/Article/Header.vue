<template>
  <header class="box article">
    <div class="container">
      <h1>从阅读到写作,如何把知识转化率提高到100%?</h1>
      <div class="author-info">
        <a class="avatar">
          <img src="//upload.jianshu.io/users/upload_avatars/31282/31c4482f3f73.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
        </a>
        <span class="name">一元亦有用</span>
        <span class="badge">签约作者</span>
      </div>
      <div class="time">2017.05.02 18:40</div>
    </div>
  </header>
</template>

<script>

  export default {
    name: ''
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/css/base";
  .article{
    margin-top: 20px;
  }
  h1{
    font-size: 28px;
    color: #2F2F2F;
    line-height: 38px;
  }
  .author-info{
    margin: 15px 0;

    .name{
      color: $fontColor1;
      font-size: $fontSize3;
      font-weight: bold;
      margin: 0 5px;
    }

    img{
      width: 34px;
      height: 34px;
      border:1px solid #ddd;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .time{
    color: $fontColor3;
  }
  .badge{
    border-color:#E78170;
    color:#E78170;
    font-size: 12px;
  }
</style>
