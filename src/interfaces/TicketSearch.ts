import { CityCode } from '@/interfaces/CityCode';

export interface TicketDirection {
  from?: CityCode;
  to?: CityCode;
}
export interface TicketDates {
  there?: Date;
  back?: Date;
}
