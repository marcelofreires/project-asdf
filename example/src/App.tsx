import * as React from 'react';
import { Button } from 'project-asdf';

import { StyleSheet, View } from 'react-native';

export default function App() {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handlePress = () => {
    setLoading((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button
          label="Increase the conter"
          onPress={handlePress}
          backgroundColor="#560bad"
          loading={loading}
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
