import { ref, Ref, readonly, DeepReadonly } from 'vue';
import companyApi from '@/api/companyApi';
import { Company } from '@/interfaces/Company';

const companies: Ref<Company[]> = ref([]);
const areCompaniesLoading: Ref<boolean> = ref(false);

const useCompanies = (): {
  companies: DeepReadonly<Ref<Company[]>>;
  areCompaniesLoading: DeepReadonly<Ref<boolean>>;
  loadCompanies: () => void;
  updateCompanies: (newCompanies: Company[]) => void;
  getCompanyLogo: (companyId: string) => string;
} => {
  const updateCompanies = (newCompanies: Company[]) => {
    companies.value = newCompanies;
  };

  const loadCompanies = async () => {
    if (areCompaniesLoading.value) return;

    areCompaniesLoading.value = true;
    try {
      const companyData: Company[] = await companyApi.fetchCompanies();
      const companyDataWithLogo: Company[] = companyData.map((company) => ({
        ...company,
        logo: `/img/companies/${company.logo}`,
      }));
      updateCompanies(companyDataWithLogo);
    } finally {
      areCompaniesLoading.value = false;
    }
  };

  const getCompanyLogo = (companyId: string): string => {
    const logoName = companies.value.find((company) => company.id === companyId)?.logo;
    return logoName || '';
  };

  if (companies.value.length === 0) {
    loadCompanies();
  }
  return {
    companies: readonly(companies),
    areCompaniesLoading: readonly(areCompaniesLoading),
    loadCompanies,
    updateCompanies,
    getCompanyLogo,
  };
};
export default useCompanies;
