import { Ticket, TicketRaw } from '@/interfaces/Ticket';
import { CityCode } from '@/interfaces/CityCode';
import { TicketDates, TicketDirection } from '@/interfaces/TicketSearch';
import { ticketMachineService } from '@/machines/ticketMachine';
import ticketApi from '@/api/ticketApi';
import isSameDay from 'date-fns/isSameDay';
import { TicketSortingMode } from '@/interfaces/TicketSortingMode';

const getSuitableTickets = (
  tickets: Ticket[],
  { dateThere, directionFrom, directionTo }: { dateThere?: Date; directionFrom?: CityCode; directionTo?: CityCode },
): Ticket[] =>
  tickets.filter((ticket) => {
    let isSuitable = true;
    const { origin, destination, dateStart } = ticket.info;
    if (isSuitable && directionFrom) isSuitable = origin === directionFrom;
    if (isSuitable && directionTo) isSuitable = destination === directionTo;
    if (isSuitable && dateThere) isSuitable = isSameDay(dateStart, dateThere);
    return isSuitable;
  });

const findTickets = (
  tickets: Ticket[],
  { dates, direction }: { dates: TicketDates; direction: TicketDirection },
): Ticket[] => {
  const ticketsThere = getSuitableTickets(tickets, {
    dateThere: dates.there,
    directionFrom: direction.from,
    directionTo: direction.to,
  });
  const ticketsBack =
    dates.back && direction.from && direction.to
      ? getSuitableTickets(tickets, {
          dateThere: dates.back,
          directionFrom: direction.to,
          directionTo: direction.from,
        })
      : [];
  const result = [...ticketsThere, ...ticketsBack];
  return result;
};

const filterTickets = (
  tickets: Ticket[],
  { stopNumbers, company }: { stopNumbers: number[]; company: string },
): Ticket[] =>
  tickets.filter((ticket) => {
    const { companyId } = ticket;
    const { stops } = ticket.info;
    return (
      (stopNumbers.length === 0 || stopNumbers.includes(stops.length)) &&
      (!company || company === 'all' || companyId === company)
    );
  });

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

export default { findTickets, filterTickets, sortTickets, loadTickets };
