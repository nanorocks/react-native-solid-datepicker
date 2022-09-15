import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SolidDatePicker from 'react-native-solid-datepicker';

export default function App() {
  const [date, setDate] = React.useState("2022/3/15");
  const [date1, setDate1] = React.useState(null);

  return (
    <View style={styles.container}>
      <View>
        <SolidDatePicker
          date={date}
          onChange={(date: string) => setDate(date)}
          showError={true}
          minYear={"2022"}
          maxYear={"2025"}
          darkMode={false}
          isSearchable={false}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>Set date: {JSON.stringify(date)}</Text>
      </View>
      <View>
        <SolidDatePicker
          date={date1}
          onChange={(date: string) => setDate1(date)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingTop: 90, flex: 1.3 },
});
