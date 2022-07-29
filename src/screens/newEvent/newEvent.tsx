import React, { FormEvent, useContext, useState } from 'react'
import {    Keyboard, KeyboardAvoidingView, Image, Platform, TouchableWithoutFeedback } from 'react-native';
import { AuthContext, AuthProvider } from '../../service/auth';
import * as ImagePicker from 'expo-image-picker'
import { Login } from '../singIn/styles';
import { Container, Content, Box, InputCreateEnvet, Title, Buttons, ImgBox, ContentBox, ImgText, AddImg } from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Photo from '../../components/photo/photo';
import { useFocusEffect } from '@react-navigation/native';
import { useEffect } from 'react';


export default function newEvent({ navigation }){
  const { createEvent } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [data, setData] = useState('')
  const [amount, setAmount] = useState('')
  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const [capa, setCapa] = useState('')
  const [isImg, setIsImg] = useState<boolean>(false)
  const id_companies = "7782be94-bb53-41cb-a183-5b2044c8f543"
  async function handleImage(){
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    
    if(status === 'granted'){
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        aspect: [4,4]
      })
      console.log(capa)
      if(!result.cancelled){
        setCapa(result.uri)
        console.log('aaaaaa',capa)
        return setCapa(result.uri)
      }
    }
  }
  async function handleSubmit(e:FormEvent){
    const content = {
      name,
      type,
      data,
      amount,
      description,
      place,
      id_companies,
      capa
    }
    console.log('ade a caa',capa)
    await createEvent(content)
    navigation.navigate("Events")
  }

  useEffect(() => {
    console.log("capa mudo ", capa)
  },[capa])
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
          <Content>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position': undefined}>
            <Title>Cadastro de Evento</Title>

            <Box>
            <TouchableOpacity onPress={() => handleImage()}>
              <ContentBox>
                <ImgBox >
                  <Photo uri={capa}/>
                </ImgBox>
                <AddImg>Adicionar</AddImg>
              </ContentBox>
            </TouchableOpacity>

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