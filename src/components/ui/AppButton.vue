<template>
  <button
    :class="['app-button', 'subheading', color, { outlined, stretch }]"
    :type="type || 'button'"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';

interface AppButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'accent';
  label?: string;
  outlined?: boolean;
  stretch?: boolean;
}

const props = defineProps<AppButtonProps>();
const { type, color, label, outlined, stretch } = toRefs(props);
</script>

<style lang="scss" scoped>
.app-button {
  height: $button-height;
  background-color: white;
  color: $text-color;
  padding: 0 15px;
  border-radius: $border-radius;
  border: 0;
  outline: 0;
  font-family: $heading-font-family;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid white;
  line-height: calc(#{$button-height} - 2px);

  &:hover {
    background-color: $primary-bg;
    border-color: $primary-bg;
  }
  &:active {
    background-color: darken($primary-bg, 2%);
  }

  &.primary {
    background-color: $primary;
    border-color: $primary;
    color: white;

    &:hover {
      background-color: darken($primary, 10%);
      border-color: darken($primary, 10%);
    }
    &:active {
      border-color: darken($primary, 12%);
    }
  }

  &.stretch {
    width: 100%;
  }

  &.outlined {
    border: 1px solid $border-color;
  }
}
</style>
