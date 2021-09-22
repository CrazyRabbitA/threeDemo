<template>
  <div class="finetriangle">
    <div class="sanjiao">
      <!-- 金字塔 -->
      <div class="sj sj1"></div>
      <div class="sj sj2"></div>
      <div class="sj sj3"></div>
      <div class="sj sj4"></div>
      <div class="sj sj5"></div>
      <!-- 右侧数据填入 -->
      <div class="comarow descsj1">
        <span class="line"></span>
        <span class="value" id="hgwvalue">0</span>
      </div>
      <div class="comarow descsj2">
        <span class="line"></span>
        <span class="value" id="gwvalue">0</span>
      </div>
      <div class="comarow descsj3">
        <span class="line"></span>
        <span class="value" id="zgwvalue">0</span>
      </div>
      <div class="comarow descsj4">
        <span class="line"></span>
        <span class="value" id="zwvalue">0</span>
      </div>
      <div class="comarow descsj5">
        <span class="line"></span>
        <span class="value" id="dwvalue">0</span>
      </div>
      <!-- 中间文字 -->
      <div class="describe describe1"></div>
      <div class="describe describe2">Three.js</div>
      <div class="describe describe3">Canvas</div>
      <div class="describe describe4">WebGL</div>
      <div class="describe describe5">OpenGL</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pyramid'
}
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}

.finetriangle {
  width: 100%;
  height: 100vh;
  background: #082449;
}

.finetriangle .sanjiao {
  width: 308px;
  margin: 0 auto;
  position: relative;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  top: 46%;
  padding-right: 30px;
}

.finetriangle .sj {
  margin: 0 auto;
  height: 0;
  border-top: 0 solid transparent;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom-width: 30px;
  border-bottom-style: solid;
  box-sizing: content-box;
  margin-bottom: 9px;
}

.finetriangle .sj1 {
  width: 0;
  border-bottom-color: #ff0086;
  box-shadow: 0 10px 0 0 #cc007e;
}

.finetriangle .sj2 {
  width: 40px;
  border-bottom-color: #ff3600;
  box-shadow: 0 10px 0 0 #ce1d00;
}

.finetriangle .sj3 {
  width: 80px;
  border-bottom-color: #ff7f00;
  box-shadow: 0 10px 0 0 #d16800;
}

.finetriangle .sj4 {
  width: 120px;
  border-bottom-color: #ffc94d;
  box-shadow: 0 10px 0 0 #e5912e;
}

.finetriangle .sj5 {
  width: 160px;
  border-bottom-color: #67ce67;
  box-shadow: 0 10px 0 0 #499c49;
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
  font-size: 16px;
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
  position: absolute;
  margin-left: 135px;
  font-size: 12px;
  color: #ffffff;
}

.finetriangle .describe1 {
  top: 10px;
}

.finetriangle .describe2 {
  top: 46px;
}

.finetriangle .describe3 {
  top: 86px;
}

.finetriangle .describe4 {
  top: 124px;
}

.finetriangle .describe5 {
  top: 163px;
}
</style>
