import { Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <View className="items-center justify-center">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className="border border-[#0F3682] p-[10px] rounded-[30px]"
      >
        <Text className="text-[#0F3682]">{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
