<template>
<!--  <nav-bar/>-->
  <router-view></router-view>
</template>

<script>
import {defineComponent} from "vue";
// import NavBar from './components/NavBar.vue'

export default defineComponent({
  components: {
    // NavBar
  }
})

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
