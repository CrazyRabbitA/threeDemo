<template>
  <div class="sortItem">
    <div class="title">在线商品预览</div>
    <div class="imageLine">
      <a href="http://suit.xuantech.cn/" target="_blank">
        <img src="../assets/images/cloth.png" alt="">
        <span>服装定制</span>
      </a>
      <a href="http://app.xuanke3d.com/apps/trayton/#/" target="_blank">
        <img src="../assets/images/sofa.png" alt="">
        <span>沙发定制</span>
      </a>
      <a href="https://cdn.weshape3d.com/hir001/1021/web/index.html" target="_blank">
        <img src="../assets/images/washingMachine.png" alt="">
        <span>洗衣机展示</span>
      </a>
    </div>
  </div>
  <div class="sortItem">
    <div class="title">3D实景</div>
    <div class="imageLine">
      <a href="http://www.yanhuangxueyuan.com/3D/houseDesign/index.html" target="_blank">
        <img src="../assets/images/room.png" alt="">
        <span>在线看房</span>
      </a>
      <a href="https://zz.ke.com/" target="_blank">
        <img src="../assets/images/shell.png" alt="">
        <span>贝壳</span>
      </a>
      <a href="http://beyond.3dnest.cn/play/?m=zhq_xzdzbwgc_699" target="_blank">
        <img src="../assets/images/hall.png" alt="">
        <span>在线展厅</span>
      </a>
    </div>

  </div>
  <div class="sortItem">
    <div class="title">3D图表</div>
    <div class="imageLine">
      <a href="http://www.yanhuangxueyuan.com/3D/liangcang/index.html" target="_blank">
        <img src="../assets/images/factory.png" alt="">
        <span>3D粮仓展示</span>
      </a>
      <a href="http://www.yanhuangxueyuan.com/3D/geojsonChina/index.html" target="_blank">
        <img src="../assets/images/map.jpg" alt="">
        <span>GDP地图</span>
      </a>
    </div>
  </div>
  <div class="sortItem">
    <div class="title">H5/微信小游戏</div>
    <div class="imageLine">
      <a href="">
        <img src="../assets/images/jump.jpg" alt="">
        <span>微信小游戏</span>
      </a>
    </div>
  </div>
  <div class="sortItem">
    <div class="title">科教/机械设计</div>
    <div class="imageLine">
      <a href="http://www.yanhuangxueyuan.com/3D/solarSystem/index.html" target="_blank">
        <img src="../assets/images/taiyangxi.png" alt="">
        <span>太阳系</span>
      </a>
      <a href="http://www.mms3d.cn/AES/B002dgj/#/" target="_blank">
        <img src="../assets/images/jixie.png" alt="">
        <span>机械加工</span>
      </a>
    </div>
  </div>
  <div class="more">
    <a href="https://www.webgl3d.cn/threejs/examples/#webgl_animation_keyframes" target="_blank">代码案例</a>
  </div>
  <div class="more">
    <a href="https://threejs.org/examples/" target="_blank">More Case</a>
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

.more {
  color: red;
  text-decoration: none;
  margin: 40px;
  font-size: 30px;
}

img {
  width: 300px;
  margin: 20px;
}

</style>
