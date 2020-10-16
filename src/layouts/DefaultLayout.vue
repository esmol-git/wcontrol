<template>
  <div>
    <navbar />
    <sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import sidebar from "@/components/Sidebar";
export default {
  components: {
    navbar,
    sidebar
  }
};
</script>

<style lang="scss">
</style>