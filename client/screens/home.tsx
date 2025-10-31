import React, { useState } from "react";
import { ScrollView, View, Text, StatusBar, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Heart, Pill, ShieldAlert } from "lucide-react-native";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function Home() {
  const [input, setInput] = useState("");
  const topPadding = Platform.OS === "android" ? StatusBar.currentHeight || 0 : 60;

  return (
    <View className="flex-1 bg-white">
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      
      <LinearGradient
        colors={["#E5EBFF", "#FFFFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "flex-start",
            paddingBottom: 120,
          }}
        >
         
          <View
            className="w-full items-center justify-start"
            style={{ paddingTop: topPadding + 60, paddingBottom: 60 }}
          >
            <View className="w-[90%] max-w-[391px] items-center">
              {/* Title */}
              <Text
                className="text-[28px] text-[#000] text-center font-bold leading-[28px]"
                style={{
                  fontFamily: Platform.OS === "ios" ? "SF Pro Display" : undefined,
                  fontWeight: "700",
                  letterSpacing: -0.56,
                }}
              >
                Reliable answers to your{"\n"}medical questions
              </Text>

              {/* Subtitle */}
              <Text
                className="text-[15px] text-[#000] text-center leading-[15.4px] mt-[8px]"
                style={{
                  fontFamily: Platform.OS === "ios" ? "SF Pro Text" : undefined,
                  fontWeight: "500",
                  letterSpacing: 0,
                }}
              >
                We provide accessible, easy-to-understand health information backed by
                trustworthy medical research.
              </Text>
            </View>


            {/* Search Bar */}
            <View className="w-[91%] max-w-[359px] mt-[20px]">
              <SearchBar
                placeholder="Search symptoms, medicines, or illnesses"
                value={input}
                onChangeText={setInput}
              />
            </View>
          </View>

          {/* CATEGORY CARDS */}
          <View
            className="w-full items-center justify-center"
            style={{
              paddingTop: 80,
              paddingBottom: 80,
              paddingHorizontal: 18.5,
            }}
          >
            <View className="w-full flex flex-col items-center justify-center gap-[12px]">
              <Card
                icon={Heart}
                color="#433592"
                label="Symptom"
                description="Examples: high blood pressure, sneezing, nosebleeds, coughing, headache, sore throat, stomach pain"
                className="bg-white w-[391px] rounded-[12px] p-[21px] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              />

              <Card
                icon={Pill}
                color="#C145AB"
                label="Medicine"
                description="Examples: Acetaminophen, Ibuprofen, Aspirin, Lisinopril, Simvastatin, Levothyroxine, Amoxicillin, Albuterol."
                className="bg-white w-[391px] rounded-[12px] p-[21px] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              />

              <Card
                icon={ShieldAlert}
                color="#67A342"
                label="Illness"
                description="Examples: common cold, influenza, allergies, gastroenteritis, diabetes, cancer, multiple sclerosis, HIV/AIDS"
                className="bg-white w-[391px] rounded-[12px] p-[21px] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
