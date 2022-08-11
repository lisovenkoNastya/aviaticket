<template>
  <div class="ticket-search">
    <TicketSearchDirection class="ticket-search__direction" />
    <TicketSearchDates />
  </div>
</template>

<script setup lang="ts">
import TicketSearchDirection from './TicketSearchDirection.vue';
import TicketSearchDates from './TicketSearchDates.vue';
</script>

<style scoped lang="scss">
.ticket-search {
  display: flex;
  &__direction {
    margin-right: 2px;
  }
}
</style>
