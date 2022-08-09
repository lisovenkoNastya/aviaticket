<template>
  <label :for="id" :class="['app-radio', { 'app-radio--checked': isChecked }]">
    <input type="radio" :id="id" :name="name" :value="value" :checked="isChecked" @change="updateValue" />
    <span :class="['app-radio__control', 'mdi', `mdi-radiobox-${isChecked ? 'marked' : 'blank'}`]"></span>
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
  modelValue: number | string;
}
const props = defineProps<AppRadioProps>();
const { id, name, label, value, modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => String(value.value) === String(modelValue.value));

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
    margin-right: $space-1;
    margin-left: -2px;
    width: 24px;
    height: 24px;
    font-size: 24px;
    line-height: 1;
    color: $primary;
  }

  &__label {
    vertical-align: middle;
    line-height: 1;
  }
}
</style>
