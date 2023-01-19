<template>
  <div class="app px-5 py-5">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(245, 245, 245);
}
</style>
