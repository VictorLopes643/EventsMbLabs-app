import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background: #141416;
  flex:1;
  `;
export const Content = styled.View`
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 80px;
`;
export const Imgs = styled.Image`
  height:90px;
  width: 150px;
  
`
export const Logo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  `;
export const InputSearch = styled.TextInput`
  width:auto;
  height: 30px;
  border: #fff;
  background:#fff ;
  padding-left:15 ;
  border-radius: 20px;
  margin-top: 20px;
  
`;
export const Box = styled.TouchableOpacity`
  position: absolute;
  background: #FF9900;
  height: 80px;
  width:430px;
  bottom: 0;
  align-items: center;
  /* justify-content: center; */
`;
export const Title = styled.Text`
margin-top:10px;
color: #fff;
font-size: 20px;
font-weight: bold;
`;