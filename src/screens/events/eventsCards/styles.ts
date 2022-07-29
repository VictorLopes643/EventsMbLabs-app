import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
margin-top: 40px;
`;

export const Content = styled.View`
  height: 300px;
  width: auto;
  border-radius: 20px;
  align-items: center;
  /* justify-content: center; */
  background: #FF9200;
  position: relative;
  `;
  export const BoxImg = styled.View`
    height: 200px;
    align-self: stretch;
    justify-content: top;
    background: #fff;
    border-radius: 20px;
  `;
export const Title = styled.Text`
  color: #fff;
  margin-top: 10px;
  font-weight: bold;
  font-size: 16px;
  `;
export const Description  = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-left:8px;
  margin-right:8px;
  margin-top: 5px;
  margin-bottom: 5px;
  
  /* background-color: #c9d77a; */
  
  `;
  export const DataView = styled.View`
  height: 25px;
  width: 200px;
  margin-left: -20px;
  margin-top:-10px;
  background:#FF9200;
  z-index: 2;
  position: absolute;
  justify-content:center;
  padding-left: 30px;
  `;

  export const DataText = styled.Text`
    color: #fff;
  `;