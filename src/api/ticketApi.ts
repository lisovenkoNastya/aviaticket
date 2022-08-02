import httpClient from './httpClient';

const fetchTickets = () =>
  httpClient.get('/163b5e66df9f2741243e').then((resp) => resp.data);

export default { fetchTickets };
