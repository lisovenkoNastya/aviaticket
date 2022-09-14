import { TicketRaw } from '@/interfaces/Ticket';
import httpClient from '@/api/httpClient';

const fetchTickets = (): Promise<TicketRaw[]> => httpClient.get('/163b5e66df9f2741243e').then((resp) => resp.data);

export default { fetchTickets };
