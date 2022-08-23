import { CityCode } from './CityCode';

export interface TicketDirection {
  from?: CityCode;
  to?: CityCode;
}
export interface TicketDates {
  there?: Date;
  back?: Date;
}
