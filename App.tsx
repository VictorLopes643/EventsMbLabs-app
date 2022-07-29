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
import { PrismicProvider } from '@prismicio/react'
import { client } from './src/service/prismic'
import newEvent from './src/screens/newEvent/newEvent';
import { CompainesProvider } from './src/service/createCompanies';
import compaines from './src/screens/compaines/compaines';
import createAdmOrEvent from './src/screens/createAdmOrEvent/createAdmOrEvent';
import newAdm from './src/screens/newAdm/newAdm';
import newClient from './src/screens/newClient/newClient';

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
      <PrismicProvider client={client}>
        
        <Stack.Navigator initialRouteName='SingIn' >
            <Stack.Screen 
              name='SingIn'
              component={SingIn}
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name='Events'
              component={Events}   
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name='EventsCreate'
              component={newEvent}   
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name='CompaniesCreate'
              component={compaines}   
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name='EventOrAdmCreate'
              component={createAdmOrEvent}   
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name='NewAdmCreate'
              component={newAdm}   
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name='NewClientCreate'
              component={newClient}   
              options={{ headerShown: false }}
              />
          </Stack.Navigator>
              </PrismicProvider>
      </NavigationContainer>
    </AuthProvider>
  );
} 
