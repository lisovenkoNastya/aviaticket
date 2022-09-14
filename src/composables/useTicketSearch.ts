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

const selectedDirection: Ref<TicketDirection> = ref({
  from: undefined,
  to: undefined,
});
const selectedDates: Ref<TicketDates> = ref({
  there: undefined,
  back: undefined,
});

const useTicketSearch = (): {
  directionOptions: ControlOption[];
  selectedDirection: DeepReadonly<Ref<TicketDirection>>;
  updateDirectionFrom: (newDirectionFrom: CityCode) => void;
  updateDirectionTo: (newDirectionTo: CityCode) => void;
  clearDirectionFrom: () => void;
  clearDirectionTo: () => void;
  selectedDates: DeepReadonly<Ref<TicketDates>>;
  updateDateThere: (newDateThere: Date) => void;
  updateDateBack: (newDateBack: Date) => void;
  clearDateThere: () => void;
  clearDateBack: () => void;
} => {
  function updateDirectionFrom(newDirectionFrom: CityCode) {
    selectedDirection.value = {
      ...selectedDirection.value,
      from: newDirectionFrom,
    };
  }
  function updateDirectionTo(newDirectionTo: CityCode) {
    selectedDirection.value = {
      ...selectedDirection.value,
      to: newDirectionTo,
    };
  }
  function clearDirectionFrom() {
    selectedDirection.value = {
      ...selectedDirection.value,
      from: undefined,
    };
  }
  function clearDirectionTo() {
    selectedDirection.value = {
      ...selectedDirection.value,
      to: undefined,
    };
  }

  function updateDateThere(newDateThere?: Date) {
    selectedDates.value = {
      ...selectedDates.value,
      there: newDateThere,
    };
  }
  function updateDateBack(newDateBack?: Date) {
    selectedDates.value = {
      ...selectedDates.value,
      back: newDateBack,
    };
  }
  function clearDateThere() {
    selectedDates.value = {
      ...selectedDates.value,
      there: undefined,
    };
  }
  function clearDateBack() {
    selectedDates.value = {
      ...selectedDates.value,
      back: undefined,
    };
  }

  watchEffect(() => {
    if (
      selectedDates.value.back &&
      selectedDates.value.there &&
      isBefore(selectedDates.value.back, selectedDates.value.there)
    ) {
      clearDateBack();
    }
  });

  return {
    directionOptions,
    selectedDirection: readonly(selectedDirection),
    updateDirectionFrom,
    updateDirectionTo,
    clearDirectionFrom,
    clearDirectionTo,
    selectedDates: readonly(selectedDates),
    updateDateThere,
    updateDateBack,
    clearDateThere,
    clearDateBack,
  };
};

export default useTicketSearch;
