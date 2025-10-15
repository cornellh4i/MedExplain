import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/atoms/SearchBar/SearchBar';
import { useState } from 'react';

export default function App() {
  const [input,setInput] = useState("")
  return (
    
    <View style={styles.container}>
      <SearchBar  placeholder='searching..' value={input} onChangeText={(text) => setInput(text)}/>
      <Text style={{marginTop: 12}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
