import { Alert, StyleSheet, View } from 'react-native';
import Button from '../components/Button/Button';

export default function ButtonTest() {
  return (
    <View style={styles.container}>
      <Button label="Test Button" onPress={() => Alert.alert('✅', 'The button was pressed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
