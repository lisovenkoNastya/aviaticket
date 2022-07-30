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
      @update:model-value="signal"
      v-model="(filterValue as any)[param.id]"
    ></TicketFilterCard>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { FilterParam, FilterValue } from '@/interfaces/FilterParams';
import TicketFilterCard from './TicketFilterCard.vue';

const filterParams: FilterParam[] = [
  {
    id: 'stopNumber',
    type: 'checkbox',
    title: 'Количество пересадок',
    options: [
      {
        text: 'Без пересадок',
        value: 0,
      },
      {
        text: '1 пересадка',
        value: 1,
      },
      {
        text: '2 пересадки',
        value: 2,
      },
      {
        text: '3 пересадки',
        value: 3,
      },
    ],
  },
  {
    id: 'company',
    type: 'radio',
    title: 'Компания',
    options: [
      {
        text: 'Все',
        value: 'all',
      },
      {
        text: 'S7 Airlines',
        value: 's7',
      },
      {
        text: 'Xiamen Air',
        value: 'xiamen',
      },
    ],
  },
];

const filterValue: FilterValue = reactive({
  stopNumber: [],
  company: 'all',
});

function signal() {
  console.log('it works');
}
</script>

<style scoped></style>
