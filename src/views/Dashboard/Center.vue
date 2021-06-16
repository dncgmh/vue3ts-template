<script setup lang="ts">
  const size = 'large';
</script>
<template>
  <el-space direction="vertical" alignment="start" :size="30">
    <el-space wrap :size="size">
      <el-card v-for="i in 3" :key="i" class="box-card" style="width: 400px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </el-space>
  </el-space>
</template>

<style></style>
