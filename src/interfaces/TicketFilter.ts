import { CompanyId } from '@/models/company';

export type StopNumber = number[];
export type CompanyFilterValue = CompanyId | 'all';

export interface TicketFilter {
  stopNumber: StopNumber;
  company: CompanyFilterValue;
}
