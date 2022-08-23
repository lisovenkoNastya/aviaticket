<template>
  <AppButtonToggle
    stretch
    :options="SORTING_OPTIONS"
    :model-value="sortingMode"
    @update:model-value="updateValue"
  ></AppButtonToggle>
</template>

<script setup lang="ts">
import { SORTING_OPTIONS } from '@/constants/sortingConstants';
import AppButtonToggle from '@/components/ui/AppButtonToggle.vue';
import { TicketSortingMode } from '@/interfaces/TicketSortingMode';
import useTicketSorting from '@/composables/useTicketSorting';

const { sortingMode, updateSortingMode } = useTicketSorting();

function updateValue(newValue: TicketSortingMode) {
  updateSortingMode(newValue);
}
</script>

<style scoped></style>
