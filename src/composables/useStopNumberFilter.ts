import { ref, Ref, readonly, DeepReadonly } from 'vue';
import { StopNumber } from '@/interfaces/TicketFilter';
import { FILTER_STOP_NUMBERS_OPTIONS } from '@/constants/filterConstants';
import { FilterParam } from '@/interfaces/FilterParams';

const stopNumberSelected: Ref<StopNumber> = ref([]);
const stopNumberParams: FilterParam = {
  id: 'stopNumber',
  name: 'stopNumber',
  title: 'Количество пересадок',
  options: FILTER_STOP_NUMBERS_OPTIONS,
};

const useStopNumberFilter = (): {
  stopNumberParams: DeepReadonly<FilterParam>;
  stopNumberSelected: DeepReadonly<Ref<StopNumber>>;
  updateStopNumber: (newValue: StopNumber) => void;
} => {
  function updateStopNumber(newValue: StopNumber) {
    stopNumberSelected.value = newValue;
  }
  return {
    stopNumberParams: readonly(stopNumberParams),
    stopNumberSelected: readonly(stopNumberSelected),
    updateStopNumber,
  };
};
export default useStopNumberFilter;
