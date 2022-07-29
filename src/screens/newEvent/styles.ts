import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background: #141416;
  flex:1;
  `;
export const Content = styled.View`
  background: #2c2c31;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  flex: 1;
  align-items: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size:24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Box = styled.View`

`;
export const InputCreateEnvet = styled.TextInput`
  height: 40;
  border-color: #fff;
  border-bottom-width: 1;
  min-width: 300px;
  margin-top: 30px;
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
 export const ContentBox = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
 `;
 export const ImgBox = styled.View`
  height: 80px;
  width:150px;
  border-radius: 20px;
  align-self: stretch;
  /* background: transparent; */
  border: 1px;
  border-style:dashed;
  border-color: #fff;
  align-items: center;
  justify-content: center;
  image{
    z-index: 99999;
  }
  /* position: absolute; */
 `;
 export const ImgText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  /* margin-left: 55px; */
 `;
  export const AddImg = styled.Text`
  font-weight:bold;
  font-size: 20px;
  color: #FF9200;

  `;
