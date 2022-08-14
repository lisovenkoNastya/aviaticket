<template>
  <div class="ticket-filter">
    <TicketFilterCard class="mb2 shadow-3" :title="stopNumberParams.title">
      <AppList class="mxn2">
        <AppListItem
          v-for="(option, index) in stopNumberParams.options"
          :key="index"
        >
          <AppCheckbox
            class="block mxn2 px2 myn1 py1"
            :id="`${stopNumberParams.id}-${index}`"
            :value="option.value"
            :label="option.text"
            :name="stopNumberParams.name"
            :model-value="stopNumberSelected"
            @update:model-value="updateStopNumber"
          ></AppCheckbox>
        </AppListItem>
      </AppList>
    </TicketFilterCard>
    <TicketFilterCard class="mb2 shadow-3" :title="companyParams.title">
      <AppList class="mxn2">
        <AppListItem
          v-for="(option, index) in companyParams.options"
          :key="index"
        >
          <AppRadio
            class="block mxn2 px2 myn1 py1"
            :id="`${companyParams.id}-${index}`"
            :value="option.value"
            :label="option.text"
            name="company"
            :model-value="companySelected"
            @update:model-value="updateCompany"
          ></AppRadio>
        </AppListItem>
      </AppList>
    </TicketFilterCard>
  </div>
</template>

<script setup lang="ts">
import useStopNumberFilter from '@/composables/useStopNumberFilter';
import useCompanyFilter from '@/composables/useCompanyFilter';

import TicketFilterCard from './TicketFilterCard.vue';
import AppCheckbox from '../ui/AppCheckbox.vue';
import AppRadio from '../ui/AppRadio.vue';
import AppList from '../ui/AppList.vue';
import AppListItem from '../ui/AppListItem.vue';

const { stopNumberParams, stopNumberSelected, updateStopNumber } =
  useStopNumberFilter();
const { companyParams, companySelected, updateCompany } = useCompanyFilter();
</script>

<style scoped></style>
