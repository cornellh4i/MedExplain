import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProfileIconProps = {
  label?: string;        // label is optional now
  description?: string;
};

const ProfileIcon = ({ label, description }: ProfileIconProps) => {
  // to change: path?
  const photo = require("../assets/icon.png");

  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 flex-row items-center"
      activeOpacity={1}
    >
      <Image
        source={photo}
        resizeMode="cover"
        style={{ width: 48, height: 48, borderRadius: 71, alignSelf: "center"}}
      />
      <View className="ml-[11px] flex-1 min-w-0">
        <Text
          numberOfLines={1}
          className="text-[16px] leading-[19px] font-semibold text-black"
        >
          {label ?? ""}
        </Text>

        {description ? (
          <Text
            numberOfLines={1}
            className="mt-[4px] text-[14px] leading-[17px] font-normal text-black"
          >
            {description}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileIcon;
