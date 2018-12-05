import { eachDay, isFriday, isSaturday } from 'date-fns';

// 0-Jan, 1-Feb, 2-Mar, 3-Apr, 4-May, 5-Jun, 6-Jul, 7-Aug, 8-Sep, 9-Oct, 10-Nov, 11-Dec
const daysInRange: string[] = eachDay(
  new Date(2010, 6, 13),
  new Date(2010, 6, 30)
).map((d) => d.toLocaleDateString());

const isFriSat: string[] = daysInRange.filter(
  (d) => isFriday(d) || isSaturday(d)
);
console.log(`We have passed ${isFriSat.length} Friday(s) and Saturday(s).`);
