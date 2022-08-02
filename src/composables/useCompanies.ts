import { ref, Ref, readonly, DeepReadonly } from 'vue';
import companyApi from '@/api/companyApi';
import { Company } from '@/interfaces/Company';

const companies: Ref<Company[]> = ref([]);
const areCompaniesLoading: Ref<boolean> = ref(false);
const companyLogos: __WebpackModuleApi.RequireContext = require.context(
  '@/assets/companies',
  false,
  /\.png$/,
);

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
      const data = await companyApi.fetchCompanies();
      updateCompanies(data);
    } finally {
      areCompaniesLoading.value = false;
    }
  };

  const getCompanyLogo = (companyId: string) => {
    const logoName = companies.value.find((x) => x.id === companyId)?.logo;
    return logoName && companyLogos(`./${logoName}`);
  };

  if (!companies.value.length) {
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
