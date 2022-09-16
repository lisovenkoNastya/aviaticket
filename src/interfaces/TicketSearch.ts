import { CityCode } from '@/interfaces/CityCode';

export interface TicketDirection {
  from?: CityCode;
  to?: CityCode;
}
export interface TicketDates {
  there?: Date;
  back?: Date;
}

export interface TicketSearch {
  dates: TicketDates;
  direction: TicketDirection;
}
