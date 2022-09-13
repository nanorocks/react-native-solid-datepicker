import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';

function Month({ value, setMonth, setDay}) {

  const monthsGenerator : any = () => {
   return moment.monthsShort().map((monthName, index) => ({label: monthName, value: index + 1 }))
  };

  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    return setData(monthsGenerator());
  }, [])

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
          placeholder={!isFocus ? 'Mounth' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setMonth(item.value);
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
    margin: 5
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



export default Month;
