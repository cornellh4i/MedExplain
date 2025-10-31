import { StyleSheet, ScrollView } from "react-native";

import "./global.css";

import Home from "./screens/home";

export default function App() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerClassName="items-center justify-start"
      bounces={false}                
      alwaysBounceVertical={false} 
      overScrollMode="never"> 
      
      <Home/>
    </ScrollView>
  );
}
