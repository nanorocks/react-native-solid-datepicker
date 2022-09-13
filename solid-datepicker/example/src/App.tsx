import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SolidDatePicker from 'react-native-solid-datepicker';

export default function App() {
  const [date, setDate] = React.useState(new Date().toString());

  return (
    <>
      <View style={styles.container}>
        <SolidDatePicker
          date={date}
          onChange={(date: string) => setDate(date)}
        />
      </View>
      <View style={{ marginTop: 90, alignItems: 'center' }}>
        <Text>Set date: {JSON.stringify(date)}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
