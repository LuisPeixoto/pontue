import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  border-radius: 10px;
  margin-bottom: 18px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Image = styled.Image`
  width: 100%;
  height: 180px;
  background: #000;
  border-radius: 10px;
`;

export const ThumbnailCard = styled(LinearGradient)`
  width: 100%;
  height: 180px;
  border-radius: 10px;
`;

export const Info = styled.View`
  width: 100%;
  padding: 4px 8px;
  margin-top: 10px;
  border-radius: 10px;
  background: #f2f2f2;
`;

export const OpenRedactionText = styled.Text`
  color: #fff;
  font-size: 21px;
  width: 100px;
  position: absolute;
  font-family: 'Lato-Regular';
`;

export const InfoText = styled.Text`
  justify-content: center;
  align-items: center;
  color: #888888;
  font-size: 21px;
  font-family: 'Lato-Regular';
`;

export const OpenRedaction = styled(RectButton)`
  flex: 1;
`;
