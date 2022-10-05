import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import SolidDatePicker from 'react-native-solid-datepicker';

export default function App() {
  const [date, setDate] = React.useState(null);

  React.useEffect(() => {
    setDate('2022/12/15');
  }, []);

  return (
    <View style={styles.container}>
      <SolidDatePicker
        date={date}
        onChange={(strDate: string) => setDate(strDate)}
      />
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
