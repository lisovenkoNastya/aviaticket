import { ref, readonly, nextTick } from 'vue';

import { Ticket } from '@/models/ticket';
import useTickets from '@/composables/useTickets';
import useStopNumberFilter from '@/composables/useStopNumberFilter';
import useCompanyFilter from '@/composables/useCompanyFilter';
import useTicketSearch from '@/composables/useTicketSearch';
import useTicketSorting from '@/composables/useTicketSorting';
import ticketService from '@/services/ticketService';
import { ticketMachineService } from '@/machines/ticketMachine';
import { mount } from 'vue-composable-tester';
import { flushPromises } from '@vue/test-utils';
import { MOCK_TICKETS } from '@tests/unit/mocks/mockTickets';

const TICKET_COUNT_DEFAULT = 5;

const { stopNumberSelected, updateStopNumber } = useStopNumberFilter();
const { companySelected } = useCompanyFilter();
const {
  selectedDirection,
  selectedDates,
  updateDirectionFrom,
  updateDirectionTo,
  clearDirectionFrom,
  clearDirectionTo,
} = useTicketSearch();
const { sortingMode, updateSortingMode } = useTicketSorting();
const ticketCount = ref(TICKET_COUNT_DEFAULT);

const useTicketsParams = {
  stopNumber: stopNumberSelected,
  company: companySelected,
  direction: selectedDirection,
  dates: selectedDates,
  sorting: sortingMode,
  count: readonly(ticketCount),
};

const resetTicketComposable = (unmount: () => void, updateTickets: (newTicket: Ticket[]) => void) => {
  updateTickets([]);
  unmount();
};

describe('useTickets', () => {
  const mockFindTickets = jest.spyOn(ticketService, 'findTickets');
  const mockFilterTickets = jest.spyOn(ticketService, 'filterTickets');
  const mockSortTickets = jest.spyOn(ticketService, 'sortTickets');
  const mockPaginateTickets = jest.spyOn(ticketService, 'paginateTickets');
  const mockLoadTickets = jest.spyOn(ticketService, 'loadTickets');

  afterEach(async () => {
    clearDirectionFrom();
    clearDirectionTo();
    updateStopNumber([]);
    updateSortingMode('cheapest');
    ticketCount.value = TICKET_COUNT_DEFAULT;
    ticketMachineService.send('RESET');
    await nextTick();

    mockFindTickets.mockClear();
    mockFilterTickets.mockClear();
    mockSortTickets.mockClear();
    mockPaginateTickets.mockClear();
    mockLoadTickets.mockClear();
  });

  test('Update tickets should update tickets correctly', async () => {
    mockLoadTickets.mockResolvedValueOnce([]);
    const { result: ticketsComposable, unmount } = mount(() => useTickets(useTicketsParams));
    await flushPromises();

    expect(ticketsComposable.tickets.value).toEqual([]);

    ticketsComposable.updateTickets(MOCK_TICKETS as Ticket[]);
    expect(ticketsComposable.tickets.value).toEqual(MOCK_TICKETS);
    resetTicketComposable(unmount, ticketsComposable.updateTickets);
  });

  test('tickets should be loaded once when App is just started', async () => {
    const { result: ticketsComposable1, unmount: unmount1 } = mount(() => useTickets(useTicketsParams));
    expect(mockLoadTickets).toHaveBeenCalledTimes(1);

    const { result: ticketsComposable2, unmount: unmount2 } = mount(() => useTickets(useTicketsParams));

    // second useTickets call shouldn't cause tickets loading
    expect(mockLoadTickets).toHaveBeenCalledTimes(1);
    resetTicketComposable(unmount1, ticketsComposable1.updateTickets);
    resetTicketComposable(unmount2, ticketsComposable2.updateTickets);
  });

  test('foundTickets, filteredTickets, sortedTickets, paginatedTickets should be calculated if direction is changed', async () => {
    mockLoadTickets.mockResolvedValueOnce(MOCK_TICKETS as Ticket[]);
    const { result: ticketComposable, unmount } = mount(() => useTickets(useTicketsParams));

    // immediate initial ticket filtering
    expect(mockFindTickets).toHaveBeenCalledTimes(1);
    expect(mockFilterTickets).toHaveBeenCalledTimes(1);
    expect(mockSortTickets).toHaveBeenCalledTimes(1);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(1);

    await flushPromises();

    // filter tickets when they have been loaded
    expect(mockFindTickets).toHaveBeenCalledTimes(2);
    expect(mockFilterTickets).toHaveBeenCalledTimes(2);
    expect(mockSortTickets).toHaveBeenCalledTimes(2);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(2);

    updateDirectionFrom('MOW');
    updateDirectionTo('ARH');
    await nextTick();

    // filter tickets when direction have been changed
    expect(mockFindTickets).toHaveBeenCalledTimes(3);
    expect(mockFilterTickets).toHaveBeenCalledTimes(3);
    expect(mockSortTickets).toHaveBeenCalledTimes(3);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(3);
    resetTicketComposable(unmount, ticketComposable.updateTickets);
  });

  test('filteredTickets, sortedTickets, paginatedTickets should be calculated if stopNumbers is changed, foundTickets should not', async () => {
    mockLoadTickets.mockResolvedValueOnce(MOCK_TICKETS as Ticket[]);
    const { result: ticketComposable, unmount } = mount(() => useTickets(useTicketsParams));

    // immediate initial ticket filtering
    expect(mockFindTickets).toHaveBeenCalledTimes(1);
    expect(mockFilterTickets).toHaveBeenCalledTimes(1);
    expect(mockSortTickets).toHaveBeenCalledTimes(1);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(1);

    await flushPromises();

    // filter tickets when they have been loaded
    expect(mockFindTickets).toHaveBeenCalledTimes(2);
    expect(mockFilterTickets).toHaveBeenCalledTimes(2);
    expect(mockSortTickets).toHaveBeenCalledTimes(2);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(2);

    updateStopNumber([0]);
    await nextTick();

    // find tickets shouldn't be called
    expect(mockFindTickets).toHaveBeenCalledTimes(2);

    // filter tickets when direction have been changed
    expect(mockFilterTickets).toHaveBeenCalledTimes(3);
    expect(mockSortTickets).toHaveBeenCalledTimes(3);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(3);
    resetTicketComposable(unmount, ticketComposable.updateTickets);
  });

  test('sortedTickets, paginatedTickets should be calculated if sorting is changed, foundTickets and filteredTickets should not', async () => {
    mockLoadTickets.mockResolvedValueOnce(MOCK_TICKETS as Ticket[]);
    const { result: ticketComposable, unmount } = mount(() => useTickets(useTicketsParams));

    // immediate initial ticket filtering
    expect(mockFindTickets).toHaveBeenCalledTimes(1);
    expect(mockFilterTickets).toHaveBeenCalledTimes(1);
    expect(mockSortTickets).toHaveBeenCalledTimes(1);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(1);

    await flushPromises();

    // filter tickets when they have been loaded
    expect(mockFindTickets).toHaveBeenCalledTimes(2);
    expect(mockFilterTickets).toHaveBeenCalledTimes(2);
    expect(mockSortTickets).toHaveBeenCalledTimes(2);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(2);

    updateSortingMode('fastest');
    await nextTick();
    // find tickets and filter tickets shouldn't be called
    expect(mockFindTickets).toHaveBeenCalledTimes(2);
    expect(mockFilterTickets).toHaveBeenCalledTimes(2);

    // sort and paginate tickets when direction have been changed
    expect(mockSortTickets).toHaveBeenCalledTimes(3);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(3);
    resetTicketComposable(unmount, ticketComposable.updateTickets);
  });

  test('paginatedTickets should be calculated if ticketCount is changed, foundTickets, filteredTickets and ticketSorted should not', async () => {
    mockLoadTickets.mockResolvedValueOnce(MOCK_TICKETS as Ticket[]);
    const { result: ticketComposable, unmount } = mount(() => useTickets(useTicketsParams));

    // immediate initial ticket filtering
    expect(mockFindTickets).toHaveBeenCalledTimes(1);
    expect(mockFilterTickets).toHaveBeenCalledTimes(1);
    expect(mockSortTickets).toHaveBeenCalledTimes(1);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(1);

    await flushPromises();

    // filter tickets when they have been loaded
    expect(mockFindTickets).toHaveBeenCalledTimes(2);
    expect(mockFilterTickets).toHaveBeenCalledTimes(2);
    expect(mockSortTickets).toHaveBeenCalledTimes(2);
    expect(mockPaginateTickets).toHaveBeenCalledTimes(2);

    ticketCount.value = 2 * TICKET_COUNT_DEFAULT;
    await nextTick();

    // find tickets, filter and paginate tickets shouldn't be called
    expect(mockFindTickets).toHaveBeenCalledTimes(2);
    expect(mockFilterTickets).toHaveBeenCalledTimes(2);
    expect(mockSortTickets).toHaveBeenCalledTimes(2);

    // paginate tickets when ticketCount have been changed
    expect(mockPaginateTickets).toHaveBeenCalledTimes(3);
    resetTicketComposable(unmount, ticketComposable.updateTickets);
  });
});
