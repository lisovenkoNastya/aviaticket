<template>
  <div class="ticket-search-direction">
    <AppTextfield
      class="ticket-search-direction__input shadow-3"
      :maxlength="3"
      placeholder="Откуда"
      v-model="value.from"
    ></AppTextfield>
    <AppTextfield
      class="ticket-search-direction__input shadow-3"
      :maxlength="3"
      placeholder="Куда"
      v-model="value.to"
    ></AppTextfield>
    <AppButton class="ticket-search-direction__swap shadow-3" @click="swap">
      <span class="mdi mdi-swap-horizontal"></span>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import AppTextfield from '../ui/AppTextfield.vue';
import AppButton from '../ui/AppButton.vue';

const value = reactive({
  from: undefined,
  to: undefined,
});

function swap() {
  const toSaved = value.to;
  value.to = value.from;
  value.from = toSaved;
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
