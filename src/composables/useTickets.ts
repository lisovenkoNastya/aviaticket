import { ref, Ref, readonly, DeepReadonly, watch } from 'vue';
import { ticketMachine, ticketMachineService } from '@/machines/ticketMachine';
import { Ticket } from '@/interfaces/Ticket';
import { TicketSortingMode } from '@/interfaces/TicketSortingMode';
import { TicketDirection, TicketDates } from '@/interfaces/TicketSearch';
import { StateValue } from 'xstate';
import ticketService from '@/services/ticketService';

const tickets: Ref<Ticket[]> = ref([]);
const state: Ref<StateValue> = ref(ticketMachine.initialState.value);

ticketMachineService
  .onTransition((newState) => {
    state.value = newState.value;
  })
  .start();

export interface UseTicketsParams {
  direction: DeepReadonly<Ref<TicketDirection>>;
  dates: DeepReadonly<Ref<TicketDates>>;
  stopNumbers: DeepReadonly<Ref<number[]>>;
  company: DeepReadonly<Ref<string>>;
  sorting: DeepReadonly<Ref<TicketSortingMode>>;
  count: DeepReadonly<Ref<number>>;
}

const useTickets = ({
  direction,
  dates,
  stopNumbers,
  company,
  sorting,
  count,
}: UseTicketsParams): {
  tickets: DeepReadonly<Ref<Ticket[]>>;
  ticketsFound: DeepReadonly<Ref<Ticket[]>>;
  ticketsFiltered: DeepReadonly<Ref<Ticket[]>>;
  ticketsSorted: DeepReadonly<Ref<Ticket[]>>;
  ticketsPaginated: DeepReadonly<Ref<Ticket[]>>;
  updateTickets: (newTicket: Ticket[]) => void;
  loadTickets: () => Promise<void>;
  state: DeepReadonly<Ref<StateValue>>;
} => {
  const ticketsFound: Ref<Ticket[]> = ref([]);
  const ticketsFiltered: Ref<Ticket[]> = ref([]);
  const ticketsSorted: Ref<Ticket[]> = ref([]);
  const ticketsPaginated: Ref<Ticket[]> = ref([]);

  watch(
    [direction, dates, tickets],
    () => {
      const findResult = ticketService.findTickets(tickets.value, { dates: dates.value, direction: direction.value });
      ticketsFound.value = [...findResult];
    },
    { immediate: true },
  );

  watch(
    [stopNumbers, company, ticketsFound],
    () => {
      const filterResult = ticketService.filterTickets(ticketsFound.value, {
        stopNumbers: [...stopNumbers.value],
        company: company.value,
      });
      ticketsFiltered.value = [...filterResult];
    },
    { immediate: true },
  );

  watch(
    [sorting, ticketsFiltered],
    () => {
      const sortingResult = ticketService.sortTickets(ticketsFiltered.value, sorting.value);
      ticketsSorted.value = [...sortingResult];
    },
    { immediate: true },
  );

  watch(
    [count, ticketsSorted],
    () => {
      ticketsPaginated.value = ticketService.paginateTickets(ticketsSorted.value, count.value);
    },
    { immediate: true },
  );

  const updateTickets = (newTickets: Ticket[]) => {
    tickets.value = newTickets;
  };

  const loadTickets = async () => {
    if (state.value === 'loading') return;
    try {
      const ticketsLoaded = await ticketService.loadTickets();
      updateTickets(ticketsLoaded);
    } catch (e) {
      updateTickets([]);
    }
  };

  if (state.value === 'iddle') loadTickets();

  return {
    tickets: readonly(tickets),
    ticketsFound: readonly(ticketsFound),
    ticketsFiltered: readonly(ticketsFiltered),
    ticketsSorted: readonly(ticketsSorted),
    ticketsPaginated: readonly(ticketsPaginated),
    updateTickets,
    loadTickets,
    state: readonly(state),
  };
};

export default useTickets;
