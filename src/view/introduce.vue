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
          desc: 'threejs的描述'
        },
        {
          id: 2,
          title: 'Canvas',
          desc: 'canvas的描述'
        },
        {
          id: 3,
          title: 'WebGL',
          desc: 'webgl'
        },
        {
          id: 4,
          title: 'OpenGL',
          desc: 'opengl的描述'
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
