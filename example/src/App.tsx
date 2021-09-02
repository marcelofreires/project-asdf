import * as React from 'react';
import { Button } from 'project-asdf';

import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <View style={styles.box}>
        <Button
          label="Increase the conter"
          onPress={() => setCount((prevState) => prevState + 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginVertical: 20,
  },
});
