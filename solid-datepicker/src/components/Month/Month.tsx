import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { dropdownStyleDark, dropdownStyleLight } from './../../styles/style';
import { monthsGenerator } from './../../helpers/generators';
interface IMonth {
  value: string;
  setMonth: any;
  setDay: any;
  darkMode: boolean;
  isSearchable: boolean;
  isDisable: boolean;
}

function Month({
  value,
  setMonth,
  setDay,
  darkMode,
  isSearchable,
  isDisable,
}: IMonth) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [data, setData] = useState<{ label: string; value: string }[] | []>([]);
  const [styles] = useState(darkMode ? stylesDark : stylesLight);

  useEffect(() => {
    setData(monthsGenerator());
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
        placeholder={!isFocus ? 'Mounth' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setMonth(item.value);
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

export default Month;
