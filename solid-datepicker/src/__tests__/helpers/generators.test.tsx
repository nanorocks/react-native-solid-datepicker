import { describe, expect, test } from '@jest/globals';
import {
  yearsGenerator,
  monthsGenerator,
  daysGenerator,
} from './../../helpers/generators';

describe('1. years generator', () => {
  const expected = [{ label: '2024', value: '2024' }];

  test('min and max are same date and value to be equal to array', () => {
    expect(yearsGenerator(2024, 2024)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});

describe('2. years generator', () => {
  const expected = [
    { label: '2025', value: '2025' },
    { label: '2024', value: '2024' },
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
  ];

  test('min > max date and value to be equal to array', () => {
    expect(yearsGenerator(2021, 2025)).toEqual(expected);
  });
});

describe('3. years generator', () => {
  test('min < max date and value to be equal to array', () => {
    expect(yearsGenerator(2025, 2021)).toEqual([]);
  });
});

describe('4. month generator', () => {
  test('month { label: string; value: string } array', () => {
    expect(monthsGenerator()).toEqual([
      {
        label: 'Jan',
        value: '1',
      },
      {
        label: 'Feb',
        value: '2',
      },
      {
        label: 'Mar',
        value: '3',
      },
      {
        label: 'Apr',
        value: '4',
      },
      {
        label: 'May',
        value: '5',
      },
      {
        label: 'Jun',
        value: '6',
      },
      {
        label: 'Jul',
        value: '7',
      },
      {
        label: 'Aug',
        value: '8',
      },
      {
        label: 'Sep',
        value: '9',
      },
      {
        label: 'Oct',
        value: '10',
      },
      {
        label: 'Nov',
        value: '11',
      },
      {
        label: 'Dec',
        value: '12',
      },
    ]);
  });
});

describe('5. day generator', () => {
  test('test days in specific year and month', () => {
    expect(daysGenerator('1', '2020').length).toEqual(31);
    expect(daysGenerator('2', '2000').length).toEqual(29);
    expect(daysGenerator('3', '2021').length).toEqual(31);
    expect(daysGenerator('4', '2022').length).toEqual(30);
    expect(daysGenerator('5', '2023').length).toEqual(31);
    expect(daysGenerator('6', '2024').length).toEqual(30);
    expect(daysGenerator('7', '2022').length).toEqual(31);
    expect(daysGenerator('8', '2011').length).toEqual(31);
    expect(daysGenerator('9', '2024').length).toEqual(30);
    expect(daysGenerator('10', '2002').length).toEqual(31);
    expect(daysGenerator('11', '2003').length).toEqual(30);
    expect(daysGenerator('12', '2004').length).toEqual(31);

    expect(daysGenerator('2', '2001').length).toEqual(28);
  });
});

describe('6. day generator', () => {
  test('test days with invalid date', () => {
    expect(daysGenerator('13', '2020').length).toEqual(0);
  });
});

describe('7. day generator try/catch', () => {
  test('test days with invalid date', () => {
    expect(daysGenerator('aaa', 'bbb')).toEqual([
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
      {
        label: '4',
        value: '4',
      },
      {
        label: '5',
        value: '5',
      },
      {
        label: '6',
        value: '6',
      },
      {
        label: '7',
        value: '7',
      },
      {
        label: '8',
        value: '8',
      },
      {
        label: '9',
        value: '9',
      },
      {
        label: '10',
        value: '10',
      },
      {
        label: '11',
        value: '11',
      },
      {
        label: '12',
        value: '12',
      },
      {
        label: '13',
        value: '13',
      },
      {
        label: '14',
        value: '14',
      },
      {
        label: '15',
        value: '15',
      },
      {
        label: '16',
        value: '16',
      },
      {
        label: '17',
        value: '17',
      },
      {
        label: '18',
        value: '18',
      },
      {
        label: '19',
        value: '19',
      },
      {
        label: '20',
        value: '20',
      },
      {
        label: '21',
        value: '21',
      },
      {
        label: '22',
        value: '22',
      },
      {
        label: '23',
        value: '23',
      },
      {
        label: '24',
        value: '24',
      },
      {
        label: '25',
        value: '25',
      },
      {
        label: '26',
        value: '26',
      },
      {
        label: '27',
        value: '27',
      },
      {
        label: '28',
        value: '28',
      },
      {
        label: '29',
        value: '29',
      },
      {
        label: '30',
        value: '30',
      },
      {
        label: '31',
        value: '31',
      },
    ]);
  });
});
