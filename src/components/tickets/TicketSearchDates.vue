<template>
  <div class="ticket-search-dates">
    <AppDatepicker
      class="ticket-search-dates__control shadow-3"
      placeholder="Когда"
      :model-value="datesSelected.there"
      @update:model-value="updateDateThere"
      clearable
    ></AppDatepicker>
    <AppDatepicker
      class="ticket-search-dates__control shadow-3"
      :model-value="datesSelected.back"
      placeholder="Обратно"
      @update:model-value="updateDateBack"
      clearable
      :lower-limit="datesSelected.there"
    ></AppDatepicker>
  </div>
</template>

<script setup lang="ts">
import useTicketSearch from '@/composables/useTicketSearch';
import AppDatepicker from '@/components/ui/AppDatepicker.vue';

const { datesSelected, updateDateBack, updateDateThere } = useTicketSearch();
</script>

<style scoped lang="scss">
.ticket-search-dates {
  display: inline-flex;
  &__control:not(:first-child) {
    margin-left: 2px;
  }
}
</style>
