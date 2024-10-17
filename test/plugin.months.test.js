import dayjs from 'dayjs';
import jalali from '../src';
import { fa } from '../src/constant';
import localeData from 'dayjs/plugin/localeData';

const weekdays = 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_');

dayjs.extend(localeData);

dayjs.extend(jalali);

it('Should jalali month for localeData plugin', () => {
  const months = dayjs().calendar('jalali').locale('fa').localeData().months();
  const week = dayjs().calendar('jalali').locale('fa').localeData().weekdays();

  expect(months).toBe(fa.jmonths);
  expect(week).toEqual(weekdays);
});

it('dayjs factory jalali months for localeData plugin', () => {
  dayjs.calendar('gregory');
  dayjs.locale('en');

  let months = dayjs.localeData().months();
  let week = dayjs.localeData().weekdays();

  expect(months).not.toBe(fa.jmonths);
  expect(week).not.toEqual(weekdays);

  dayjs.calendar('jalali');
  dayjs.locale('fa');

  months = dayjs.localeData().months();
  week = dayjs.localeData().weekdays();

  expect(months).toBe(fa.jmonths);
  expect(week).toEqual(weekdays);
});
