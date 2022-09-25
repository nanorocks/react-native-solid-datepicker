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
