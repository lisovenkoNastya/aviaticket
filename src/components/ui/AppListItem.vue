<template>
  <div class="app-list-item px2 py1">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-list-item {
  &:hover {
    background-color: $primary-bg;
  }
}
</style>
