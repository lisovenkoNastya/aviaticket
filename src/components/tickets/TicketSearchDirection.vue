<template>
  <div class="ticket-search-direction">
    <AppSelect
      class="ticket-search-direction__input shadow-3"
      placeholder="Откуда"
      :model-value="directionSelected.from"
      :options="directionOptionsFrom"
      @update:model-value="updateValue('from', $event)"
      clearable
    ></AppSelect>
    <AppSelect
      class="ticket-search-direction__input shadow-3"
      placeholder="Куда"
      :model-value="directionSelected.to"
      :options="directionOptionsTo"
      @update:model-value="updateValue('to', $event)"
      clearable
    ></AppSelect>
    <AppButton class="ticket-search-direction__swap shadow-3" @click="swap">
      <span class="mdi mdi-swap-horizontal"></span>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import useTicketSearch from '@/composables/useTicketSearch';
import { CityCode } from '@/interfaces/CityCode';
import { ControlOption } from '@/interfaces/ControlOption';
import AppSelect from '@/components/ui/AppSelect.vue';
import AppButton from '@/components/ui/AppButton.vue';

const { directionOptions, directionSelected, updateDirection } = useTicketSearch();

const directionOptionsFrom: ComputedRef<ControlOption[]> = computed(() =>
  directionOptions.map((option) => ({ ...option, disabled: option.value === directionSelected.value.to })),
);
const directionOptionsTo: ComputedRef<ControlOption[]> = computed(() =>
  directionOptions.map((option) => ({ ...option, disabled: option.value === directionSelected.value.from })),
);

function swap() {
  updateDirection({
    from: directionSelected.value.to,
    to: directionSelected.value.from,
  });
}

function updateValue(key: 'from' | 'to', newValue: CityCode) {
  updateDirection({
    ...directionSelected.value,
    [key]: newValue,
  });
}
</script>

<style scoped lang="scss">
.ticket-search-direction {
  position: relative;
  display: inline-flex;
  &__input:not(:first-child) {
    margin-left: 2px;
  }
  &__swap {
    width: 26px;
    height: 26px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -13px;
    margin-top: -13px;
    padding: 0;
    line-height: 1;
    font-size: 20px;
    color: $primary;
    border-radius: 50%;

    &:hover {
      background-color: $primary;
      border-color: $primary;
      color: white;
    }
  }
}
</style>
