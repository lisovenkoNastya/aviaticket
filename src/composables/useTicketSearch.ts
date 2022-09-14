import { DeepReadonly, readonly, Ref, ref, watchEffect } from 'vue';
import { ControlOption } from '@/interfaces/ControlOption';
import { TicketDirection, TicketDates } from '@/interfaces/TicketSearch';
import { CITY_CODES } from '@/constants/cityCode';
import isBefore from 'date-fns/isBefore';
import { CityCode } from '@/interfaces/CityCode';

const directionOptions: ControlOption[] = CITY_CODES.map((code) => ({
  text: code,
  value: code,
}));

const directionSelected: Ref<TicketDirection> = ref({
  from: undefined,
  to: undefined,
});
const datesSelected: Ref<TicketDates> = ref({
  there: undefined,
  back: undefined,
});

const useTicketSearch = (): {
  directionOptions: ControlOption[];
  directionSelected: DeepReadonly<Ref<TicketDirection>>;
  updateDirectionFrom: (newDirectionFrom: CityCode) => void;
  updateDirectionTo: (newDirectionTo: CityCode) => void;
  clearDirectionFrom: () => void;
  clearDirectionTo: () => void;
  datesSelected: DeepReadonly<Ref<TicketDates>>;
  updateDateThere: (newDateThere: Date) => void;
  updateDateBack: (newDateBack: Date) => void;
  clearDateThere: () => void;
  clearDateBack: () => void;
} => {
  function updateDirectionFrom(newDirectionFrom: CityCode) {
    directionSelected.value = {
      ...directionSelected.value,
      from: newDirectionFrom,
    };
  }
  function updateDirectionTo(newDirectionTo: CityCode) {
    directionSelected.value = {
      ...directionSelected.value,
      to: newDirectionTo,
    };
  }
  function clearDirectionFrom() {
    directionSelected.value = {
      ...directionSelected.value,
      from: undefined,
    };
  }
  function clearDirectionTo() {
    directionSelected.value = {
      ...directionSelected.value,
      to: undefined,
    };
  }

  function updateDateThere(newDateThere?: Date) {
    datesSelected.value = {
      ...datesSelected.value,
      there: newDateThere,
    };
  }
  function updateDateBack(newDateBack?: Date) {
    datesSelected.value = {
      ...datesSelected.value,
      back: newDateBack,
    };
  }
  function clearDateThere() {
    datesSelected.value = {
      ...datesSelected.value,
      there: undefined,
    };
  }
  function clearDateBack() {
    datesSelected.value = {
      ...datesSelected.value,
      back: undefined,
    };
  }

  watchEffect(() => {
    if (
      datesSelected.value.back &&
      datesSelected.value.there &&
      isBefore(datesSelected.value.back, datesSelected.value.there)
    ) {
      clearDateBack();
    }
  });

  return {
    directionOptions,
    directionSelected: readonly(directionSelected),
    updateDirectionFrom,
    updateDirectionTo,
    clearDirectionFrom,
    clearDirectionTo,
    datesSelected: readonly(datesSelected),
    updateDateThere,
    updateDateBack,
    clearDateThere,
    clearDateBack,
  };
};

export default useTicketSearch;
