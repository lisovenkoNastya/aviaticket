<template>
  <AppButton v-bind="$attrs" @click="updateValue"> <slot></slot> </AppButton>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';

interface PaginationButtonProps {
  shownItemsCount: number;
  itemsPerPage: number;
}

const props = defineProps<PaginationButtonProps>();
const { shownItemsCount, itemsPerPage } = toRefs(props);

const emit = defineEmits(['update:shownItemsCount']);

function updateValue() {
  emit('update:shownItemsCount', shownItemsCount.value + itemsPerPage.value);
}
</script>

<style scoped></style>
