import { ImageBackground } from "react-native"
import { ImgText } from "../../screens/newEvent/styles"
import { Image } from "./styles"

interface IPhoto{
  uri:string | null
}

export default function Capa({uri}:IPhoto){
  if(uri){
    return <Image   source={{uri}}   />
  }
  return (
    <ImgText>Image</ImgText>
  )  
}