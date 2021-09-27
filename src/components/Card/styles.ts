import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background: #f2f2f2;
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
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ThumbnailCard = styled(LinearGradient)`
  width: 100%;
  height: 180px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Info = styled.View`
  height: auto;
  width: 100%;
  padding: 4px 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OpenRedactionText = styled.Text`
  color: #fff;
  font-size: 21px;
  width: 100px;
  position: absolute;
  font-family: 'Lato-Regular';
`;

export const TextCard = styled.Text`
  justify-content: center;
  align-items: center;
  color: #888888;
  font-size: 21px;
  font-family: 'Lato-Regular';
`;

export const CodeText = styled.Text`
  justify-content: center;
  align-items: center;
  color: #d10380;
  font-size: 21px;
  font-family: 'Lato-Bold';
`;

export const Edit = styled(RectButton)`
  width: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const OpenRedaction = styled(RectButton)`
  flex: 1;
`;

export const EditText = styled.Text`
  color: #d10380;
  margin-right: 4px;
  font-size: 18px;
  font-family: 'Lato-Regular';
`;
