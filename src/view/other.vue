<template>
  <div class="sortItem">
    <div class="title">衍生的商务网站</div>
    <div class="imageLine">
      <a href="http://www.3dnest.cn/" target="_blank">
        <img src="../assets/images/zhongqu.png" alt="">
        <span>众趣科技</span>
      </a>
      <a href="http://www.mms3d.cn/html/alzs/alzs/" target="_blank">
        <img src="../assets/images/mumianshu.png" alt="">
        <span>木棉树</span>
      </a>
    </div>
  </div>
  <div class="sortItem">
    <div class="title">3D模型下载</div>
    <div class="imageLine">
      <a href="https://gizmohub.com/" target="_blank">
        <img src="../assets/images/zhuoke.png" alt="">
        <span>啄刻</span>
      </a>
      <a href="https://sketchfab.com/search?q=tesla_2018_model_3&sort_by=-relevance&type=models" target="_blank">
        <img src="../assets/images/sketchfab.png" alt="">
        <span>sketchfab</span>
      </a>
    </div>
  </div>
  <div class="sortItem">
    <div class="title">可视化制作网站</div>
    <div class="imageLine">
      <a href="https://www.ddd.online/" target="_blank">
        <img src="../assets/images/dongdong.png" alt="">
        <span>动动三维</span>
      </a>
      <a href="https://www.kujiale.com/" target="_blank">
        <img src="../assets/images/kujiale.png" alt="">
        <span>酷家乐</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example'
}
</script>

<style scoped lang="less">
.sortItem {
  margin-bottom: 20px;
  .title {
    margin: 15px 10px;
    font-size: 22px;
    font-weight: 500;
    color: #6c84ff;
    cursor: default;

  }

  .imageLine {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;

      span {
        color: #464646;
      }
    }
  }
}

img {
  width: 300px;
  margin: 20px;
}

</style>
