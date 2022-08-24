<template>
  <BaseLayout class="ticket-page">
    <TicketSearch></TicketSearch>
    <hr />
    <div class="clearfix mxn1">
      <div class="md-col md-col-4 px1"><TicketFilter /></div>
      <div class="md-col md-col-8 px1">
        <TicketSorting class="mb2"></TicketSorting>
        <template v-if="state === 'loading'">loading...</template>
        <template v-if="state === 'failure'"> Что-то пошло не так. Попробуйте перезагрузить страницу </template>
        <template v-if="state === 'ready'">
          <temlate v-if="ticketsPaginated.length > 0">
            <TicketCard v-for="ticket in ticketsPaginated" :key="ticket.id" :ticket-data="ticket" class="mb2" />
            <PaginationButton
              v-if="ticketsFiltered.length > ticketCount"
              v-model="ticketCount"
              :step="TICKET_COUNT_DEFAULT"
              class="block"
              color="primary"
              stretch
            >
              Показать еще 5&nbsp;билетов
            </PaginationButton>
          </temlate>
          <template v-else>Мы не нашли подходящих билетов. Попробуйте изменить условия поиска.</template>
        </template>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { Ref, ref, readonly, watch } from 'vue';

import BaseLayout from '@/layouts/BaseLayout.vue';
import TicketCard from '@/components/tickets/TicketCard.vue';
import TicketFilter from '@/components/tickets/TicketFilter.vue';
import TicketSearch from '@/components/tickets/TicketSearch.vue';
import TicketSorting from '@/components/tickets/TicketSorting.vue';
import PaginationButton from '@/components/tickets/PaginationButton.vue';

import useTickets from '@/composables/useTickets';
import useStopNumberFilter from '@/composables/useStopNumberFilter';
import useCompanyFilter from '@/composables/useCompanyFilter';
import useTicketSearch from '@/composables/useTicketSearch';
import useTicketSorting from '@/composables/useTicketSorting';

const TICKET_COUNT_DEFAULT = 5;

const { stopNumberSelected } = useStopNumberFilter();
const { companySelected } = useCompanyFilter();
const { directionSelected, datesSelected } = useTicketSearch();
const { sortingMode } = useTicketSorting();
const ticketCount: Ref<number> = ref(TICKET_COUNT_DEFAULT);

const { ticketsFiltered, ticketsPaginated, state } = useTickets({
  stopNumbers: stopNumberSelected,
  company: companySelected,
  direction: directionSelected,
  dates: datesSelected,
  sorting: sortingMode,
  count: readonly(ticketCount),
});

watch([stopNumberSelected, companySelected, directionSelected, datesSelected, sortingMode], () => {
  ticketCount.value = TICKET_COUNT_DEFAULT;
});
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
