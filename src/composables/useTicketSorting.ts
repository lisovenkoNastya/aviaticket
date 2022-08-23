import { DeepReadonly, Ref, ref, readonly } from 'vue';
import { TicketSortingMode } from '@/interfaces/TicketSortingMode';
import { SORTING_DEFAULT } from '@/constants/sortingConstants';

const sortingMode: Ref<TicketSortingMode> = ref(SORTING_DEFAULT);

const useTicketSorting = (): {
  sortingMode: DeepReadonly<Ref<TicketSortingMode>>;
  updateSortingMode: (newMode: TicketSortingMode) => void;
} => {
  function updateSortingMode(newMode: TicketSortingMode) {
    sortingMode.value = newMode;
  }
  return { sortingMode: readonly(sortingMode), updateSortingMode };
};

export default useTicketSorting;
