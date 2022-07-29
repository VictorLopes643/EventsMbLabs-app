import React, {
  createContext,
  useContext,
  ReactNode,
  useState
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { api } from './api';
 

type User = {
 email: string ,
 isAdm:boolean,
};

type SingInCredentials = {
 email: string,
 password: string
};
 type AuthContextData = {
  singIn(credentials: SingInCredentials): Promise<void>;
  createEvent(info: CreateEventProps): Promise<void>;
  addCompaines(info: CompaniesProps): Promise<void>;
  createClient(info: ClientProps): Promise<void>;
  user: User;
 };
 type AuthProviderProps = {
  children: ReactNode;
 };
 type CreateEventProps = {
   name:string;
   type:string;
   data:string;
   amount:string;
  description:string;
  place:string;
  id_companies:string
 }
 type CompaniesProps = {
  email:string 
  name_companies:string
  password:string
}
 type ClientProps = {
  name:string 
  email:string
  password:string
}

 export const AuthContext = createContext({} as AuthContextData);


 function AuthProvider({children}: AuthProviderProps ) {
   const [ user, setUser ] =  useState<User>();
   const [ isAdm, setIsAdm ] = useState<boolean>(false);
   const isAuthenticated = !!user;
   async function singIn({email, password}: SingInCredentials){
    try{
      const response = await api.post("authenticateCompanies", {
        email,
        password
      })
      const tkk = (response.data)
      const tk = await AsyncStorage.setItem("TokeAsync", tkk)
      setUser(tkk)

    }
    catch{
      try{
        // console.log('ta aquii')
        const response = await api.post("authenticate", {
          email,
          password
        })
        setUser(response.data)
      }
      catch{
        return Alert.alert('Login', 'Email ou senha invalidos')  
      }
    }
  }
      // return Alert.alert('Login', 'Email ou senha invalidos')  
    
  async function createEvent(
    {
      name,
      type,
      data,
      amount,
      description,
      place,
      id_companies
    }:CreateEventProps){
      try{

        const response = await api.post('event',{
          name,
          type,
          data,
          amount,
          description,
          place,
          id_companies
        })
        console.log("aqui: ",response.data)
      }catch{
        return Alert.alert('Erro', 'Erro ao cadastrar evento')  
      }
  }
  async function addCompaines({ email, name_companies, password}:CompaniesProps){
    try{

      const response = await api.post('companies',{
        email,
        name_companies,
        password
      })
      console.log('craete companies ',response.data)
      
    }catch{
      return Alert.alert('Cadastro', 'Erro ao cadastrar empresa')  
    }
  }

  async function createClient({name, email, password}:ClientProps){
  try{

    const response = await api.post('client',{
      name,
      email,
      password
    })
    return Alert.alert('Cadastro', 'Cliente cadastrado com sucesso!!')
  } catch{
    return Alert.alert('Cadastro', 'Erro ao cadastrar Cliente')
  }
  }

 

  return (
    <AuthContext.Provider value={{createEvent, singIn, user, addCompaines, createClient }}>
      {children}
    </AuthContext.Provider>
  )
 }

 function useAuth(){
  const context = useContext(AuthContext);
  return context
 } 

 export {AuthProvider, useAuth};