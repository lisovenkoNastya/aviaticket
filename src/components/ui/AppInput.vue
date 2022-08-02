<template>
  <div class="app-input">
    <slot :updateValue="updateValue">
      <input
        :type="type || 'text'"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="!!disabled"
        :maxlength="maxlength"
        @input="updateValue"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from 'vue';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface AppInputProps {
  name?: string;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
  modelValue?: string;
  maxlength?: number;
}

const props = defineProps<AppInputProps>();
const { name, placeholder, type, modelValue, disabled } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event | Date) {
  if (event instanceof Event) {
    const { target } = event;
    emit('update:modelValue', (target as HTMLInputElement)?.value);
  } else {
    emit('update:modelValue', event);
  }
}
</script>

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
