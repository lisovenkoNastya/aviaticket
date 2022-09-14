import { ref, Ref, readonly, DeepReadonly, computed, ComputedRef } from 'vue';
import { FilterParam } from '@/interfaces/FilterParams';
import { ControlOption } from '@/interfaces/ControlOption';
import useCompanies from '@/composables/useCompanies';

const { companies } = useCompanies();
const companyOptions: ComputedRef<ControlOption[]> = computed(() => [
  { text: 'Все', value: 'all' },
  ...companies.value.map((company) => ({
    text: company.name,
    value: company.id,
  })),
]);

const companySelected: Ref<string> = ref('all');
const companyParams: ComputedRef<FilterParam> = computed(() => ({
  id: 'company',
  name: 'company',
  title: 'Компания',
  options: companyOptions.value,
}));

const useCompanyFilter = (): {
  companyParams: DeepReadonly<ComputedRef<FilterParam>>;
  companySelected: DeepReadonly<Ref<string>>;
  updateCompany: (newValue: string) => void;
} => {
  function updateCompany(newValue: string) {
    companySelected.value = newValue;
  }

  return {
    companyParams: readonly(companyParams),
    companySelected: readonly(companySelected),
    updateCompany,
  };
};
export default useCompanyFilter;
