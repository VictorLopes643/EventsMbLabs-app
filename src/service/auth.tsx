import { CommonActions } from '@react-navigation/native';
import React, {
  createContext,
  useContext,
  ReactNode,
 } from 'react'
import { useState } from 'react';
import { Alert } from 'react-native';
import { api } from './api';
 

type User = {
 email: string 
};
type SingInCredentials = {
 email: string,
 password: string
};
 type AuthContextData = {
  singIn(credentials: SingInCredentials): Promise<void>;
  user: User;
 };
 type AuthProviderProps = {
  children: ReactNode;
 };

 export const AuthContext = createContext({} as AuthContextData);

 function AuthProvider({children}: AuthProviderProps ) {
   const [ user, setUser ] =  useState<User>();
   const isAuthenticated = !!user;
   async function singIn({email, password}: SingInCredentials,){
      try {
       if(!email || !password){
         return Alert.alert('Login', 'Informe o email e a senha')
        }
        const response = await api.post('authenticate',{
          email,
          password
        })
        console.log("aqui: ",response.data)
        console.log("email: ",email)
      // console.log(response.data);
      setUser({email})
    
      // console.log('meu email: ', user)

      // setLogin({email});
    } catch (error) {
      return Alert.alert('Login', 'Email ou senha invalidos')  
    }

  }
  return (
    <AuthContext.Provider value={{singIn, user }}>
      {children}
    </AuthContext.Provider>
  )
 }

 function useAuth(){
  const context = useContext(AuthContext);
  return context
 } 

 export {AuthProvider, useAuth};