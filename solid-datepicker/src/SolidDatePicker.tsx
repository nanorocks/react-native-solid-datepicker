import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Day from './components/Day/Day';
import Month from './components/Month/Month';
import Year from './components/Year/Year';

interface ISolidDatePicker {
  date: string | null;
  onChange: any;
  showError?: boolean;
  minYear?: string;
  maxYear?: string;
  darkMode?: boolean;
  isSearchable?: boolean;
  isDisable?: boolean;
}

function SolidDatePicker({
  date,
  onChange,
  showError = true,
  minYear = '1999',
  maxYear = '2030',
  darkMode = false,
  isSearchable = true,
  isDisable = false,
}: ISolidDatePicker) {
  const [year, setYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);

  const [inCompleted, setInCompleted] = useState<boolean>(true);

  const [stringDate, setStringDate] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (date === '') {
        onChange(null);
        setYear(null);
        setMonth(null);
        setDay(null);
        return;
      }

      const splitDate: string[] = date.split('/');

      setYear(splitDate[0]);
      setMonth(splitDate[1]);
      setDay(splitDate[2]);
    } catch (e) {
      // do nothing ...
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  useEffect(() => {
    if (year === null || month === null || day === null) {
      setInCompleted(true);
      onChange(null);
      return;
    }

    setInCompleted(false);
    setStringDate(`${year}/${month}/${day}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, day]);

  useEffect(() => {
    if (stringDate === null) {
      onChange(null);
      setYear(null);
      setMonth(null);
      setDay(null);
      return;
    }

    onChange(stringDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringDate]);

  return (
    <>
      <View style={styles.container} data-testid="component">
        <Year
          value={year}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
          minYear={minYear}
          maxYear={maxYear}
          darkMode={darkMode}
          isSearchable={isSearchable}
          isDisable={isDisable}
        />
        <Month
          value={month}
          setMonth={setMonth}
          setDay={setDay}
          darkMode={darkMode}
          isSearchable={isSearchable}
          isDisable={isDisable}
        />
        <Day
          value={day}
          setDay={setDay}
          month={month}
          year={year}
          darkMode={darkMode}
          isDisable={isDisable}
        />
      </View>
      <View style={styles.error}>
        {showError && inCompleted && (
          <Text style={styles.inCompleted}>*Incompleted date</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inCompleted: {
    color: 'red',
    fontSize: 11,
  },
  container: {
    flexDirection: 'row',
  },
  error: {
    alignItems: 'center',
  },
});

export default SolidDatePicker;
