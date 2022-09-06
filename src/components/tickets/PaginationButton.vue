<template>
  <AppButton v-bind="$attrs" @click="updateValue"> <slot></slot> </AppButton>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from 'vue';
import AppButton from '../ui/AppButton.vue';

interface PaginationButtonProps {
  modelValue: number;
  step: number;
}

const props = defineProps<PaginationButtonProps>();
const { modelValue, step } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

function updateValue() {
  emit('update:modelValue', modelValue.value + step.value);
}
</script>

<style scoped></style>
