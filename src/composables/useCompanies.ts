const companyLogos = require.context('@/assets/companies', false, /\.png$/);

const useCompanies = () => {
  const getCompanyLogo = (companyId: string) =>
    // eslint-disable-next-line
    companyLogos(`./${companyId}.png`);
  return { getCompanyLogo };
};
export default useCompanies;
