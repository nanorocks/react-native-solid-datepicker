import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';
import { dropdownStyleDark, dropdownStyleLight } from './../../styles/style';

function Year({
  value,
  setYear,
  setMonth,
  setDay,
  minYear,
  maxYear,
  darkMode,
  isSearchable
}) {
  const styles = darkMode ? stylesDark : stylesLight;

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

    return years.reverse();
  };

  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const currentYear: number = moment().year();
    const max =
      currentYear <= maxYear
        ? Math.abs(currentYear - maxYear)
        : maxYear - currentYear;
    const min = Math.abs(minYear - currentYear);

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
        search={isSearchable}
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

const stylesLight = StyleSheet.create(dropdownStyleLight);

const stylesDark = StyleSheet.create(dropdownStyleDark);

export default Year;
