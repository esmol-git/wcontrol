<template>
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/order">Order</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/task">Task</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/users">Users</router-link>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title">Handbook</template>
      <el-menu-item index="5-1">
        <router-link tag="el-menu-item" to="/handbooks/company"
          >Company</router-link
        >
      </el-menu-item>
      <el-menu-item index="5-2">
        <router-link tag="el-menu-item" to="/handbooks/transport"
          >Transport</router-link
        >
      </el-menu-item>
      <el-menu-item index="5-3">
        <router-link tag="el-menu-item" to="/handbooks/weighing"
          >Weighing</router-link
        >
      </el-menu-item>
      <el-menu-item index="5-4">
        <router-link tag="el-menu-item" to="/handbooks/scales"
          >Scales</router-link
        >
      </el-menu-item>
      <el-menu-item index="5-5">
        <router-link tag="el-menu-item" to="/handbooks/unit">Unit</router-link>
      </el-menu-item>
      <el-menu-item index="5-6">
        <router-link tag="el-menu-item" to="/handbooks/goods"
          >Goods</router-link
        >
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="6">
      <router-link to="/reports">Reports</router-link>
    </el-menu-item>
    <el-menu-item index="7">
      <router-link to="/settings">Settings</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>