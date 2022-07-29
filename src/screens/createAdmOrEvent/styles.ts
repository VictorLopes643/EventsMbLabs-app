import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background: #141416;
  flex:1;
  `;
export const Box = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: -40px;
  flex-direction: row;
  `;
export const Content = styled.View`
  align-items: center;
  background: #2c2c31;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size:24px;
  font-weight: bold;
  margin-top: 20px;
  padding-right: 10px;
`;
