# react-native-solid-datepicker

[![Generic badge](https://img.shields.io/badge/StableVersion-^1.2.7-green.svg)](https://shields.io/)
[![NPM](https://img.shields.io/npm/dm/react-native-solid-datepicker.svg)](https://www.npmjs.com/package/react-native-solid-datepicker)
[![GitHub license](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/nanorocks/react-native-solid-datepicker/blob/main/LICENSE)

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
  container: { alignItems: 'center', paddingTop: 90, flex: 1.3 },
  text: { alignItems: 'center' },
});
```

## Properties

| Property     | Description                                              |
| ------------ | -------------------------------------------------------- |
| date         | (required) State variable                                |
| onChange     | (required) State varable change value                    |
| showError    | (optional) Boolean value (true/false)                    |
| minYear      | (optional) String value                                  |
| maxYear      | (optional) String value                                  |
| darkMode     | (optional) Boolean value (true/false)                    |
| isSearchable | (optional) Boolean value (true/false) for month and year |
| isDisable    | (optional) Boolean value (true/false) disable datepicker |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
