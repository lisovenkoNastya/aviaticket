<template>
  <div :class="['app-button-toggle', { stretch }]">
    <AppButton
      class="app-button-toggle__item"
      v-for="(option, index) in options"
      :key="index"
      :color="option.value === modelValue ? 'primary' : undefined"
      :outlined="option.value !== modelValue"
      @click="updateValue(option.value)"
    >
      {{ option.text }}
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';

interface AppButtonToggleProps {
  options: Array<Record<'value' | 'text', string | number>>;
  stretch?: boolean;
  modelValue?: string | number;
}

const props = defineProps<AppButtonToggleProps>();
const { options } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

function updateValue(newValue: string | number) {
  emit('update:modelValue', newValue);
}
</script>

<style scoped lang="scss">
.app-button-toggle {
  display: inline-flex;

  &.stretch {
    display: flex;
    .app-button-toggle__item {
      flex-grow: 1;
      &:not(:first-child) {
        margin-left: -1px;
      }
    }
  }

  &__item {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
