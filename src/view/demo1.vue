<template>
  <div>
    <div id="demoWrapper">
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref, toRefs} from 'vue'
import {
  Scene, // 场景构造器
  WebGLRenderer, // 使用webGl渲染场景
  PerspectiveCamera, // 透视相机
  PlaneGeometry, // 平面几何体
  MeshLambertMaterial, // 网格材质
  Mesh, // 网格
  Color, // 颜色
  BoxGeometry, // 立方体
  SphereGeometry, // 球体
  AxesHelper
} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js' // 对场景进行控制 缩放 平移 旋转 等

let scene, camera, planeGeometry, planeMaterial, plane, axes, cubeGeometry, cubeMaterial, cube, sphereGeometry,
    sphereMaterial, sphere, renderer, controls, floor  // 定义所有three实例变量

// 创建渲染器对象
const setRender = () => {
  console.log('创建渲染器对象');
  renderer = new WebGLRenderer() // 新建渲染器对象
  renderer.setSize(innerWidth, innerHeight) // 设置canvas尺寸  innerWidth, innerHeight 这俩变量哪里来的？？？
  // renderer.setSize(600, 600) // 设置canvas尺寸  innerWidth, innerHeight 这俩变量哪里来的？？？
  renderer.setClearColor(new Color(0xEEEEEE)); // 设置颜色和透明度
}

// 创建场景
const setScene = () => {
  console.log('创建场景');
  scene = new Scene() // 新建场景对象
  console.log(innerWidth, innerHeight);
  document.getElementById('demoWrapper').appendChild(renderer.domElement) // 插入渲染器对象创建好的dom节点
}


// 创建相机
const setCamera = () => {
  console.log('创建相机');
  camera = new PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000)
  // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
  // fov — 摄像机视锥体垂直视野角度
  // aspect — 摄像机视锥体长宽比
  // near — 摄像机视锥体近端面
  // far — 摄像机视锥体远端面
  camera.position.set(-30, 40, 30)
  camera.lookAt(scene.position)
}

// 创建平面模型
const setPlane = () => {
  planeGeometry = new PlaneGeometry(60, 20); //创建平面几何体
// PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)
// width — 平面沿着X轴的宽度。默认值是1。
// height — 平面沿着Y轴的高度。默认值是1。
// widthSegments — （可选）平面的宽度分段数，默认值是1。
// heightSegments — （可选）平面的高度分段数，默认值是1。
  planeMaterial = new MeshLambertMaterial({color: 0xaaaaaa}); // 创建平面材料
  plane = new Mesh(planeGeometry, planeMaterial);
  // plane.receiveShadow = true;
// rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  axes = new AxesHelper(20);
  scene.add(axes);
  scene.add(plane);
}

// 创建立方体

const setCube = () => {
  // create a cube
  cubeGeometry = new BoxGeometry(4, 4, 4);
  cubeMaterial = new MeshLambertMaterial({color: 0xff0000});
  cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;

// position the cube
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;

// add the cube to the scene
  scene.add(cube);
}

// 创建球体
const setSphereGeometry = () => {
  sphereGeometry = new SphereGeometry(4, 20, 20);
  sphereMaterial = new MeshLambertMaterial({color: 0x7777ff});
  sphere = new Mesh(sphereGeometry, sphereMaterial);
  // position the sphere
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  sphere.castShadow = true;
  // add the sphere to the scene
  scene.add(sphere);
}


//初始化所有函数
const init = async () => {
  setRender()
  setScene()
  setPlane()
  setCube()
  setSphereGeometry()
  setCamera()
  renderer.render(scene,camera)
}
//用vue钩子函数调用
onMounted(init)
</script>

<style lang="less">
body {
  margin: 0;
}

canvas {
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>

