<template>
  <div class="ticket-filter">
    <TicketFilterCard
      v-for="param in filterParams"
      :key="param.id"
      class="mb2 shadow-3"
      :id="param.id"
      :title="param.title"
      :options="param.options"
      :type="param.type"
      :model-value="(filterValue as any)[param.id]"
      @update:model-value="updateFilterValue(param.id, $event)"
    ></TicketFilterCard>
  </div>
</template>

<script setup lang="ts">
import useFilter from '@/composables/useFilter';
import TicketFilterCard from './TicketFilterCard.vue';

const { filterParams, filterValue, updateFilterValue } = useFilter();
</script>

<style scoped></style>
