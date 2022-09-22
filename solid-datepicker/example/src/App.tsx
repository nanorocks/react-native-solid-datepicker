import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SolidDatePicker from 'react-native-solid-datepicker';

export default function App() {
  const [date, setDate] = React.useState(null); // default state must be null
  const [emptyDate, setEmptyDate] = React.useState(null); // default state must be null

  React.useEffect(() => {
    setDate('2022/12/15'); // state will be value or empty string
    setDate('');
    setEmptyDate('2022/12/15');
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <SolidDatePicker
          date={date}
          onChange={(strDate: string) => setDate(strDate)}
          showError={true}
          minYear={'2022'}
          maxYear={'2025'}
          darkMode={false}
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
