import { StyleSheet, View } from "react-native";

import "./global.css";

import TestingScreen from "./screens/TestingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TestingScreen />
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
