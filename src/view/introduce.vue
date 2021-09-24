<template>
  <div class="finetriangle">
    <div class="sanjiao">
      <!-- 金字塔 -->
      <div :class="['sj',`sj${item.id}`]" v-for="item in lists" :key="item.id" @click="change(item)"></div>
      <!-- 中间文字 -->
      <div :class="['describe',`describe${item.id}`]" v-for="item in lists" :key="item.id" @click="change(item)">
        {{ item.title }}
      </div>
    </div>
    <div class="desc">
      <div class="descContent" v-if="currentDesc">{{ currentDesc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduce',
  data() {
    return {
      currentDesc: '',
      lists: [
        {
          id: 1,
          title: 'Three.js',
          desc: '原生的WebGl接口涉及图形学，算法，计算机底层原理相关的知识，直接通过WebGl直接编写程序比较麻烦，学习成本比较高，three.js在它的基础上进行了进一步的封装和简化开发开发过程。'
        },
        {
          id: 2,
          title: 'Canvas',
          desc: 'Canvas是HTML5引入的新标签，用于做图形容器，Canvas Api主要聚焦于2D图形。'
        },
        {
          id: 3,
          title: 'WebGL',
          desc: 'WebGL是一种JavaScript API，用于在不使用插件的情况下在任何兼容的网页浏览器中呈现交互式2D和3D图形，WebGL 实现了使用js调用封装过的OpenGL ES2.0标准接口实现3D功能。 WebGL 无论如何都需要一个显示对象来呈现，这个对象就是 Canvas，仅此而已，WebGL不对Canvas有任何附加的操作API， 那部分属于浏览器js支持的范畴。'
        },
        {
          id: 4,
          title: 'OpenGL',
          desc: 'Open Graphics Library,开放式图形库，描述了绘制2D和3D图形的抽象API,由近350个不同的函数调用组成，用来从简单的图形绘制复杂的三维景象。纯粹专注于渲染，与语言与平台无关：JavaScript绑定的WebGL（基于OpenGL ES 2.0在Web浏览器中的进行3D渲染的API）；C绑定的WGL、GLX和CGL；iOS提供的C绑定；Android提供的Java和C绑定。(OpenGl是和显卡有直接关系的底层的驱动级图形接口)'
        }
      ]
    }
  },
  methods: {
    change(item) {
      this.currentDesc = item.desc;
      console.log(item.desc);
    }
  }
}
</script>

<style scoped lang="less">
body {
  width: 100%;
  height: 100%;
}

.finetriangle {
  width: 100%;
  height: 100vh;
  background: #082449;
  display: flex;
  align-items: center;
  overflow: hidden;

  .desc {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .descContent{
      width: 400px;
      height: 300px;
      background: #b9b9b9;
      text-align: left;
      border-radius: 10px;
      padding: 20px;
      color: black;
      font-size: 16px;
      line-height: 24px;
    }
  }
}

.finetriangle .sanjiao {
  width: 308px;
  margin: 0 auto;
  position: relative;
  padding-right: 30px;
  margin-left: 100px;
}

.finetriangle .sj {
  cursor: pointer;
  margin: 0 auto;
  height: 0;
  border-top: 0 solid transparent;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom-width: 80px;
  border-bottom-style: solid;
  box-sizing: content-box;
  margin-bottom: 9px;
}

.finetriangle .sj1 {
  width: 100px;
  border-bottom-color: #ff0086;
  box-shadow: 0 10px 0 0 #cc007e;
}

.finetriangle .sj2 {
  width: 200px;
  border-bottom-color: #ff3600;
  box-shadow: 0 10px 0 0 #ce1d00;
}

.finetriangle .sj3 {
  width: 300px;
  border-bottom-color: #ff7f00;
  box-shadow: 0 10px 0 0 #d16800;
}

.finetriangle .sj4 {
  width: 400px;
  border-bottom-color: #ffc94d;
  box-shadow: 0 10px 0 0 #e5912e;
  margin-left: -49px;
}


.finetriangle .comarow {
  font-size: 12px;
  position: absolute;
}

.finetriangle .line {
  display: inline-block;
  height: 1px;
  margin-bottom: 5px;
}

.finetriangle .value {
  font-size: 18px;
}

.finetriangle .descsj1 {
  top: 5px;
  margin-left: 146px;
  color: #ff0086;
}

.finetriangle .descsj1 .line {
  width: 100px;
  background: #ff0086;
}

.finetriangle .descsj2 {
  top: 41px;
  margin-left: 166px;
  color: #ff3600;
}

.finetriangle .descsj2 .line {
  width: 80px;
  background: #ff3600;
}

.finetriangle .descsj3 {
  top: 81px;
  margin-left: 186px;
  color: #ff7f00;
}

.finetriangle .descsj3 .line {
  width: 60px;
  background: #ff7f00;
}

.finetriangle .descsj4 {
  top: 119px;
  margin-left: 206px;
  color: #ffc94d;
}

.finetriangle .descsj4 .line {
  width: 40px;
  background: #ffc94d;
}

.finetriangle .descsj5 {
  top: 159px;
  margin-left: 226px;
  color: #67ce67;
}

.finetriangle .descsj5 .line {
  width: 20px;
  background: #67ce67;
}

.finetriangle .describe {
  cursor: pointer;
  position: absolute;
  margin-left: 135px;
  font-size: 16px;
  color: #ffffff;
}

.finetriangle .describe1 {
  top: 32px;
}

.finetriangle .describe2 {
  top: 125px;
}

.finetriangle .describe3 {
  top: 215px;
}

.finetriangle .describe4 {
  top: 305px;
}

.finetriangle .describe5 {
  top: 163px;
}
</style>
