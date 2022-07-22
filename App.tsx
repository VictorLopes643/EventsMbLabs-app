import React from 'react';
import {  SafeAreaView, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto"
import  AppLoading from 'expo-app-loading'
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  })
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <SafeAreaView>
      <Text>Events Mb Labs</Text>
    </SafeAreaView>
  );
}
