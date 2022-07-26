import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background: #141416;
  flex:1;
  justify-content: center;
  align-items: center;
  input{
    border-radius: 20;
    background-color: aliceblue;
  }
  `


  export const Imgs = styled.Image`
  height:150;
  width: 250;

  `
  export const InputLogin = styled.TextInput`
  height: 40;
  border-width: 1;
  padding: 10px;
  border-radius: 8;
  margin-top: 20px;
  background: #393939;
  color:#fff;
  
  `;
  export const Content = styled.View` `;
  export const Login = styled.Text`
  color:#fff;
  `;
  export const Buttons = styled.TouchableOpacity` 
 width :auto ;
 height: 40px;
 border: 1px;
 background: #FF9200;
 align-items: center;
 justify-content: center;
 border-radius: 30px;
 margin-top: 20px;
`;
  export const SingInText = styled.Text`
  color:#fff;
  margin-top:5px;
  margin-right:10px;
  font-size: 12px;
  `;