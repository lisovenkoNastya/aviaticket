<template>
  <BaseLayout class="ticket-page">
    <TicketSearch></TicketSearch>
    <hr />
    <div class="clearfix mxn1">
      <div class="md-col md-col-4 px1"><TicketFilter /></div>
      <div class="md-col md-col-8 px1">
        <AppButtonToggle class="mb2" stretch :options="ticketSortingOptions" v-model="ticketSorting"></AppButtonToggle>
        <template v-if="state === 'loading'">loading...</template>
        <template v-if="state === 'failure'"> Что-то пошло не так. Попробуйте перезагрузить страницу </template>
        <template v-if="state === 'empty'">
          Мы не нашли подходящих билетов. Попробуйте изменить условия поиска.
        </template>
        <template v-if="state === 'full'">
          <TicketCard v-for="ticket in tickets?.slice(0, 5)" :key="ticket.id" :ticket-data="ticket" class="mb2" />
          <AppButton class="block" color="primary" stretch> Показать еще 5&nbsp;билетов </AppButton>
        </template>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppButtonToggle from '@/components/ui/AppButtonToggle.vue';
import TicketCard from '@/components/tickets/TicketCard.vue';
import TicketFilter from '@/components/tickets/TicketFilter.vue';
import TicketSearch from '@/components/tickets/TicketSearch.vue';
import useTickets from '@/composables/useTickets';

const { tickets, state } = useTickets();
const ticketSortingOptions: Record<'text' | 'value', string | number>[] = [
  {
    text: 'Самый дешевый',
    value: 'cheapest',
  },
  {
    text: 'Самый быстрый',
    value: 'fastest',
  },
  {
    text: 'Оптимальный',
    value: 'optimal',
  },
];
const ticketSorting = ref('cheapest');
</script>

<style lang="scss" scoped>
hr {
  background-color: $border-color;
  height: 1px;
  border: 0;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
