import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';
import { dropdownStyleDark, dropdownStyleLight } from './../../styles/style';

function Day({ value, setDay, month, year, darkMode }) {
  const styles = darkMode ? stylesDark : stylesLight;

  const daysGenerator: any = () => {
    let randomYearAndMonth = '2020-03';
    // get random days
    if (month !== null && year !== null) {
      const tmpMonth =
        parseInt(month) > 9
          ? (parseInt(month) + 1).toString()
          : '0' + (parseInt(month) + 1);
      randomYearAndMonth = year.toString() + '-' + tmpMonth;
    }

    const daysFromYearAndMonth = Array.from(
      { length: moment(randomYearAndMonth).daysInMonth() },
      (_, i) => i + 1
    );

    return daysFromYearAndMonth.map((item) => ({
      label: item,
      value: item + 1,
    }));
  };

  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(daysGenerator());
  }, [month, year]);

  return (
    <>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#mmm' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Day' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setDay(item.value);
          setIsFocus(false);
        }}
      />
    </>
  );
}

const stylesLight = StyleSheet.create(dropdownStyleLight);

const stylesDark = StyleSheet.create(dropdownStyleDark);

export default Day;
