<template>
  <label :for="id" :class="['app-radio', { 'app-radio--checked': isChecked }]">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="updateValue"
    />
    <span class="app-radio__control"></span>
    <span class="app-radio__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { defineProps, toRefs, computed, defineEmits } from 'vue';

interface AppRadioProps {
  id: string;
  name: string;
  label: string;
  value: number | string;
  modelValue: any;
}
const props = defineProps<AppRadioProps>();
const { id, name, label, value, modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(
  () => String(value.value) === String(modelValue.value),
);

function updateValue() {
  emit('update:modelValue', value.value);
}
</script>

<style scoped lang="scss">
.app-radio {
  cursor: pointer;
  user-select: none;

  [type='radio'] {
    display: none;
  }

  &__control {
    display: inline-block;
    vertical-align: middle;
    margin-right: 9px;
    margin-left: -1px;
    width: 22px;
    height: 22px;
    background: url('~@/assets/radio.svg') 0 0 no-repeat;
  }
  &--checked .app-radio__control {
    background: url('~@/assets/radio_checked.svg') 0 0 no-repeat;
  }

  &__label {
    vertical-align: middle;
    line-height: 1;
  }
}
</style>
