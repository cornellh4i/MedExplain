import { Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  label: string;
  color?: string;
  className?: string ;
  onPress: () => void;
};

export default function Button({ label, className, color, onPress }: ButtonProps) {
  return (
    <View className="items-center justify-center">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className={`border border-[#121B49] p-[10px] rounded-[30px] ${className}`}
      >
        <Text className={`text-center ${color}`}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
