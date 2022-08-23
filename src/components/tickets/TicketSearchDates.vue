<template>
  <div class="ticket-search-dates">
    <AppDatepicker
      class="ticket-search-dates__control shadow-3"
      placeholder="Когда"
      :model-value="datesSelected.there"
      @update:model-value="updateValue($event, 'there')"
      clearable
    ></AppDatepicker>
    <AppDatepicker
      class="ticket-search-dates__control shadow-3"
      :model-value="datesSelected.back"
      placeholder="Обратно"
      @update:model-value="updateValue($event, 'back')"
      clearable
      :lower-limit="datesSelected.there"
    ></AppDatepicker>
  </div>
</template>

<script setup lang="ts">
import useTicketSearch from '@/composables/useTicketSearch';
import AppDatepicker from '../ui/AppDatepicker.vue';

const { datesSelected, updateDates } = useTicketSearch();

function updateValue(newValue: Date, key: string) {
  updateDates({
    ...datesSelected.value,
    [key]: newValue,
  });
}
</script>

<style scoped lang="scss">
.ticket-search-dates {
  display: inline-flex;
  &__control:not(:first-child) {
    margin-left: 2px;
  }
}
</style>
