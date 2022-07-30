<template>
  <label
    :for="id"
    :class="['app-checkbox', { 'app-checkbox--checked': isChecked }]"
  >
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="updateValue"
    />
    <span class="app-checkbox__control"></span>
    <span class="app-checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits, computed } from 'vue';

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  value?: number | string;
  // modelValue: boolean | Array<number | string> | undefined;
  modelValue: any;
}
const props = defineProps<CheckboxProps>();
const { id, name, label, value, modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() =>
  Array.isArray(modelValue.value)
    ? modelValue.value.map((x) => String(x)).includes(String(value?.value))
    : modelValue.value,
);

function updateValue(event: Event) {
  const { target } = event;
  const isInputChecked = (target as HTMLInputElement).checked;

  let newModelValue;
  if (Array.isArray(modelValue.value)) {
    newModelValue = isInputChecked
      ? [...modelValue.value, value?.value]
      : [...modelValue.value].filter((x) => String(x) !== String(value?.value));
  } else {
    newModelValue = value?.value;
  }
  emit('update:modelValue', newModelValue);
}
</script>

<style scoped lang="scss">
.app-checkbox {
  cursor: pointer;
  user-select: none;

  [type='checkbox'] {
    display: none;
  }

  &__control {
    display: inline-block;
    vertical-align: middle;
    margin-right: $space-1;
    width: 20px;
    height: 20px;
    background: url('~@/assets/checkbox.svg') 0 0 no-repeat;
  }
  &--checked .app-checkbox__control {
    background: url('~@/assets/checkbox_checked.svg') 0 0 no-repeat;
  }

  &__label {
    vertical-align: middle;
    line-height: 1;
  }
}
</style>
