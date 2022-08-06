<template>
  <app-sheet class="ticket-card shadow-3">
    <div class="ticket-card__top flex items-center justify-between mb2">
      <div class="ticket-card__price h3 line-height-1" v-format-number>
        {{ ticketData.price }} Р
      </div>
      <div class="ticket-card__price">
        <img class="block" :src="currentCompanyLogo" />
      </div>
    </div>
    <div class="ticket-card__bottom flex items-center justify-between">
      <div class="ticket-card__route col-4">
        <div class="subheading text-muted">
          {{ ticketData.info.origin }} – {{ ticketData.info.destination }}
        </div>
        <div>10:45 – 08:00</div>
      </div>
      <div class="ticket-card__duration col-4">
        <div class="subheading text-muted">В пути</div>
        <div>{{ Math.round(ticketData.info.duration / MS_IN_HOUR) }} ч</div>
      </div>
      <div class="ticket-card__stops col-4">
        <template v-if="ticketData.info.stops.length">
          <div class="subheading text-muted">
            {{ ticketData.info.stops.length }} пересадки
          </div>
          <div>{{ ticketData.info.stops.join(', ') }}</div>
        </template>
        <div v-else class="subheading text-muted">Без пересадок</div>
      </div>
    </div>
  </app-sheet>
</template>

<script setup lang="ts">
import { defineProps, toRefs, computed, DeepReadonly } from 'vue';
import { Ticket } from '@/interfaces/Ticket';
import AppSheet from '@/components/ui/AppSheet.vue';
import useComapanies from '@/composables/useCompanies';
import vFormatNumber from '@/directives/vFormatNumber';

const MS_IN_HOUR = 3600000;

interface TicketCardProps {
  ticketData: DeepReadonly<Ticket>;
}
const props = defineProps<TicketCardProps>();
const { ticketData } = toRefs(props);
const { getCompanyLogo } = useComapanies();

const currentCompanyLogo = computed(() =>
  getCompanyLogo(ticketData.value.companyId),
);
</script>

<style scoped lang="scss">
.ticket-card {
  &__price {
    color: $primary;
  }
}
</style>