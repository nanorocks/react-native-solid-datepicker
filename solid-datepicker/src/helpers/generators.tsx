import moment from 'moment';

export const yearsGenerator = (
  min: number,
  max: number
): { label: string; value: string }[] => {
  let years = [];

  for (let i = min; i <= max; i++) {
    years.push({
      label: i.toString(),
      value: i.toString(),
    });
  }

  return [...new Set(years)].reverse();
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
  } catch (e: any) {
    /* istanbul ignore next */
    return Array.from({ length: 31 }, (_, i) => i + 1).map((item) => ({
      label: item.toString(),
      value: item.toString(),
    }));
  }
};
