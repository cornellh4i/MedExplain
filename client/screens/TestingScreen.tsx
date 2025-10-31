import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Star } from "lucide-react-native";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Button from "../components/Button";
import Home from "./home"; 

export default function App() {
  const [input, setInput] = useState("");

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="items-center justify-center p-6">
        <Text className="text-lg font-semibold mb-4">
          This is a testing page.
        </Text>

       
        <Home />

        
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
          className="w-[90%] mt-8 mb-8"
        />

        <Button
          label="Test Button"
          onPress={() => console.log("✅", "The button was pressed!")}
        />
      </View>
    </ScrollView>
  );
}
