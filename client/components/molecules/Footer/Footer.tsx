import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react-native";

const Footer: React.FC = () => {
  return (
    <View className="bg-[#0f3b80] text-white px-6 py-10">
      <View className="max-w-[680px] mx-auto flex flex-col items-center gap-6">

        <View className="flex-row items-center gap-3">
          <Image
            source={require("../../../assets/MedExplainHeart.png")}
            accessibilityLabel="MedExplain Logo 1"
            className="h-10 w-auto"
          />
          <Image
            source={require("../../../assets/MedExplainText.png")}
            accessibilityLabel="MedExplain Logo 2"
            className="h-10 w-auto"
          />
        </View>

        <View className="w-full">
          <TouchableOpacity
            accessibilityLabel="Contact Us"
            className="w-full bg-white py-3 rounded-md shadow-sm active:opacity-80"
          >
            <Text className="text-center text-[#0f3b80] font-medium">
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>

        <View className="w-full text-left">
          <Text className="text-lg leading-snug mb-2 text-white">
            Can’t find what you’re looking for?
          </Text>
          <TouchableOpacity>
            <Text className="text-lg underline font-medium text-white">
              Submit an article suggestion
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-6 items-center justify-center mt-2">
          <TouchableOpacity
            accessibilityLabel="Facebook"
            className="rounded-full bg-white p-3 shadow-sm active:scale-95"
          >
            <Facebook size={28} color="#0f3b80" />
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityLabel="Twitter"
            className="rounded-full bg-white p-3 shadow-sm active:scale-95"
          >
            <Twitter size={28} color="#0f3b80" />
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityLabel="LinkedIn"
            className="rounded-full bg-white p-3 shadow-sm active:scale-95"
          >
            <Linkedin size={28} color="#0f3b80" />
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityLabel="YouTube"
            className="rounded-full bg-white p-3 shadow-sm active:scale-95"
          >
            <Youtube size={28} color="#0f3b80" />
          </TouchableOpacity>
        </View>

        <View className="w-full mt-4">
          <Text className="text-sm leading-relaxed text-white/85 mb-3">
            Patient Activated Learning System (PALS) does not provide medical advice,
            diagnosis or treatment. Some material in the UMLS Metathesaurus is from
            copyrighted sources of the respective copyright holders. Users of the UMLS
            Metathesaurus are solely responsible for compliance with any copyright,
            patent or trademark restrictions and are referred to the copyright, patent
            or trademark notices appearing in the original sources, all of which are
            hereby incorporated by reference.
          </Text>

          <Text className="text-sm text-white/80">
            © 2023 Cornell University. All rights reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
