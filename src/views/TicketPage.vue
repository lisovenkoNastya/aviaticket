<template>
  <BaseLayout class="ticket-page">
    <div class="clearfix mxn1">
      <div class="md-col md-col-4 px1"><TicketFilter /></div>
      <div class="md-col md-col-8 px1">
        <AppButtonToggle
          class="mb2"
          stretch
          :options="ticketSortingOptions"
          v-model="ticketSorting"
        ></AppButtonToggle>
        <TicketCard
          v-for="ticket in tickets"
          :key="ticket.id"
          :ticket-data="ticket"
          class="mb2"
        />
        <AppButton class="block" color="primary" stretch>
          Показать еще 5&nbsp;билетов
        </AppButton>
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
import { Ticket } from '@/interfaces/Ticket';

const tickets: Ticket[] = [
  {
    id: '9cf597f2-7bf1-4d67-9e04-9020ac26a9f8',
    info: {
      stops: ['HKG'],
      origin: 'PTB',
      dateEnd: 1660945803623,
      duration: 11520000,
      dateStart: 1659304203623,
      destination: 'JNB',
    },
    price: 4100,
    companyId: 'cddfa038-823b-43b1-b18d-395731881077',
  },
  {
    id: '76f847d3-63a0-4094-bdde-35647b000630',
    info: {
      stops: ['HKT', 'HKG'],
      origin: 'KRS',
      dateEnd: 1660686603624,
      duration: 10320000,
      dateStart: 1658353803624,
      destination: 'JNB',
    },
    price: 31300,
    companyId: 'cddfa038-823b-43b1-b18d-395731881077',
  },
  {
    id: '5048b977-b9cd-475f-8bfe-83e2448c1e2f',
    info: {
      stops: ['MOW'],
      origin: 'EKV',
      dateEnd: 1658872203624,
      duration: 14100000,
      dateStart: 1658008203624,
      destination: 'EKT',
    },
    price: 6700,
    companyId: '7dc12d0b-ce42-48a0-8673-0dad4d698764',
  },
  {
    id: '532375bb-2557-4687-a61b-403c0e0d7ba8',
    info: {
      stops: ['EKT'],
      origin: 'HKG',
      dateEnd: 1664574603624,
      duration: 8880000,
      dateStart: 1663451403624,
      destination: 'ARH',
    },
    price: 57400,
    companyId: 'cddfa038-823b-43b1-b18d-395731881077',
  },
  {
    id: '958aecea-d0ca-4128-b219-29d1806b0ce5',
    info: {
      stops: [],
      origin: 'MOW',
      dateEnd: 1659390603624,
      duration: 1860000,
      dateStart: 1657403403624,
      destination: 'ARH',
    },
    price: 12300,
    companyId: 'cddfa038-823b-43b1-b18d-395731881077',
  },
];

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

<style lang="scss" scoped></style>
