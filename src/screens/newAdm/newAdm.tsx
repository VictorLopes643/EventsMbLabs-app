import React, { FormEvent, useContext, useState } from 'react'
import {   Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../../service/auth';
import { Login } from '../singIn/styles'
import { Box, Buttons, Container, Content, InputCreateEnvet, Title } from './styles'

export default function newAdm({ navigation }){
  const [  email, SetEmail ] = useState('')
  const [  name_companies, SetName_companies ] = useState('')
  const [  password, SetPassword ] = useState('')
  const  { addCompaines }  = useContext(AuthContext)
  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    const data ={
      password,name_companies,
      email
    }
    await addCompaines(data)
    navigation.navigate("Events")
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Content>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position': undefined}>
          <Title>Cadastro Administrador</Title>
          <Box>
            <InputCreateEnvet
              placeholder="Empresa"
              placeholderTextColor="#fff"
              onChangeText={SetName_companies}
              value={name_companies}
            />
            <InputCreateEnvet
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={SetEmail}
              value={email}
            />
            <InputCreateEnvet
              placeholder="Senha"
              placeholderTextColor="#fff"
              onChangeText={SetPassword}
              value={password}
            />
          </Box>
          <Buttons 
           onPress={handleSubmit}
           accessibilityLabel="Button cadastrar">
            
            <Login>Cadastrar</Login>
          </Buttons>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  </TouchableWithoutFeedback>
  )
}









