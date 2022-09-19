import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SolidDatePicker from 'react-native-solid-datepicker';

export default function App() {
  const [date, setDate] = React.useState(null);
  const [emptyDate, setEmptyDate] = React.useState(null);

  React.useEffect(() => {
    setDate('2022/3/15'); // setting value
  }, []);

  React.useEffect(() => {
    console.log({ emptyDate }); // do whatever you want ...
  }, [emptyDate]);

  return (
    <View style={styles.container}>
      <View>
        <SolidDatePicker
          date={date}
          onChange={(strDate: string) => setDate(strDate)}
          showError={true}
          minYear={'2022'}
          maxYear={'2025'}
          darkMode={true}
          isSearchable={false}
          isDisable={false}
        />
      </View>
      <View style={styles.text}>
        <Text>Set date: {JSON.stringify(date)}</Text>
      </View>
      <View>
        <SolidDatePicker
          date={emptyDate}
          onChange={(newDate: string) => setEmptyDate(newDate)}
          showError={false}
          isDisable={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 90,
    flex: 1.3,
    backgroundColor: 'white',
  },
  text: { alignItems: 'center' },
});
