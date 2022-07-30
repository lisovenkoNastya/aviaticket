<template>
  <div class="base-layout">
    <div class="center mt05 mb1">
      <img alt="Vue logo" src="../assets/logo.svg" />
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.base-layout {
  padding-bottom: 100px;
}
</style>
