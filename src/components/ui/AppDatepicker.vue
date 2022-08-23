<template>
  <AppInput class="app-datepicker">
    <Datepicker
      class="app-datepicker__control"
      :name="name"
      :placeholder="placeholder"
      :locale="ru"
      weekday-format="EEEEEE"
      input-format="d MMMM, EEEEEE"
      :model-value="modelValue"
      @update:model-value="updateValue"
      :disabled="disabled"
    />
    <span class="app-datepicker__icon mdi mdi-calendar-today"></span>
  </AppInput>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from 'vue';
import { ru } from 'date-fns/locale';
import Datepicker from 'vue3-datepicker';
import AppInput from './AppInput.vue';

interface AppInputProps {
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  modelValue?: Date;
}

const props = defineProps<AppInputProps>();
const { name, placeholder, modelValue, disabled } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

function updateValue(value: Date) {
  emit('update:modelValue', value);
}
</script>

<style scoped lang="scss">
.app-datepicker {
  position: relative;

  &__icon {
    font-size: 24px;
    height: 24px;
    line-height: 1;
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    color: $primary;
  }

  & :deep(.app-datepicker__control) {
    padding-right: 45px;
  }

  & :deep(.v3dp__body) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;
  }
  & :deep(.v3dp__elements button) {
    padding: 3px;
  }
  & :deep(.v3dp__elements button span) {
    min-width: 30px;
    font-family: $body-font-family;
    height: 30px;
    line-height: 30px;
    font-weight: 600;
  }

  & :deep(.v3dp__popout) {
    width: 320px;
  }

  & :deep(.v3dp__subheading),
  & :deep(.v3dp__heading__center) {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: $grey;
    font-weight: 600;
  }

  & :deep(.v3dp__heading__center) {
    color: $primary;
  }
}
</style>
