import React from "react";
import { View, Image } from "react-native";
import { Menu } from "lucide-react-native";

const Header: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center px-8 py-4 border-b border-gray-200 bg-white">
      <View className="flex-row items-center space-x-3">
        <Image
          source={require("../../../assets/MedExplainHeart.png")}
          accessibilityLabel="MedExplain Logo 1"
          className="h-8 w-auto"
        />
        <Image
          source={require("../../../assets/MedExplainHText.png")}
          accessibilityLabel="MedExplain Logo 2"
          className="h-8 w-auto"
        />
      </View>

      <View className="flex-row items-center space-x-8 text-gray-600">
        <Menu color="#4b5563" /> 
      </View>
    </View>
  );
};

export default Header;
