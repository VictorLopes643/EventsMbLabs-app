import React, { FormEvent, useState, useContext, useEffect } from 'react'
import {   Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {  Buttons, Container, Content, Imgs, InputLogin, Login, SingInText } from "./styles";
import { AuthContext } from '../../service/auth';

export function SingIn({ navigation }){
  const [ email, SetEmail ] = useState('');  
  const [ password, SetPassword ] = useState('');  
  const { singIn } = useContext(AuthContext)
  const { user } = useContext(AuthContext)

  useEffect(() =>{
    if(user){
      navigation.navigate('Events')
      console.log("veio aq")
    }
    if(!user){
      console.log("n mas veio aq")
    }
  },[!user])
  ////
  
  // function noUserSubmit(){
  //   handleSubmit
  //   console.log('chamo')
  //   navigation.navigate('Events')
  //   if(user){
  //     console.log("temuser")
  //   }
  //   if(!user){
  //     // navigation.navigate('Events')
  //     console.log("nao temuser")
  //   }
  // }
  async function handleSubmit(e:FormEvent){
    e.preventDefault();
    const data = {
      email,
      password,
    }
    await singIn(data);
    if(user){
      // console.log(' tem usuer')
      navigation.navigate('Events')

    }
  }
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position': undefined}>
          <Content>
            <Imgs source={require("../../assets/Logopng.png")}/>
            <InputLogin 
              placeholder="E-mail "
              onChangeText={SetEmail}
              value={email}
              keyboardType='email-address'
              placeholderTextColor="#fff"
              />
            <InputLogin
              placeholder="password "
              onChangeText={SetPassword}
              value={password}
              secureTextEntry
              placeholderTextColor="#fff"
            />
            <TouchableOpacity>
              <SingInText
                onPress={() => navigation.navigate('NewClientCreate')}
                accessibilityLabel="Button entrar">
                Não tem cadastro? Cadastre-se
              </SingInText>
            </TouchableOpacity>
            <Buttons 
             onPress={handleSubmit}
             
             accessibilityLabel="Button entrar">
              
              <Login>Login</Login>
            </Buttons>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
