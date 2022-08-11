<template>
  <div class="app-input">
    <slot name="label"></slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-input {
  display: inline-block;
  & :deep(input) {
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: white;
    border: 0;
    outline: 0;
    font-size: 15px;
    font-family: $body-font-family;
    border-radius: $border-radius;
    text-transform: inherit;
    box-sizing: border-box;
    width: 100%;

    &:focus,
    &:active {
      box-shadow: 0px 0px 0px 2px $accent;
    }
  }
}
</style>
