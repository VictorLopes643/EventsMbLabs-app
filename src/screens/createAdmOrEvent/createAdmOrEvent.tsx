import { KeyboardAvoidingView } from 'native-base'
import React from 'react'
import { Platform, Text } from 'react-native'
import { Box, Container, Content, Title } from './styles'

export default function createAdmOrEvent( {  navigation } ){
  return(
    <Container>
      <Content>
      <Title>Cadastro</Title>
        <Box>
          <Title
            onPress={()=> navigation.navigate('EventsCreate')}
            accessibilityLabel="cadastrar evento">
            Evento
          </Title>
          <Title
            onPress={()=> navigation.navigate('NewAdmCreate')}
            accessibilityLabel="cadastrar evento">
            Empresa
          </Title>
        </Box>
      </Content>
    </Container>
  )
}