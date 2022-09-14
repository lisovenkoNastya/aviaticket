import ticketService from '@/services/ticketService';
import { TicketDates, TicketDirection } from '@/interfaces/TicketSearch';
import { Ticket } from '@/interfaces/Ticket';
import {
  MOCK_TICKETS,
  MOCK_TICKETS_MOW_ARH_108_908,
  MOCK_TICKETS_MOW_ARH_ANY_908,
  MOCK_TICKETS_MOW_ARH_108_ANY,
  MOCK_TICKETS_MOW_ANYWHERE_108_ANY,
  MOCK_TICKETS_ANYWHERE_108_ANY,
} from '@tests/unit/mocks/mockTickets';

describe('filterTickets', () => {
  const getSuitableTickets = jest.fn();

  test('Returns unchanged tickets if direction and dates are not defined', () => {
    const dates: TicketDates = {
      there: undefined,
      back: undefined,
    };
    const direction: TicketDirection = {
      from: undefined,
      to: undefined,
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(getSuitableTickets).toHaveBeenCalledTimes(0);
    expect(foundTickets).toEqual(MOCK_TICKETS);
  });

  test('Returns tickets from MOW to ARH for 1.08 and ARH to MOW for 9.08', () => {
    const dates: TicketDates = {
      there: new Date('2022-08-01'),
      back: new Date('2022-08-09'),
    };
    const direction: TicketDirection = {
      from: 'MOW',
      to: 'ARH',
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(foundTickets).toEqual(MOCK_TICKETS_MOW_ARH_108_908);
  });

  test('Returns tickets from MOW to ARH for any date and ARH to MOW for 9.08', () => {
    const dates: TicketDates = {
      there: undefined,
      back: new Date('2022-08-09'),
    };
    const direction: TicketDirection = {
      from: 'MOW',
      to: 'ARH',
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(foundTickets).toEqual(MOCK_TICKETS_MOW_ARH_ANY_908);
  });

  test('Returns tickets from MOW to ARH for 1.08, date back is undefined', () => {
    const dates: TicketDates = {
      there: new Date('2022-08-01'),
      back: undefined,
    };
    const direction: TicketDirection = {
      from: 'MOW',
      to: 'ARH',
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(foundTickets).toEqual(MOCK_TICKETS_MOW_ARH_108_ANY);
  });

  test('Returns all tickets from MOW for 1.08, date back is 9.08 but tickets back is not shown', () => {
    const dates: TicketDates = {
      there: new Date('2022-08-01'),
      back: new Date('2022-08-09'),
    };
    const direction: TicketDirection = {
      from: 'MOW',
      to: undefined,
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(foundTickets).toEqual(MOCK_TICKETS_MOW_ANYWHERE_108_ANY);
  });

  test('Returns all tickets for 1.08, if only date there is set', () => {
    const dates: TicketDates = {
      there: new Date('2022-08-01'),
      back: undefined,
    };
    const direction: TicketDirection = {
      from: undefined,
      to: undefined,
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(foundTickets).toEqual(MOCK_TICKETS_ANYWHERE_108_ANY);
  });

  test('Returns unchanged tickets if only date back is set', () => {
    const dates: TicketDates = {
      there: undefined,
      back: new Date('2022-08-01'),
    };
    const direction: TicketDirection = {
      from: undefined,
      to: undefined,
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(foundTickets).toEqual(MOCK_TICKETS);
  });

  test('Returns empty array if nothing found', () => {
    const dates: TicketDates = {
      there: new Date('2022-08-01'),
      back: new Date('2022-08-09'),
    };
    const direction: TicketDirection = {
      from: 'JNB',
      to: 'MOW',
    };
    const foundTickets = ticketService.findTickets(MOCK_TICKETS as Ticket[], { dates, direction });
    expect(foundTickets).toEqual([]);
  });
});
