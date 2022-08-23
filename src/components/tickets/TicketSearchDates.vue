<template>
  <div class="ticket-search-dates">
    <AppDatepicker
      class="ticket-search-dates__control shadow-3"
      placeholder="Когда"
      v-model="value.there"
    ></AppDatepicker>
    <AppDatepicker
      class="ticket-search-dates__control shadow-3"
      v-model="value.back"
      placeholder="Обратно"
    ></AppDatepicker>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import AppDatepicker from '../ui/AppDatepicker.vue';

const value = reactive({
  there: undefined,
  back: undefined,
});
</script>

<style scoped lang="scss">
.ticket-search-dates {
  display: inline-flex;
  &__control:not(:first-child) {
    margin-left: 2px;
  }
}
</style>
