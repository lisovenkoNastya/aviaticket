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
      :disabled="isDisabled"
      v-bind="$attrs"
    />
    <span class="app-datepicker__icon mdi mdi-calendar-today"></span>
    <span
      v-if="isClearable && !!modelValue"
      class="app-datepicker__close mdi mdi-close cursor-pointer"
      @click="clearValue"
    ></span>
  </AppInput>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits } from 'vue';
import { ru } from 'date-fns/locale';
import Datepicker from 'vue3-datepicker';
import AppInput from '@/components/ui/AppInput.vue';

interface AppInputProps {
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  modelValue?: Date;
  isClearable?: boolean;
}

const props = defineProps<AppInputProps>();
const { name, placeholder, modelValue, isDisabled, isClearable = false } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

function updateValue(value: Date) {
  emit('update:modelValue', value);
}

function clearValue() {
  emit('update:modelValue', undefined);
}
</script>

<style scoped lang="scss">
.app-datepicker {
  position: relative;

  &__icon {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -12px;
    color: $primary;
  }

  &__close {
    position: absolute;
    right: 40px;
    top: 50%;
    margin-top: -12px;
    color: $grey;
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
