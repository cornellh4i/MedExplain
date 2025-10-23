import { StyleSheet, Text, View , Alert} from "react-native";
import Card from "../src/components/atoms/Card/Card";
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const handlePress = () => {
    Alert.alert('Card Pressed', 'You pressed the Heart Health card!');
  };
  return (
    <View style={styles.container}>
       <Card
        icon={<Ionicons name="heart-circle" size={56} color="#FFFFFF" />}
        label="Symptom"
        description="high blood pressure, sneezing, nosebleeds, coughing, headache, sore throat, stomach pain"
        onPress={handlePress}
        iconBackgroundColor="#5B4FA3"
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
