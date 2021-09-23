<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router="true"
  >
    <el-menu-item index="/">Main</el-menu-item>
    <el-menu-item index="/introduce">Introduce</el-menu-item>
    <el-menu-item index="/example">Example</el-menu-item>
    <el-menu-item index="/other">Other</el-menu-item>
    <el-menu-item index="/car">Demo</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/',
    }
  },
  methods: {
  },
}
</script>
