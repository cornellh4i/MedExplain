// import { Star } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";

import About from "./about";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <View className="flex-1 bg-white items-center justify-center">
      {/* <Text>This is a testing page.</Text> */}
      < About/>
      {/* <ProfileIcon
        label="Monika Safford, MD"
        description="PALS Co-Founder"
      /> */}
      {/* <SearchBar
        className="mt-4 w-full"
        placeholder="searching.."
        value={input}
        onChangeText={(text) => setInput(text)}
      /> */}

      {/* <Card
        icon={Star}
        label="Health Insights"
        description="View detailed analytics about your recent health data."
        className="w-[90%] mt-8 mb-8"
      /> */}
      {/* <Button
        label="Test Button"
        onPress={() => console.log("✅", "The button was pressed!")}
      /> */}
    </View>
  );
}
