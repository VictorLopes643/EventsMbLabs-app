import React, { FormEvent, useContext, useState } from 'react'
import {   Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { AuthContext, AuthProvider } from '../../service/auth';
import { Login } from '../singIn/styles';
import { Container, Content, Box, InputCreateEnvet, Title, Buttons } from "./styles";


export default function newEvent({ navigation }){
  const { createEvent } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [data, setData] = useState('')
  const [amount, setAmount] = useState('')
  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const id_companies = "7782be94-bb53-41cb-a183-5b2044c8f543"
  async function handleSubmit(e:FormEvent){
    const content = {
      name,
      type,
      data,
      amount,
      description,
      place,
      id_companies
    }
    await createEvent(content)
    navigation.navigate("Events")
  }
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
          <Content>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position': undefined}>
            <Title>Cadastro de Evento</Title>
            <Box>
              <InputCreateEnvet
                placeholder="Nome do Evento"
                placeholderTextColor="#fff"
                onChangeText={setName}
                value={name}
              />
              <InputCreateEnvet
                placeholder="Tipo"
                placeholderTextColor="#fff"
                onChangeText={setType}
                value={type}
              />
              <InputCreateEnvet
                placeholder="Descição"
                placeholderTextColor="#fff"
                onChangeText={setDescription}
                value={description}
              />
              <InputCreateEnvet
                placeholder="Data"
                placeholderTextColor="#fff"
                onChangeText={setData}
                value={data}
              />
              <InputCreateEnvet
                placeholder="Local"
                placeholderTextColor="#fff"
                onChangeText={setPlace}
                value={place}
                />
              <InputCreateEnvet
                placeholder="Quantidade de ingresso"
                placeholderTextColor="#fff"
                keyboardType='numeric'
                onChangeText={setAmount}
                value={amount}
              />
            </Box>
            <Buttons 
             onPress={handleSubmit}
             accessibilityLabel="Button entrar">
              
              <Login>Login</Login>
            </Buttons>
        </KeyboardAvoidingView>
          </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}