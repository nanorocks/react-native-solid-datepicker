import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';

function Day({ value, setDay, month, year }) {

  const daysGenerator : any = () => {
    if(month === null || year === null) {
      return Array.from(Array(moment('2020-03').daysInMonth()).keys()).map(day => ({label: (day + 1).toString(), value: (day + 1)}))
    }

    const getDaysForMonth = Array.from(Array(moment(year + '-0' + month).daysInMonth()).keys()).map(day => ({label: (day + 1).toString(), value: (day + 1)}))

    return getDaysForMonth;
  };

  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    setData(daysGenerator());
  }, [month, year])

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
          placeholder={!isFocus ? 'Day' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setDay(item.value);
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


export default Day;
