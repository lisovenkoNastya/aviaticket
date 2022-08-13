<template>
  <AppSheet class="ticket-filter-card">
    <slot>
      <div class="subheading mb1">{{ title }}</div>
      <AppList class="mxn2">
        <AppListItem v-for="(option, index) in options" :key="index">
          <AppCheckbox
            class="block mxn2 px2 myn1 py1"
            v-if="type === 'checkbox'"
            :id="`${id}-${index}`"
            :value="option.value"
            :label="option.text"
            :name="id"
            :model-value="modelValue"
            @update:model-value="updateValue"
          ></AppCheckbox>
          <AppRadio
            class="block mxn2 px2 myn1 py1"
            v-if="type === 'radio'"
            :id="`${id}-${index}`"
            :value="option.value"
            :label="option.text"
            :name="id"
            :model-value="modelValue"
            @update:model-value="updateValue"
          ></AppRadio>
        </AppListItem>
      </AppList>
    </slot>
  </AppSheet>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from 'vue';
import { ControlOption } from '@/interfaces/FilterParams';
import AppSheet from '../ui/AppSheet.vue';
import AppCheckbox from '../ui/AppCheckbox.vue';
import AppRadio from '../ui/AppRadio.vue';
import AppList from '../ui/AppList.vue';
import AppListItem from '../ui/AppListItem.vue';

interface TicketFilterCardProps {
  id: string;
  type?: 'checkbox' | 'radio';
  title?: string;
  options?: ControlOption[];
  // modelValue?: string | number | boolean | Array<string | number>;
  modelValue?: any;
}
const props = defineProps<TicketFilterCardProps>();
const { title, type, options, modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

function updateValue(val: string | number | []) {
  emit('update:modelValue', val);
}
</script>

<style scoped lang="scss">
.ticket-filter-card {
  padding-bottom: 15px;
}
</style>
