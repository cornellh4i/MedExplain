import React, {FC} from "react";
import { View, Text } from "react-native";
import { LucideIcon } from "lucide-react-native";




type CardProps = {
  className?: string;
  icon?: LucideIcon;
  label: string;
  description?: string;
};

const Card: FC<CardProps> = ({ className, icon: Icon, label, description }) => {
  return (
    <View className={`bg-white border-2 border-gray-300 rounded-[10px] px-4 py-6 shadow-lg ${className}`}>
      <View className="flex-col mb-2 gap-4">
        {Icon && <Icon size={24} color="#0F172A" className="mr-2" />}
        <Text className="text-[24px] font-normal text-slate-900">{label}</Text>
      </View >
      {description && (
        <Text className="text-[18px] text-[#7C7C7C] leading-snug mt-2">{description}</Text>
      )}
    </View>
  );
};

Card.displayName = 'Card';

export default Card;