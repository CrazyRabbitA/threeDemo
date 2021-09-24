<template>
  <div class="boxs">
    <div class="maskLoading" v-if="isLoading">
      <div class="loading">
        <div :style="{width : loadingWidth +'%' }"></div>
      </div>
      <div style="padding-left: 10px;">{{ parseInt(loadingWidth) }}%</div>
    </div>
    <div class="mask">
      <p>x : {{ x }} y:{{ y }} z :{{ z }}</p>
      <img class="routeIcon" src="../assets/rotate.png" @click="isAutoFun">
      <img class="pauseIcon" src="../assets/pause.png" @click="stop">
      <div class="colorSelect">
        <div class="colorItem" @click="setCarColor(index)" v-for="(item,index) in colorAry"
             :style="{backgroundColor : item}"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref, toRefs} from 'vue'
import {
  Color, // 颜色构造器
  DirectionalLight, // 平行光
  DirectionalLightHelper, // 平行光 DirectionalLight 的辅助对象. 其中包含了表示光位置的平面和表示光方向的线段.
  HemisphereLight, // 半球光 光源直接放置于场景之上，光照颜色从天空光线颜色颜色渐变到地面光线颜色。
  HemisphereLightHelper, // 半球光辅助对象
  PerspectiveCamera, // 透视相机
  Scene, // 场景构造器
  WebGLRenderer // 使用webGl渲染场景
} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js' // 对场景进行控制 缩放 平移 旋转 等
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader' // 用于加载3D模型
//车身颜色数组
const colorAry = [
  "rgb(216, 27, 67)", "rgb(142, 36, 170)", "rgb(81, 45, 168)", "rgb(48, 63, 159)", "rgb(30, 136, 229)", "rgb(0, 137, 123)",
  "rgb(67, 160, 71)", "rgb(251, 192, 45)", "rgb(245, 124, 0)", "rgb(230, 74, 25)", "rgb(233, 30, 78)", "rgb(156, 39, 176)",
  "rgb(0, 0, 0)"] // 车身颜色数组
const loader = new GLTFLoader() //引入模型的loader实例
const defaultMap = {
  x: 510,
  y: 128,
  z: 0,
}// 相机的默认坐标
const map = reactive(defaultMap) // 把相机坐标设置成可观察对象
const {x, y, z} = toRefs(map) // 输出坐标给模板使用
let scene, camera, renderer, controls, floor, dhelper, hHelper, directionalLight, hemisphereLight // 定义所有three实例变量
let isLoading = ref(true) //是否显示loading  这个load模型监听的进度
let loadingWidth = ref(0)// loading的进度

//创建灯光
const setLight = () => {
  directionalLight = new DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(-4, 8, 4)
  dhelper = new DirectionalLightHelper(directionalLight, 5, 0xff0000)
  hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 0.4)
  hemisphereLight.position.set(0, 8, 0)
  hHelper = new HemisphereLightHelper(hemisphereLight, 5)
  scene.add(directionalLight)
  scene.add(hemisphereLight)
}

// 创建场景
const setScene = () => {
  scene = new Scene()
  renderer = new WebGLRenderer()
  renderer.setSize(innerWidth, innerHeight)
  document.querySelector('.boxs').appendChild(renderer.domElement)

}

// 创建相机
const setCamera = () => {
  const {x, y, z} = defaultMap
  camera = new PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000)
  camera.position.set(x, y, z)
}

// 设置模型控制
const setControls = () => {
  controls = new OrbitControls(camera, renderer.domElement)
  controls.maxPolarAngle = 0.9 * Math.PI / 2
  controls.enableZoom = true
  controls.addEventListener('change', render)
}

//返回坐标信息
const render = () => {
  map.x = Number.parseInt(camera.position.x)
  map.y = Number.parseInt(camera.position.y)
  map.z = Number.parseInt(camera.position.z)
}


// 循环场景 、相机、 位置更新
const loop = () => {
  requestAnimationFrame(loop)
  renderer.render(scene, camera)
  controls.update()
}


//是否自动转动
const isAutoFun = () => {
  controls.autoRotate = true
}
//停止转动
const stop = () => {
  controls.autoRotate = false
}

//设置车身颜色
const setCarColor = (index) => {
  const currentColor = new Color(colorAry[index])
  scene.traverse(child => {
    if (child.isMesh) {
      console.log(child.name)
      if (child.name.includes('door_')) {
        child.material.color.set(currentColor)
      }
    }
  })
}

const loadFile = (url) => {
  return new Promise(((resolve, reject) => {
    loader.load(url,
        (gltf) => {
          resolve(gltf)
        }, ({loaded, total}) => {
          let load = Math.abs(loaded / total * 100)
          loadingWidth.value = load
          if (load >= 100) {
            setTimeout(() => {
              isLoading.value = false
            }, 1000)
          }
          console.log((loaded / total * 100) + '% loaded')
        },
        (err) => {
          reject(err)
        }
    )
  }))
}


//初始化所有函数
const init = async () => {
  setScene()
  setCamera()
  setLight()
  setControls()
  const gltf = await loadFile('src/assets/3d/tesla_2018_model_3/scene.gltf')
  scene.add(gltf.scene)
  loop()
}
//用vue钩子函数调用
onMounted(init)
</script>

<style lang="less">
body {
  margin: 0;
}

.maskLoading {
  background: #000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1111111;
  color: #fff;

  .loading {
    width: 400px;
    height: 20px;
    border: 1px solid #fff;
    background: #000;
    overflow: hidden;
    border-radius: 10px;

    div {
      background: #fff;
      height: 20px;
      width: 0;
      transition-duration: 500ms;
      transition-timing-function: ease-in;
    }
  }
}

canvas {
  width: 100%;
  height: 100%;
  margin: auto;
}

.mask {
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .routeIcon, .pauseIcon {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
}

.colorSelect {
  position: fixed;
  flex-direction: column;
  left: 0;
  top: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  transform: translateY(-50%);

  .colorItem {
    width: 20px;
    height: 20px;
    margin: 5px;
    cursor: pointer;
  }
}

</style>

