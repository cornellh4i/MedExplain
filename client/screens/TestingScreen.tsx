import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Star } from "lucide-react-native";

import SearchBar from "../components/SearchBar";
import Card  from "../components/Card"

export default function App() {
  const [input, setInput] = useState("");

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>This is a testing page.</Text>
      {/* Add New Components here */}
      <SearchBar
        className="mt-4 w-full"
        placeholder="searching.."
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      
      <Card
        icon={Star}
        label="Health Insights"
        description="View detailed analytics about your recent health data."
        className="w-[90%] mt-8"
      />
    </View>
  );
}

