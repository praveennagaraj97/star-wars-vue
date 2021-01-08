<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from "./components/Layout";

export default {
  components: {
    Layout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
