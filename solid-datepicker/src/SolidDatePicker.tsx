import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

import Day from './components/Day/Day';
import Month from './components/Month/Month';
import Year from './components/Year/Year';

function SolidDatePicker({
  date,
  onChange,
  showError = true,
  minYear = 1999,
  maxYear = 2030,
  darkMode = false,
}) {
  const [year, setYear] = useState<string | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);

  const [inCompleted, setInCompleted] = useState(true);

  useEffect(() => {
    if (date === null) {
      return;
    }

    const tmpDate = moment(date);

    setYear(tmpDate.year().toString());
    setMonth(tmpDate.month());
    setDay(tmpDate.date());
  }, []);

  useEffect(() => {
    if (day === null || month === null || year === null) {
      setInCompleted(true);
      onChange(null);
      return;
    }

    setInCompleted(false);
    onChange(new Date(parseInt(year), month, day));
  }, [day, month, year]);

  return (
    <>
      <View style={styles.container}>
        <Year
          value={year}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
          minYear={minYear}
          maxYear={maxYear}
          darkMode={darkMode}
        />
        <Month
          value={month}
          setMonth={setMonth}
          setDay={setDay}
          darkMode={darkMode}
        />
        <Day
          value={day}
          setDay={setDay}
          month={month}
          year={year}
          darkMode={darkMode}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
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
});

export default SolidDatePicker;
