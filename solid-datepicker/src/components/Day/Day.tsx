import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { dropdownStyleDark, dropdownStyleLight } from './../../styles/style';
import { daysGenerator } from './../../helpers/generators';

interface IDay {
  value: string;
  setDay: any;
  month: string | null;
  year: string | null;
  darkMode: boolean;
  isDisable: boolean;
}

function Day({ value, setDay, month, year, darkMode, isDisable }: IDay) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [data, setData] = useState<{ label: string; value: string }[] | []>([]);
  const [styles] = useState(darkMode ? stylesDark : stylesLight);

  useEffect(() => {
    setData(daysGenerator(month, year));
  }, [month, year]);

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
        disable={isDisable}
        iconColor={isDisable && styles.iconColor.color}
      />
    </>
  );
}

const stylesLight = StyleSheet.create(dropdownStyleLight);

const stylesDark = StyleSheet.create(dropdownStyleDark);

export default Day;
