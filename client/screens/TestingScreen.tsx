import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a testing page.</Text>
      {/* Add New Components here */}
      <Button
        label="Test Button"
        onPress={() => console.log("✅", "The button was pressed!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
