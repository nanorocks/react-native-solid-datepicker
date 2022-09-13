# react-native-solid-datepicker
SolidDatePicker an customisable data-picker for react-nativeTopicsResources
## Installation

```sh
npm install react-native-solid-datepicker
```

## Usage

```js
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
          onChange={(date:string) => setDate(date)}
        />
      </View>
      <View style={{marginTop: 90, alignItems: 'center'}}>
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
  }
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
