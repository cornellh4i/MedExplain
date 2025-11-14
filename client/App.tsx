import { StyleSheet, View } from "react-native";

import "./global.css";

import TestingScreen from "./screens/TestingScreen";
import Footer from "./components/molecules/Footer/Footer";
import Header from "./components/molecules/Header/Header";


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
      <TestingScreen />
    </View>
  );
}

// className="flex-1 bg-white items-stretch justify-center"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});