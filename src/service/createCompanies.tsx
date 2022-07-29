import React, {
  createContext,
  useContext,
  ReactNode,
 } from 'react'
import { useState } from 'react';
import { Alert } from 'react-native';
import { api } from './api';

type CompaniesProps = {
  username:string 
  name_companies:string
  password:string
}
type CreateCompainesContexData = {
  addCompaines(info: CompaniesProps): Promise<void>;
 };


type CompainesProviderProps = {
  children: ReactNode;
 };
export const CreateCompainesContex = createContext({} as CreateCompainesContexData) ;

  function CompainesProvider({children}: CompainesProviderProps ) {
    async function addCompaines({ username, name_companies, password }:CompaniesProps){
      const response = await api.post('companies',{
        username,
        name_companies,
        password
      })
      console.log('craete companies ',response.data)
    }
    return(
      <CreateCompainesContex.Provider value={{addCompaines}}>
      </CreateCompainesContex.Provider>
    )
  } 

  function useAddCompaines(){
    const context = useContext(CreateCompainesContex);
    return context
   } 
  
   export {CompainesProvider, useAddCompaines};