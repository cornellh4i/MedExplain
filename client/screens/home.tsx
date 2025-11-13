import React, { useState } from "react";
import { ScrollView, View, Text, StatusBar, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Heart, Pill, ShieldAlert } from "lucide-react-native";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Button from "../components/Button";

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
          <View className="flex flex-col px-[32px] gap-[24px] ">
            <Text className="text-[24px] font-[700]">
              We ensure our articiles are credible and trustworthy.
            </Text>
            <View className="flex-col gap-[12px]">
              <Text className="text-[14px]">
                Our content is curated and crafted by experienced medical professionals, 
                including licensed doctors and medical students who work under the expert 
                guidance of experienced physicians. 
              </Text>
              <Text className="text-[14px] ">
                Information is then subjected to a thorough evaluation process by qualified 
                experts to ensure its precision. This review process enhances the credibility
                of the information presented, providing users with reliable insights into various health topics. 
                Finally, our dedication to transparency is reflected in our practice of displaying the credentials 
                of the content creators.
              </Text>
            </View>
          </View> 
          <View className="h-[200px]">
            {/* Temporary Space for graph */}
          </View>
          <View className="flex flex-col px-[32px] gap-[24px]"> 
            <Text className="text-[24px] font-[700]">
              Clear and easy-to-understand
            </Text>
            <View className="flex-col gap-[12px]">
              <Text className="text-[14px]">
                Our content is curated and crafted by experienced medical professionals, 
                including licensed doctors and medical students who work under the expert 
                guidance of experienced physicians. 
              </Text>
              <Text className="text-[14px] ">
                Information is then subjected to a thorough evaluation process by qualified 
                experts to ensure its precision. This review process enhances the credibility
                of the information presented, providing users with reliable insights into various health topics. 
                Finally, our dedication to transparency is reflected in our practice of displaying the credentials 
                of the content creators.
              </Text>
            </View>
            <Button 
              className="w-full rounded-md text-center py-[12px] px-[24px] bg-[#0F3682] "
              color={"text-white text-[14px] font-medium"}
              label="Learn more about us" 
              onPress={() => void(0)}/>
          </View>
          <View className="flex flex-col px-[32px] gap-[24px] mt-[160px]">
            <Text className="text-[24px] font-[700]">
              We’re backed by 100+ leading medical and sponsor organizations
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
