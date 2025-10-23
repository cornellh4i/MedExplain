// client/src/components/atoms/ProfileIcon/ProfileIcon.tsx
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ProfileIconProps = {
  label: string;
  description?: string;
};

const ProfileIcon = ({ label, description }: ProfileIconProps) => {
  const photo = require("../../../../assets/icon.png"); 

  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 items-center justify-center"
      activeOpacity={1}
    >
      <Image
        source={photo}
        resizeMode="cover"
        style={{ width: 142, height: 142, borderRadius: 71, alignSelf: "center" }}
      />

      <View style={{ alignSelf: "center", alignItems: "center", marginTop: 12, maxWidth: 165 }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 21,
            fontWeight: "400",
            letterSpacing: -0.2,
            color: "#000",
            textAlign: "center",
          }}
        >
          {label}
        </Text>

        {description ? (
          <Text
            style={{
              marginTop: 8, 
              fontSize: 14,
              lineHeight: 17,
              fontWeight: "400",
              letterSpacing: -0.2, 
              color: "#000",
              textAlign: "center",
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
