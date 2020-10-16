<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#ccc"
      active-text-color="#000"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">Главная</span>
      </el-menu-item>

      <el-menu-item index="/order">
        <i class="el-icon-menu"></i>
        <span slot="title">Заказы</span>
      </el-menu-item>

      <el-menu-item index="/task">
        <i class="el-icon-menu"></i>
        <span slot="title">Задания на перевозку</span>
      </el-menu-item>

      <el-menu-item index="/users">
        <i class="el-icon-menu"></i>
        <span slot="title">Пользователи</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Справочники</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/handbooks/company"
            >Справочник компаний</el-menu-item
          >
          <el-menu-item index="/handbooks/weighing"
            >Справочник мест взвешивания</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>



<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>