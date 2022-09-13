import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

import Day from './components/Day/Day';
import Month from './components/Month/Month';
import Year from './components/Year/Year';

function SolidDatePicker({ date, onChange }) {
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
        />
        <Month value={month} setMonth={setMonth} setDay={setDay} />
        <Day value={day} setDay={setDay} month={month} year={year} />
      </View>
      {/* <View style={{ marginTop: 10 }}> */}
      {inCompleted && <Text style={styles.inCompleted}>Incompleted date</Text>}
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  inCompleted: {
    color: 'red',
    fontSize: 11,
    marginTop: 60,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  dropdown: {
    width: 100,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default SolidDatePicker;
