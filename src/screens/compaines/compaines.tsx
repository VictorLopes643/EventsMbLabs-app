import React, { FormEvent, useState, useContext, useEffect } from 'react'
import {   Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../../service/auth';
import { Login } from '../singIn/styles';
import { Container, Content, Box, InputCreateEnvet, Title, Buttons } from "./styles";


export default function compaines(){
  const [ username, setUsername ] = useState('')
  const [ name_companies, setName_companies ] = useState('')
  const [ password, setPassword ] = useState('')
  const { addCompaines, user } = useContext(AuthContext)

  async function handleSubmit(e:FormEvent){
    e.preventDefault();
    const data = {
      username,       
      name_companies, 
      password       
    }
   await addCompaines(data);
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
          <Content>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position': undefined}>
            <Title>Cadastro de Empresa</Title>
            <Box>
              <InputCreateEnvet
                placeholder="Email"
                placeholderTextColor="#fff"
                onChangeText={setUsername}
                value={username}
              />
              <InputCreateEnvet
                placeholder="Nome da empresa"
                placeholderTextColor="#fff"
                onChangeText={setName_companies}
                value={name_companies}
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