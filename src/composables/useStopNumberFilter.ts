import { ref, Ref, readonly, DeepReadonly } from 'vue';
import { FILTER_STOP_NUMBERS_OPTIONS } from '@/constants/filterConstants';
import { FilterParam } from '@/interfaces/FilterParams';

const stopNumberSelected: Ref<number[]> = ref([]);
const stopNumberParams: FilterParam = {
  id: 'stopNumber',
  name: 'stopNumber',
  title: 'Количество пересадок',
  options: FILTER_STOP_NUMBERS_OPTIONS,
};

const useStopNumberFilter = (): {
  stopNumberParams: DeepReadonly<FilterParam>;
  stopNumberSelected: DeepReadonly<Ref<number[]>>;
  updateStopNumber: (newValue: number[]) => void;
} => {
  function updateStopNumber(newValue: number[]) {
    stopNumberSelected.value = newValue;
  }
  return {
    stopNumberParams: readonly(stopNumberParams),
    stopNumberSelected: readonly(stopNumberSelected),
    updateStopNumber,
  };
};
export default useStopNumberFilter;
