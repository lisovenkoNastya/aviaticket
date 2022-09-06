import { flushPromises, mount } from '@vue/test-utils';
import TicketPage from '@/views/TicketPage.vue';
import TicketCard from '@/components/tickets/TicketCard.vue';
import PaginationButton from '@/components/tickets/PaginationButton.vue';
import httpClient from '@/api/httpClient';
import { ticketMachineService } from '@/machines/ticketMachine';
import useStopNumberFilter from '@/composables/useStopNumberFilter';
import { MOCK_TICKETS_RAW_WITH_STOPS_ONLY } from './mocks/mockTickets';

describe('TicketPage', () => {
  const getSpy = jest.spyOn(httpClient, 'get');

  beforeEach(() => {
    ticketMachineService.send('RESET');
  });

  test('displays loading message while tickets are not loaded yet', async () => {
    getSpy.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: MOCK_TICKETS_RAW_WITH_STOPS_ONLY });
          }, 20000);
        }),
    );
    const wrapper = mount(TicketPage);
    expect(wrapper.find('.ticket-page__tickets').text()).toEqual('loading...');
    flushPromises();
  });

  test('displays tickets if they are loaded', async () => {
    getSpy.mockResolvedValue({ data: MOCK_TICKETS_RAW_WITH_STOPS_ONLY });
    const wrapper = mount(TicketPage);
    await flushPromises();
    expect(wrapper.findAllComponents(TicketCard)).toHaveLength(5);
    expect(wrapper.findComponent(PaginationButton).exists()).toBe(true);
  });

  test('displays error message if loading error is caused', async () => {
    getSpy.mockRejectedValueOnce(new Error('error'));
    const wrapper = mount(TicketPage);
    await flushPromises();
    expect(wrapper.find('.ticket-page__tickets').text()).toEqual(
      'Что-то пошло не так. Попробуйте перезагрузить страницу',
    );
  });

  test('displays error message if server respond with empty array', async () => {
    getSpy.mockResolvedValue({ data: [] });
    const wrapper = mount(TicketPage);
    await flushPromises();
    expect(wrapper.find('.ticket-page__tickets').text()).toEqual(
      'Что-то пошло не так. Попробуйте перезагрузить страницу',
    );
  });
  test('displays nothing found message if filtered tickets are empty', async () => {
    getSpy.mockResolvedValue({ data: MOCK_TICKETS_RAW_WITH_STOPS_ONLY });
    const { updateStopNumber } = useStopNumberFilter();
    const wrapper = mount(TicketPage);
    await flushPromises();
    updateStopNumber([0]);
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.ticket-page__tickets').text()).toEqual(
      'Мы не нашли подходящих билетов. Попробуйте изменить условия поиска.',
    );
  });
});
