import { ref, Ref, readonly, DeepReadonly } from 'vue';
import { companyMachine, companyMachineService } from '@/machines/companyMachine';
import companyApi from '@/api/companyApi';
import { Company, isCompanyValid, getCompanyLogo, CompanyId, CompanyLogo } from '@/models/company';
import { StateValue } from 'xstate';

const companies: Ref<Company[]> = ref([]);
const state: Ref<StateValue> = ref(companyMachine.initialState.value);

companyMachineService
  .onTransition((newState) => {
    state.value = newState.value;
  })
  .start();

const useCompanies = (): {
  companies: DeepReadonly<Ref<Company[]>>;
  loadCompanies: () => void;
  updateCompanies: (newCompanies: Company[]) => void;
  getLogoByCompanyId: (companyId: CompanyId) => CompanyLogo;
  state: DeepReadonly<Ref<StateValue>>;
} => {
  const updateCompanies = (newCompanies: Company[]) => {
    companies.value = newCompanies;
  };

  const loadCompanies = async () => {
    if (state.value === 'loading') return;

    companyMachineService.send('LOAD_DATA');
    try {
      const companyData: Company[] = await companyApi.fetchCompanies();
      const companyDataWithLogo: Company[] = companyData.map((company) => ({
        ...company,
        logo: `${process.env.VUE_APP_COMPANY_LOGO_PATH}${company.logo}`,
      }));
      updateCompanies(companyDataWithLogo);
      companyMachineService.send(companyDataWithLogo.length > 0 ? 'DATA_LOADED' : 'NOTHING_LOADED');
    } catch {
      companyMachineService.send('FAILURE');
    }
  };

  const getLogoByCompanyId = (companyId: CompanyId): CompanyLogo => {
    const currentCompany = companies.value.find((company) => isCompanyValid(company, { id: companyId }));
    return currentCompany ? getCompanyLogo(currentCompany) : '';
  };

  if (state.value === 'iddle') {
    loadCompanies();
  }
  return {
    companies: readonly(companies),
    loadCompanies,
    updateCompanies,
    getLogoByCompanyId,
    state: readonly(state),
  };
};
export default useCompanies;
