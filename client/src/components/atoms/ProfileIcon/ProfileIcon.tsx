import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProfileIconProps = {
  label: string;
  description?: string;
};

const ProfileIcon = ({ label, description }: ProfileIconProps) => {
  const photo = require("../../../../assets/icon.png"); // adjust for photo

  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 items-center justify-center"
      style={{ alignSelf: "center" }}
      activeOpacity={1}
    >
      <Image
        source={photo}
        resizeMode="cover"
        style={{ width: 142, height: 142, borderRadius: 71 }}
      />
      <View className="mt-4 items-center" style={{ maxWidth: 240 }}>
        <Text
          className="text-center"
          style={{
            fontSize: 18,
            lineHeight: 18,
            fontWeight: "500",  
            letterSpacing: -0.36, 
            color: "#000",
          }}
        >
          {label}
        </Text>

        {description ? (
          <Text
            className="text-center"
            style={{
              marginTop: 4,
              fontSize: 14,
              lineHeight: 14,
              fontWeight: "400",   
              letterSpacing: -0.28, 
              color: "#000",
            }}
          >
            {description}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileIcon;
