# react-native-solid-datepicker

[![Generic badge](https://img.shields.io/badge/StableVersion-^1.2.7-green.svg)](https://shields.io/)
[![NPM](https://img.shields.io/npm/dm/react-native-solid-datepicker.svg)](https://www.npmjs.com/package/react-native-solid-datepicker)
[![GitHub license](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/nanorocks/react-native-solid-datepicker/blob/main/LICENSE)
[![Tests CI](https://github.com/nanorocks/react-native-solid-datepicker/actions/workflows/jest.yml/badge.svg)](https://github.com/nanorocks/react-native-solid-datepicker/actions/workflows/jest.yml)
![](https://raw.githubusercontent.com/nanorocks/react-native-solid-datepicker/main/solid-datepicker/coverage/badge-lines.svg)

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
import { StyleSheet, View } from 'react-native';
import SolidDatePicker from 'react-native-solid-datepicker';
import React from 'react';

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
  container: { alignItems: 'center', paddingTop: 90, flex: 1.3 },
  text: { alignItems: 'center' },
});
```

## Properties

| Property     | Description                                               | Default value  |
| ------------ | --------------------------------------------------------- | ---------------|
| date         | (required) State variable                                 | N/A            |
| onChange     | (required) State varable change value                     | N/A            |
| showError    | (optional) Boolean value (true/false)                     | true           |
| minYear      | (optional) String value                                   | 1999           |
| maxYear      | (optional) String value                                   | 2030           |
| darkMode     | (optional) Boolean value (true/false)                     | false          |
| isSearchable | (optional) Boolean value (true/false) for month and year  | true           |
| isDisabled    | (optional) Boolean value (true/false) disable datepicker | false          |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
