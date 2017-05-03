<template>
  <header class="person-info clearfix">
    <div class="avatar pull-left">
      <img src="//upload.jianshu.io/users/upload_avatars/2758117/247d868bf5d6.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
    </div>
    <div class="author-info pull-left">
      <div class="name">小平同志</div>
      <div class="description">写了 2353 字,获得了 0 个喜欢</div>
      <div class="intros">闲着无聊总结一下</div>
    </div>
  </header>
</template>

<script>

  export default {
    name: ''
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/css/base.scss";
  .person-info{
    padding: 20px 0 15px;

    .avatar{

      img{
        width: 72px;
        height: 72px;
        border: 1px solid #f0f0f0;
        border-radius: 50%;
      }
    }
    .author-info{
      margin-left: 10px;

      div{
        margin-bottom: 10px;
      }

      .name{
        font-size: 20px;
        font-weight: bold;
        color: $blackColor;
      }

      .description{
        color: $fontColor3;
      }

      .intros{
        color: $fontColor1;
      }
    }
  }
</style>
