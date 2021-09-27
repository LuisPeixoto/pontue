import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 32px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-family: 'Lato-Regular';
  color: #858585;
  font-size: 21px;
  margin: 32px 0;
`;
