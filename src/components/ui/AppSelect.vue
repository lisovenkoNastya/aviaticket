<template>
  <AppInput class="app-select">
    <input
      :name="name"
      :value="modelValueText"
      :placeholder="placeholder"
      :disabled="!!disabled"
      readonly
      @focus="showDropdown"
      @click.stop
    />
    <div class="app-select__dropdown shadow-3" v-if="isDropdownShown">
      <AppList>
        <AppListItem
          class="app-select__option cursor-pointer"
          :class="{ selected: modelValue === option.value, disabled: option.disabled }"
          v-for="option in options"
          :key="option.value"
          @click="!option.disabled && updateValue(option.value)"
        >
          {{ option.text }}
        </AppListItem>
      </AppList>
    </div>
    <span
      v-if="clearable && !!modelValue"
      class="app-select__close mdi mdi-close cursor-pointer"
      @click="clearValue"
    ></span>
  </AppInput>
</template>

<script setup lang="ts">
import { defineProps, toRefs, defineEmits, computed, ComputedRef, ref, Ref, onBeforeUnmount } from 'vue';
import { ControlOption } from '@/interfaces/ControlOption';
import AppInput from './AppInput.vue';
import AppList from './AppList.vue';
import AppListItem from './AppListItem.vue';

interface AppSelectProps {
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  modelValue?: string | number;
  options: ControlOption[];
  clearable?: boolean;
}

const props = defineProps<AppSelectProps>();
const { name, placeholder, disabled, modelValue, options, clearable = false } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isDropdownShown: Ref<boolean> = ref(false);

const modelValueText: ComputedRef<string> = computed(
  () => options.value.find((option) => option.value === modelValue?.value)?.text || '',
);

function showDropdown() {
  isDropdownShown.value = true;
}

function hideDropdown() {
  isDropdownShown.value = false;
}

function updateValue(val: string | number) {
  hideDropdown();
  emit('update:modelValue', val);
}

function clearValue() {
  emit('update:modelValue', undefined);
}

document.addEventListener('click', hideDropdown);
onBeforeUnmount(() => {
  document.removeEventListener('click', hideDropdown);
});
</script>

<style scoped lang="scss">
.app-select {
  position: relative;

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    margin-top: 2px;
    max-height: 300px;
    overflow: auto;
  }
  &__option {
    &.selected {
      color: $primary;
      font-weight: bold;
      background-color: $bg-color;
    }
    &.disabled {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        background-color: transparent;
      }
    }
  }

  &__close {
    position: absolute;
    right: 8px;
    top: 50%;
    margin-top: -12px;
    color: $grey;
  }
}
</style>
