import React, { FC } from "react";
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
    <View className={`bg-white border-gray-300 rounded-[8px] p-[20px] shadow-lg ${className}`}>
      <View className="flex-col mb-2 gap-4">
        {Icon && <Icon size={24} color="#0F172A"  />}
        <Text className="text-[24px] font-normal text-slate-900 mt-[13px]">{label}</Text>
      </View >
      {description && (
        <Text className="text-[18px] text-[#7C7C7C] leading-snug mt-[20px]">{description}</Text>
      )}
    </View>
  );
};

Card.displayName = 'Card';

export default Card;