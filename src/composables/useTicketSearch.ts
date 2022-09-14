import { DeepReadonly, readonly, Ref, ref, watchEffect } from 'vue';
import { ControlOption } from '@/interfaces/ControlOption';
import { TicketDirection, TicketDates } from '@/interfaces/TicketSearch';
import { CITY_CODES } from '@/constants/cityCode';
import isBefore from 'date-fns/isBefore';

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
  updateDirection: (newDirection: TicketDirection) => void;
  datesSelected: DeepReadonly<Ref<TicketDates>>;
  updateDateThere: (newDateThere: Date) => void;
  updateDateBack: (newDateBack: Date) => void;
  clearDateThere: () => void;
  clearDateBack: () => void;
} => {
  function updateDirection(newDirection: TicketDirection) {
    directionSelected.value = newDirection;
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
    updateDirection,
    datesSelected: readonly(datesSelected),
    updateDateThere,
    updateDateBack,
    clearDateThere,
    clearDateBack,
  };
};

export default useTicketSearch;
