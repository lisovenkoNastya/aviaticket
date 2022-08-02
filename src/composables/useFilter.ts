import { reactive, computed, ComputedRef, readonly, DeepReadonly } from 'vue';
import {
  FILTER_VALUE_DEFAULT,
  FILTER_STOP_NUMBERS_OPTIONS,
} from '@/constants/filterConstants';
import { FilterParam, FilterValue } from '@/interfaces/FilterParams';
import useCompanies from './useCompanies';

const { companies } = useCompanies();
const companyOptions = computed(() =>
  companies.value?.map((x) => ({ text: x.name, value: x.id })),
);

const filterValue = reactive(FILTER_VALUE_DEFAULT);
const filterParams: ComputedRef<FilterParam[]> = computed(() => [
  {
    id: 'stopNumber',
    type: 'checkbox',
    title: 'Количество пересадок',
    options: FILTER_STOP_NUMBERS_OPTIONS,
  },
  {
    id: 'company',
    type: 'radio',
    title: 'Компания',
    options: [
      {
        text: 'Все',
        value: 'all',
      },
      ...companyOptions.value,
    ],
  },
]);

const useFilter = (): {
  filterValue: DeepReadonly<FilterValue>;
  filterParams: ComputedRef<FilterParam[]>;
  updateFilterValue: (key: string, value: number | number[] | string) => void;
} => {
  const updateFilterValue = (
    key: string,
    value: number | number[] | string,
  ) => {
    (filterValue as any)[key] = value;
  };
  return {
    filterValue: readonly(filterValue),
    filterParams,
    updateFilterValue,
  };
};

export default useFilter;
