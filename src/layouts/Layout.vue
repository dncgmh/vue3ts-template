<script setup lang="ts">
  const routes = [
    {
      path: '/',
      icon: 'fas fa-laptop',
      name: 'Route1'
    },
    {
      path: '/wallet',
      icon: 'fas fa-wallet',
      name: 'Route2'
    }
  ];
</script>

<template>
  <el-container style="border: 1px solid #eee">
    <el-aside style="width: 200px; text-align: left; background-color: rgb(238, 241, 246)">
      <h4 style="padding-left: 20px">Dashboard</h4>
      <el-menu>
        <el-menu-item v-for="route of routes" :key="route.name">
          <i :class="route.icon"></i>
          &nbsp;
          <span>{{ route.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
