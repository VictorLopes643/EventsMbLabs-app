import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { event } from "react-native-reanimated";
import Capa from "../../../components/capa/capa";
import Photo from "../../../components/photo/photo";
import { AuthContext } from "../../../service/auth";

// import { getPrismic } from "../../../service/prismic";


import { BoxImg, Container, Content, DataText, DataView, Description, Title } from "./styles";

interface ICards{
  data:string,
  title:string,
  description:string
  imgPhoto:string
}
export default function EventCard({data, title,description, imgPhoto } :ICards){
  const desc = description;
  const [res, setRes] = useState('')

  
  async function getToken(){
    const tk = await AsyncStorage.getItem("token")
    const isadm = await AsyncStorage.getItem("adm")
    if(isadm === 'false'){
      console.log('e adm:')
    }
    else{
      
      console.log('nao e adm:')
    }

  }
  useEffect(() => {
    getToken()
  },[event])
  // useEffect(() => {
  //   if(desc.length>130){
  //   setRes(desc.substring(0,130))
  //   console.log('e maior')
  //   }
  // },[desc])
  return(
    <Container>
      <DataView>

        <DataText>{data}</DataText>
      </DataView>
      <Content>
        <Capa uri={imgPhoto} />

        <Title>{title}</Title>
        <Description>{res ===''? desc:res+'...'} </Description>
      </Content>
    </Container>
  )
}


// export const getStaticProps = async () => {
//   console.log('weez')
//   const prismic = getPrismic()
//   const response = await prismic.query([
//     Prismic.predicate.at('document.type', 'evento')
//   ],{
//     fetch: ['evento.title', 'evento.local', 'evento.description','evento.date'],
//     pageSize:15
//   })
//   console.log(response)
//   return{
//     props:{}
//   }
// }