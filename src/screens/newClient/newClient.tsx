import React, { FormEvent, useContext, useState } from 'react'
import {   Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../../service/auth';
import { Login } from '../singIn/styles'
import { Box, Buttons, Container, Content, InputCreateEnvet, Title } from './styles'

export default function newClient({ navigation }){
  const [ name, setName  ] = useState('')
  const [ email, setEmail  ] = useState('')
  const [ password, setPassword  ] = useState('')
  const { createClient } = useContext(AuthContext)
  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    const data ={
      name,
      email,
      password
    }
    console.log('clico')
    await createClient(data)
    navigation.navigate('SingIn')
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Content>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position': undefined}>
          <Title>Cadastro</Title>
          <Box>
            <InputCreateEnvet
              placeholder="Nome"
              placeholderTextColor="#fff"
              onChangeText={setName}
              value={name}
            />
            <InputCreateEnvet
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={setEmail}
              value={email}
            />
            <InputCreateEnvet
              placeholder="Senha"
              placeholderTextColor="#fff"
              onChangeText={setPassword}
              value={password}
            />
          </Box>
          <Buttons 
           onPress={handleSubmit}
           accessibilityLabel="Button entrar">
            
            <Login>Cadastrar</Login>
          </Buttons>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  </TouchableWithoutFeedback>
  )
}