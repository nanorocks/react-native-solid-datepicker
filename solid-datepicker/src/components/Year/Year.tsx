import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';
import { dropdownStyleDark, dropdownStyleLight } from './../../styles/style';
import { yearsGenerator } from './../../helpers/generators';

interface IYear {
  value: string;
  setYear: any;
  setMonth: any;
  setDay: any;
  minYear: string;
  maxYear: string;
  darkMode: boolean;
  isSearchable: boolean;
  isDisable: boolean;
}

function Year({
  value,
  setYear,
  setMonth,
  setDay,
  minYear,
  maxYear,
  darkMode,
  isSearchable,
  isDisable,
}: IYear) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [data, setData] = useState<{ label: string; value: string }[] | []>([]);
  const [styles] = useState<any>(darkMode ? stylesDark : stylesLight);

  useEffect(() => {
    try {
      const currentYear: number = moment().year();
      const maxYearNum: number = parseInt(maxYear, 10);
      const minYearNum: number = parseInt(minYear, 10);

      const max: number =
        currentYear <= maxYearNum
          ? Math.abs(currentYear - maxYearNum)
          : maxYearNum - currentYear;
      const min: number = Math.abs(minYearNum - currentYear);

      setData(yearsGenerator(min, max));
    } catch (e) {
      setData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && styles.isFocus,
          isDisable && styles.dropdownBg,
        ]}
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
        disable={isDisable}
        iconColor={isDisable && styles.iconColor.color}
      />
    </>
  );
}

const stylesLight = StyleSheet.create(dropdownStyleLight);

const stylesDark = StyleSheet.create(dropdownStyleDark);

export default Year;
