# react-native-solid-datepicker

An customizable date-picker for react-native with Android and IOS support

## Installation

```sh
npm install react-native-solid-datepicker

or

yarn add react-native-solid-datepicker
```

## Example

![](https://github.com/nanorocks/react-native-solid-datepicker/blob/main/example_iphone.gif)

## Usage

```js
import { StyleSheet, Text, View } from 'react-native';
import SolidDatePicker from 'react-native-solid-datepicker';
import React from 'react';

export default function App() {
  const [date, setDate] = React.useState('2022/3/15');
  const [date1, setDate1] = React.useState(null);

  return (
    <View style={styles.container}>
      <View>
        <SolidDatePicker
          date={date}
          onChange={(date: string) => setDate(date)}
          showError={true}
          minYear={'2022'}
          maxYear={'2025'}
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
```

## Properties

| Property     | Description                                             |
| ------------ | ------------------------------------------------------- |
| date         | (required) State variable                               |
| onChange     | (required) State varable change value                   |
| showError    | (optional) Bolean value (true/false)                    |
| minYear      | (optional) String value                                 |
| maxYear      | (optional) String value                                 |
| darkMode     | (optional) Bolean value (true/false)                    |
| isSearchable | (optional) Bolean value (true/false) for month and year |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
