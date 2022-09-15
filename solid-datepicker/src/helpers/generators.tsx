import moment from 'moment';

export const yearsGenerator = (
  min: number,
  max: number
): { label: string; value: string }[] => {
  const years = [];
  const dateStart = moment().subtract(min, 'y');
  const dateEnd = moment().add(max, 'y');

  while (dateEnd.diff(dateStart, 'years') >= 0) {
    years.push({
      label: dateStart.format('YYYY').toString(),
      value: dateStart.format('YYYY').toString(),
    });

    dateStart.add(1, 'year');
  }

  return years.reverse();
};

export const monthsGenerator = (): { label: string; value: string }[] => {
  return moment.monthsShort().map((monthName: string, index: number) => ({
    label: monthName,
    value: (index + 1).toString(),
  }));
};

export const daysGenerator: any = (
  month: string | null,
  year: string | null
): { label: string; value: string }[] => {
  try {
    const monthNum: number = parseInt(month, 10);
    const yearNum: number = parseInt(year, 10);

    const calculateMonth: string =
      monthNum > 9 ? monthNum.toString() : `0${monthNum.toString()}`;

    const formatYearAndMonth: string = `${yearNum.toString()}-${calculateMonth}`;

    const daysFromYearAndMonth = Array.from(
      { length: moment(formatYearAndMonth, 'YYYY-MM').daysInMonth() },
      (_, i) => i + 1
    );

    // console.log("Calculated:", {daysFromYearAndMonth});

    return daysFromYearAndMonth.map((item) => ({
      label: item.toString(),
      value: item.toString(),
    }));
  } catch (e) {
    const randomYearAndMonth: string = '2020-03';

    const daysFromYearAndMonth = Array.from(
      { length: moment(randomYearAndMonth, 'YYYY-MM').daysInMonth() },
      (_, i) => i + 1
    );

    // console.log("Random:", {daysFromYearAndMonth});

    return daysFromYearAndMonth.map((item) => ({
      label: item.toString(),
      value: item.toString(),
    }));
  }
};
