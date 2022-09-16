import { CityCode } from '@/interfaces/CityCode';
import { TicketFilter } from '@/interfaces/TicketFilter';
import { TicketSearch } from '@/interfaces/TicketSearch';
import { CompanyId } from '@/models/company';
import isSameDay from 'date-fns/isSameDay';

export interface TicketRaw {
  id: string;
  // Цена в рублях
  price: number;
  // идентификатор компании которая осуществляет перевозку
  companyId: CompanyId;
  // Массив идентификаторов перелётов
  info: {
    // Код города откуда вылет
    origin: CityCode;
    // Код города куда летим
    destination: CityCode;
    // Дата и время вылета в unix времени
    dateStart: number;
    // Дата и время прибытия в unix времени
    dateEnd: number;
    // Массив кодов городов с пересадками
    stops: CityCode[];
    // Длительность полета в миллисекундах
    duration: number;
  };
}

export interface Ticket {
  id: string;
  price: number;
  companyId: CompanyId;
  info: {
    origin: CityCode;
    destination: CityCode;
    dateStart: Date;
    dateEnd: Date;
    stops: CityCode[];
    duration: number;
  };
}

export const isTicketValid = (
  ticket: Ticket,
  { dates = {}, direction = {}, stopNumber = [], company }: Partial<TicketSearch & TicketFilter>,
): boolean => {
  const { from, to } = direction;
  const { there } = dates;
  const { origin, destination, dateStart, stops } = ticket.info;
  const { companyId } = ticket;

  if (from && origin !== from) return false;
  if (to && destination !== to) return false;
  if (there && !isSameDay(dateStart, there)) return false;
  if (stopNumber.length > 0 && !stopNumber.includes(stops.length)) return false;
  if (company && company !== companyId) return false;

  return true;
};
