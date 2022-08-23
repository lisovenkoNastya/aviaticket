const MS_IN_MIN = 1000 * 60;
const MIN_IN_HOUR = 60;
const MS_IN_HOUR = MS_IN_MIN * MIN_IN_HOUR;

const msToString = (ms: number): string => {
  const hours = Math.floor(ms / MS_IN_HOUR);
  const minutes = Math.floor(ms / MS_IN_MIN) % MIN_IN_HOUR;
  return `${hours}ч ${minutes}м`;
};

const dateToString = (date: Date): string => {
  return `${date.getDate()}.${date.getMonth() + 1}  ${date.getHours()}:${date.getMinutes()}`;
};
export { msToString, dateToString };
