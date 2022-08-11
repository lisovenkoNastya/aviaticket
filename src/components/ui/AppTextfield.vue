<template>
  <AppInput>
    <input
      :type="type || 'text'"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="!!disabled"
      :maxlength="maxlength"
      @input="updateValue"
    />
  </AppInput>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from 'vue';
import AppInput from './AppInput.vue';

type InputType = 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';

interface AppTextfieldProps {
  name?: string;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
  modelValue?: string;
  maxlength?: number;
}

const props = defineProps<AppTextfieldProps>();
const { name, placeholder, type, modelValue, disabled } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event) {
  const { target } = event;
  emit('update:modelValue', (target as HTMLInputElement)?.value);
}
</script>

<style lang="scss" scoped></style>
