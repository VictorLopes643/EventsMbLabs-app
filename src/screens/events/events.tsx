import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import { useContext } from 'react';
import { useAllPrismicDocumentsByType, usePrismicDocumentByUID } from '@prismicio/react';
import * as prismic from '@prismicio/client'
import { Alert, Handle, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../service/auth';
import EventCard from './eventsCards/eventsCards';
import { Box, Container, Content, Imgs, InputSearch, Logo, Title } from './styles';
import { client } from '../../service/prismic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../service/api';


type getProps ={
  
      id : string,
      name:string, 
      type:string,
      data:string,
      amount:string, 
      description:string, 
      place:string ,
      id_companies:string ,
  }

export  function Events({ navigation }){
  const [ test, setTest ] = useState<boolean>(false)
  const { user } = useContext(AuthContext)
  const [event , setEvent] = useState([{}])
  const [ searchList , setsearchList ] = useState([{}])
  const [ isSearch, setIsSearch ] = useState<boolean>(false)
  const [ search, setSearch ] = useState('')
  const [name, setName ] = useState('');
  const [date, setDate ] = useState('');
  const [description, setDescription ] = useState('');

  const searchLoad = () => {
    setName(search)
    setDate(search)
    setDescription(search)
     api.post("findName", {name}
    ).then(result => setsearchList(result.data))
    if(search){
      setIsSearch(true)
      console.log('trueeeee', searchList)
    }
    if(search === ''){
      setIsSearch(false)
      console.log('falseeeee', isSearch)
    }
  }


  const loadEvent = () => {
    api.get("event/all").then(result => setEvent(result.data))
  }

    async function getToken(){
    const tk = await AsyncStorage.getItem("token")
    const isadm = await AsyncStorage.getItem("adm")
    const isnadm = await AsyncStorage.getItem("nadm")
    if(isadm === 'false'){
      setTest(!test)
      console.log('AQUIIIIII', test)
    }
    if(isnadm === 'false'){
      setTest(test)
      console.log('enulo', test)
    }
  }
 
  useEffect(() => {
    searchLoad()
  },[search, isSearch ])
  useEffect(() => {
    if(user){
      console.log("eventos tem user")
      getToken()
      loadEvent()
    }
    if(!user){
      navigation.navigate('SingIn')
    }
  },[!user])
  return(
    <Container>
      <ScrollView>
        <Content>
        <Logo>
          <Imgs source={require("../../assets/Logopng.png")}/>
        </Logo>
            <InputSearch 
            placeholder="Procure pelo evento..."
            value={search}
            onChangeText={setSearch}
            onchange={() => searchLoad()}
            placeholderTextColor="#141416" 
            texColor="#141416" /> 
            {/* <InputSearch 
            placeholder="Procure por cidade, local e evento..."
            // value={search}
            // onChange={setSearch}
            placeholderTextColor="#141416"  />  */}
      <Text>

      {/* {event[0].name} */}
      </Text>
      {isSearch?(
        <>
        {searchList.map((e):any => {
        return(
          <EventCard key={e.id} title={e.name} data={e.data} description={e.description} imgPhoto={e.capa} />
        )
      })}
        </>
      ):(
        <>
          {event.map((e):any => {
            return(
              <EventCard key={e.id} title={e.name} data={e.data} description={e.description} imgPhoto={e.capa} />
          )
      })}
        </>
      )}
  
        {/* <EventCard title='Palestra de autismo' data='Dia 25 de setembro' description='with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain ' /> */}
        </Content>
      </ScrollView>
        {/* {test&& ( */}
          <Box  
            onPress={() => navigation.navigate('EventOrAdmCreate')}   
            accessibilityLabel="Button entrar">

           <Title> 
              Cadastrar 
           </Title> 
          </Box>
      {/* )} */}
    </Container>
  )
}