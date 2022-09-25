import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
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
      const min = parseInt(minYear, 10);
      const max = parseInt(maxYear, 10);

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
