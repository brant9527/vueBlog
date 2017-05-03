<template>
  <div>
    <h4>文章</h4>
    <ul class="article-list container list">
      <li>
          <img src="//upload-images.jianshu.io/upload_images/2206395-ad604e7e7b05fb3c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/246/h/246" alt="">
          <div>
            <div class="title clearfix">
              <p class="avatar"><img class="img-responsive" src="//upload.jianshu.io/users/upload_avatars/2206395/bf16a681-6e54-437e-8ffb-15d5057b7504.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/44/h/44" alt=""></p>
              <p class="author">天宝谈写作</p>
              <p>前天 15:39</p>
            </div>
            <h3>从阅读到写作,如何把知识转化率提高到100%?</h3>
            <div class="statistics">
              <span><i class="iconfont icon-liulan"></i> 1757</span>
              <span><i class="iconfont icon-anzhuo34"></i> 21</span>
              <span><i class="iconfont icon-shoucang"></i> 53</span>
              <span><i class="iconfont icon-money"></i> 1</span>
            </div>
          </div>
      </li>
      <li>
        <img src="//upload-images.jianshu.io/upload_images/2206395-ad604e7e7b05fb3c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/246/h/246" alt="">
        <div>
          <div class="title clearfix">
            <p class="avatar"><img class="img-responsive" src="//upload.jianshu.io/users/upload_avatars/2206395/bf16a681-6e54-437e-8ffb-15d5057b7504.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/44/h/44" alt=""></p>
            <p class="author">天宝谈写作</p>
            <p>前天 15:39</p>
          </div>
          <h3>从阅读到写作,如何把知识转化率提高到100%?</h3>
          <div class="statistics">
            <span><i class="iconfont icon-liulan"></i> 1757</span>
            <span><i class="iconfont icon-anzhuo34"></i> 21</span>
            <span><i class="iconfont icon-shoucang"></i> 53</span>
            <span><i class="iconfont icon-money"></i> 1</span>
          </div>
        </div>
      </li>
      <li>
        <img src="//upload-images.jianshu.io/upload_images/2206395-ad604e7e7b05fb3c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/246/h/246" alt="">
        <div>
          <div class="title clearfix">
            <p class="avatar"><img class="img-responsive" src="//upload.jianshu.io/users/upload_avatars/2206395/bf16a681-6e54-437e-8ffb-15d5057b7504.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/44/h/44" alt=""></p>
            <p class="author">天宝谈写作</p>
            <p>前天 15:39</p>
          </div>
          <h3>从阅读到写作,如何把知识转化率提高到100%?</h3>
          <div class="statistics">
            <span><i class="iconfont icon-liulan"></i> 1757</span>
            <span><i class="iconfont icon-anzhuo34"></i> 21</span>
            <span><i class="iconfont icon-shoucang"></i> 53</span>
            <span><i class="iconfont icon-money"></i> 1</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: ''
  }
</script>

<style lang='scss' scoped>
  @import "../assets/css/base";
  h4{
    background-color: #F5F5F5;
    padding:15px 18px;
  }
  .article-list{

    li{
      position: relative;
      border-bottom: 1px solid #ddd;

      >div{
        padding: 20px 95px 25px 0;
      }

      >img{
        position: absolute;
        width: 80px;
        height: 80px;
        top: 50%;
        margin-top: -40px;
        right: 3px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
      }
    }
    .title p{
      float:left;
      color: $fontColor3;
    }
    .avatar{
      margin: -4px 5px 0 0;
      img{
        width: 20px;
        height: 20px;
        border: 1px solid #F0F0F0;
        border-radius: 50%;
      }
    }
    .title .author{
      margin-right: 10px;
      color: $fontColor1;
    }
    h3{
      padding: 10px 0;
      font-size: $fontSize3;
      color: $blackColor;
      line-height: 26px;
    }
    .statistics{
      color: $fontColor3;
      i{
        font-size: $fontSize3;
      }
      span:nth-child(1) i{
        font-size: 18px;
        position: relative;
        top:1px;
      }
      span:nth-child(2) i{
        position: relative;
        top: 3px;
      }
      span:nth-child(4) i{
        font-size: $fontSize2;
      }
      span{
        font-size: $fontSize2;
        margin-right: 10px;
      }
    }
  }
</style>
