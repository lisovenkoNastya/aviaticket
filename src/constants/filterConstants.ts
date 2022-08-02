import { FilterValue } from '@/interfaces/FilterParams';

const FILTER_VALUE_DEFAULT: FilterValue = {
  stopNumber: [],
  company: 'all',
};

const FILTER_STOP_NUMBERS_OPTIONS = [
  {
    text: 'Без пересадок',
    value: 0,
  },
  {
    text: '1 пересадка',
    value: 1,
  },
  {
    text: '2 пересадки',
    value: 2,
  },
  {
    text: '3 пересадки',
    value: 3,
  },
];

export { FILTER_VALUE_DEFAULT, FILTER_STOP_NUMBERS_OPTIONS };
