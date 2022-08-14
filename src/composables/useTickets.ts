import { ref, Ref, readonly, DeepReadonly } from 'vue';
import { ticketMachine, ticketMachineService } from '@/machines/ticketMachine';
import ticketApi from '@/api/ticketApi';
import { Ticket } from '@/interfaces/Ticket';
import { StateValue } from 'xstate';

const tickets: Ref<Ticket[]> = ref([]);
const state: Ref<StateValue> = ref(ticketMachine.initialState.value);

ticketMachineService
  .onTransition((newState) => {
    state.value = newState.value;
  })
  .start();

const useTickets = (): {
  tickets: DeepReadonly<Ref<Ticket[]>>;
  updateTickets: (newTicket: Ticket[]) => void;
  loadTickets: () => void;
  state: DeepReadonly<Ref<StateValue>>;
} => {
  const updateTickets = (newTickets: Ticket[]) => {
    tickets.value = newTickets;
  };

  const loadTickets = async () => {
    if (state.value === 'loading') return;

    ticketMachineService.send('LOAD_DATA');
    try {
      const data = await ticketApi.fetchTickets();
      updateTickets(data);
      ticketMachineService.send(data.length > 0 ? 'DATA_LOADED' : 'NOTHING_LOADED');
    } catch {
      ticketMachineService.send('FAIL');
    }
  };

  if (state.value === 'iddle') loadTickets();

  return {
    tickets: readonly(tickets),
    updateTickets,
    loadTickets,
    state: readonly(state),
  };
};

export default useTickets;
