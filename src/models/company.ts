export type CompanyId = string;
export type CompanyName = string;
export type CompanyLogo = string;

export interface Company {
  id: CompanyId;
  // Название компании
  name: CompanyName;
  // Имя логотипа
  logo: CompanyLogo;
}
export const isCompanyValid = (company: Company, { id, name, logo }: Partial<Company>): boolean => {
  const { id: companyId, name: companyName, logo: companyLogo } = company;
  if (id && companyId !== id) return false;
  if (name && companyName !== name) return false;
  if (logo && companyLogo !== logo) return false;
  return true;
};

export const getCompanyLogo = (company: Company): string => company.logo;
