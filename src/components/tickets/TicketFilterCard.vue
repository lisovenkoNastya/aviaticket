<template>
  <AppSheet class="ticket-filter-card">
    <div class="subheading mb1">{{ title }}</div>
    <slot> </slot>
  </AppSheet>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
import AppSheet from '@/components/ui/AppSheet.vue';

interface TicketFilterCardProps {
  title: string;
}
const props = defineProps<TicketFilterCardProps>();
const { title } = toRefs(props);
</script>

<style scoped lang="scss">
.ticket-filter-card {
  padding-bottom: 15px;
}
</style>
