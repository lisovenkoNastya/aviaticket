import { CityCode } from './CityCode';

export interface TicketRaw {
  id: string;
  // Цена в рублях
  price: number;
  // идентификатор компании которая осуществляет перевозку
  companyId: string;
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
  companyId: string;
  info: {
    origin: CityCode;
    destination: CityCode;
    dateStart: Date;
    dateEnd: Date;
    stops: CityCode[];
    duration: number;
  };
}
