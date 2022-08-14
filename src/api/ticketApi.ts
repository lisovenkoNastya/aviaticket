import { Ticket } from '@/interfaces/Ticket';
import httpClient from './httpClient';

const fetchTickets = (): Promise<Ticket[]> => httpClient.get('/163b5e66df9f2741243e').then((resp) => resp.data);

export default { fetchTickets };
