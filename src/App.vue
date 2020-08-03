<template>
  <div id="app">
    <router-view></router-view>
    <miantabbar></miantabbar>
  </div>
</template>

<script>
import "@/assets/css/base.css"
import miantabbar from "@/components/content/mainTabbar/miantabbar";
export default {
  name: 'App',
  components: {
      miantabbar
  }
}
</script>

<style>

</style>
