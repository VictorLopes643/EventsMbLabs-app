import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Text, View } from "react-native";
import { AuthContext } from '../../service/auth';


export  function Events({ navigation }){
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if(user){
      console.log("eventos tem user")
    }
    if(!user){
      navigation.navigate('SingIn')
    }
  },[!user])
  return(
    <View>
      <Text>Ez dota:{user?.email}</Text>
    </View>
  )
}