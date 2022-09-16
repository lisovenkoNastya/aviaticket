import { Company } from '@/models/company';
import httpClient from '@/api/httpClient';

const fetchCompanies = (): Promise<Company[]> => httpClient.get('/a1b1c28b32d9785bb26c').then((resp) => resp.data);

export default { fetchCompanies };
