import React from 'react';
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto"
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import  AppLoading from 'expo-app-loading'
import { SingIn } from './src/screens/singIn/singIn';
import { Events } from './src/screens/events/events'
import { NativeBaseProvider, Stack } from 'native-base';
import { AuthProvider } from './src/service/auth'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
  const Stack = createNativeStackNavigator ()
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  })
  if(!fontsLoaded){
    return <AppLoading />
  }
  
const Drawer = createDrawerNavigator()
  return (
    
    <AuthProvider>
        <StatusBar style='light' translucent backgroundColor='tranparent'/>
      <NavigationContainer>
        <Stack.Navigator >
        {/* <StatusBar style='light' translucent backgroundColor='tranparent'/> */}
            <Stack.Screen 
              name='SingIn'
              component={SingIn}
            />
            <Stack.Screen 
              name='Events'
              component={Events}
            />
          </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
} 
