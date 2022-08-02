import { ref, Ref, readonly, DeepReadonly } from 'vue';
import ticketApi from '@/api/ticketApi';
import { Ticket } from '@/interfaces/Ticket';

const tickets: Ref<Ticket[] | undefined> = ref(undefined);
const areTicketsLoading: Ref<boolean> = ref(false);

const useTickets = (): {
  tickets: DeepReadonly<Ref<Ticket[] | undefined>>;
  areTicketsLoading: DeepReadonly<Ref<boolean>>;
  updateTickets: (newTicket: Ticket[]) => void;
  loadTickets: () => void;
} => {
  const updateTickets = (newTickets: Ticket[]) => {
    tickets.value = newTickets;
  };

  const loadTickets = async () => {
    if (areTicketsLoading.value) return;

    areTicketsLoading.value = true;
    try {
      const data = await ticketApi.fetchTickets();
      updateTickets(data);
    } finally {
      areTicketsLoading.value = false;
    }
  };

  if (!tickets.value) loadTickets();

  return {
    tickets: readonly(tickets),
    areTicketsLoading: readonly(areTicketsLoading),
    updateTickets,
    loadTickets,
  };
};

export default useTickets;
