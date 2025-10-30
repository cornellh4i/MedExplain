import { StyleSheet, Text, View } from "react-native";
import ProfileIcon from "../components/ProfileIcon";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a testing page.</Text>
      {/* Add New Components here */}
      <ProfileIcon
          label="Monika Safford, MD"
          description="PALS Co-Founder"
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
