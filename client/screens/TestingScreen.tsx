import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import SearchBar from "../components/SearchBar";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <Text>This is a testing page.</Text>
      {/* Add New Components here */}
      <SearchBar
        placeholder="searching.."
        value={input}
        onChangeText={(text) => setInput(text)}
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
