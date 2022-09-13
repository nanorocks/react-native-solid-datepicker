import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';

function Year({ value, setYear, setMonth, setDay, min = 25, max = 1 }) {
  const yearsGenerator: any = (min: number, max: number) => {
    const years = [];
    const dateStart = moment().subtract(min, 'y');
    const dateEnd = moment().add(max, 'y');
    while (dateEnd.diff(dateStart, 'years') >= 0) {
      years.push({
        label: dateStart.format('YYYY'),
        value: dateStart.format('YYYY'),
      });
      dateStart.add(1, 'year');
    }
    return years;
  };

  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    return setData(yearsGenerator(min, max));
  }, []);
  return (
    <>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#mmm' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search={true}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Year' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setYear(item.value);
          setMonth(null);
          setDay(null);
          setIsFocus(false);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: 100,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 18,
    margin: 5,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
});

export default Year;
