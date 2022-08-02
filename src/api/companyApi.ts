import httpClient from './httpClient';

const fetchCompanies = () =>
  httpClient.get('/a1b1c28b32d9785bb26c').then((resp) => resp.data);

export default { fetchCompanies };
