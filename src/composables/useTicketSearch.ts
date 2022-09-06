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
  updateDates: (newDates: TicketDates) => void;
} => {
  function updateDirection(newDirection: TicketDirection) {
    directionSelected.value = newDirection;
  }
  function updateDates(newDates: TicketDates) {
    datesSelected.value = newDates;
  }

  watchEffect(() => {
    if (
      datesSelected.value.back &&
      datesSelected.value.there &&
      isBefore(datesSelected.value.back, datesSelected.value.there)
    ) {
      updateDates({
        ...datesSelected.value,
        back: undefined,
      });
    }
  });

  return {
    directionOptions,
    directionSelected: readonly(directionSelected),
    updateDirection,
    datesSelected: readonly(datesSelected),
    updateDates,
  };
};

export default useTicketSearch;
