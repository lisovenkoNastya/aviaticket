import { ref, Ref, readonly, DeepReadonly, watch } from 'vue';
import { ticketMachine, ticketMachineService } from '@/machines/ticketMachine';
import { Ticket } from '@/models/ticket';
import { TicketSortingMode } from '@/interfaces/TicketSortingMode';
import { TicketDirection, TicketDates } from '@/interfaces/TicketSearch';
import { CompanyFilterValue, StopNumber } from '@/interfaces/TicketFilter';
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
  stopNumber: DeepReadonly<Ref<StopNumber>>;
  company: DeepReadonly<Ref<CompanyFilterValue>>;
  sorting: DeepReadonly<Ref<TicketSortingMode>>;
  count: DeepReadonly<Ref<number>>;
}

const useTickets = ({
  direction,
  dates,
  stopNumber,
  company,
  sorting,
  count,
}: UseTicketsParams): {
  tickets: DeepReadonly<Ref<Ticket[]>>;
  foundTickets: DeepReadonly<Ref<Ticket[]>>;
  filteredTickets: DeepReadonly<Ref<Ticket[]>>;
  sortedTickets: DeepReadonly<Ref<Ticket[]>>;
  paginatedTickets: DeepReadonly<Ref<Ticket[]>>;
  updateTickets: (newTicket: Ticket[]) => void;
  loadTickets: () => Promise<void>;
  state: DeepReadonly<Ref<StateValue>>;
} => {
  const foundTickets: Ref<Ticket[]> = ref([]);
  const filteredTickets: Ref<Ticket[]> = ref([]);
  const sortedTickets: Ref<Ticket[]> = ref([]);
  const paginatedTickets: Ref<Ticket[]> = ref([]);

  watch(
    [direction, dates, tickets],
    () => {
      const findResult = ticketService.findTickets(tickets.value, { dates: dates.value, direction: direction.value });
      foundTickets.value = [...findResult];
    },
    { immediate: true },
  );

  watch(
    [stopNumber, company, foundTickets],
    () => {
      const filterResult = ticketService.filterTickets(foundTickets.value, {
        stopNumber: [...stopNumber.value],
        company: company.value,
      });
      filteredTickets.value = [...filterResult];
    },
    { immediate: true },
  );

  watch(
    [sorting, filteredTickets],
    () => {
      const sortingResult = ticketService.sortTickets(filteredTickets.value, sorting.value);
      sortedTickets.value = [...sortingResult];
    },
    { immediate: true },
  );

  watch(
    [count, sortedTickets],
    () => {
      paginatedTickets.value = ticketService.paginateTickets(sortedTickets.value, count.value);
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
    foundTickets: readonly(foundTickets),
    filteredTickets: readonly(filteredTickets),
    sortedTickets: readonly(sortedTickets),
    paginatedTickets: readonly(paginatedTickets),
    updateTickets,
    loadTickets,
    state: readonly(state),
  };
};

export default useTickets;
