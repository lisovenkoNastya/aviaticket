import { Ticket, TicketRaw, isTicketValid } from '@/models/ticket';
import { TicketSearch } from '@/interfaces/TicketSearch';
import { ticketMachineService } from '@/machines/ticketMachine';
import ticketApi from '@/api/ticketApi';
import { TicketSortingMode } from '@/interfaces/TicketSortingMode';
import { TicketFilter } from '@/interfaces/TicketFilter';

const findTickets = (tickets: Ticket[], { dates, direction }: TicketSearch): Ticket[] => {
  const ticketsThere =
    dates.there || direction.from || direction.to
      ? tickets.filter((ticket) => isTicketValid(ticket, { dates, direction }))
      : tickets;
  const ticketsBack =
    dates.back && direction.from && direction.to
      ? tickets.filter((ticket) =>
          isTicketValid(ticket, {
            dates: {
              there: dates.back,
              back: undefined,
            },
            direction: {
              from: direction.to,
              to: direction.from,
            },
          }),
        )
      : [];
  const result = [...ticketsThere, ...ticketsBack];
  return result;
};

const filterTickets = (tickets: Ticket[], { stopNumber, company }: TicketFilter): Ticket[] =>
  tickets.filter((ticket) => isTicketValid(ticket, { stopNumber, company: company !== 'all' ? company : undefined }));

const sortTicketsByPrice = (tickets: Ticket[]): Ticket[] =>
  tickets.sort((ticketA, ticketB) => ticketA.price - ticketB.price);

const sortTicketsByDuration = (tickets: Ticket[]): Ticket[] =>
  tickets.sort((ticketA, ticketB) => ticketA.info.duration - ticketB.info.duration);

const sortTicketsByOptimal = (tickets: Ticket[]): Ticket[] => {
  const sumObj = tickets.reduce(
    ({ priceSum, durationSum }, ticket) => {
      const { info, price } = ticket;
      return { priceSum: priceSum + price, durationSum: durationSum + info.duration };
    },
    { priceSum: 0, durationSum: 0 },
  );
  const priceAvg = sumObj.priceSum / tickets.length;
  const durationAvg = sumObj.durationSum / tickets.length;

  return tickets.sort((ticketA, ticketB) => {
    if (ticketA.info.stops.length < ticketB.info.stops.length) {
      return ticketA.price < priceAvg || ticketA.info.duration < durationAvg ? -1 : 1;
    }
    if (ticketA.info.stops.length > ticketB.info.stops.length) {
      return ticketB.price < priceAvg || ticketB.info.duration < durationAvg ? 1 : -1;
    }
    return ticketA.price - ticketB.price;
  });
};

const sortTickets = (tickets: Ticket[], mode: TicketSortingMode): Ticket[] => {
  if (mode === 'cheapest') return sortTicketsByPrice(tickets);
  if (mode === 'fastest') return sortTicketsByDuration(tickets);
  if (mode === 'optimal') return sortTicketsByOptimal(tickets);
  throw new Error('there is no such sorting mode');
};

const paginateTickets = (tickets: Ticket[], count: number): Ticket[] => tickets.slice(0, count);

const loadTickets = async (): Promise<Ticket[]> => {
  ticketMachineService.send('LOAD_DATA');
  try {
    const data = await ticketApi.fetchTickets();
    const dataProccessed = data.map(
      (ticket: TicketRaw): Ticket => ({
        ...ticket,
        info: {
          ...ticket.info,
          dateStart: new Date(ticket.info.dateStart),
          dateEnd: new Date(ticket.info.dateEnd),
        },
      }),
    );
    ticketMachineService.send(dataProccessed.length > 0 ? 'DATA_LOADED' : 'FAIL');
    return dataProccessed;
  } catch (error) {
    ticketMachineService.send('FAIL');
    throw error;
  }
};

export default { findTickets, filterTickets, sortTickets, loadTickets, paginateTickets };
