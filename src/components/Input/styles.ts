import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ececf2;
  border-radius: 5px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #ececf2;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #bbbbc7;
    `}
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #a7a7b0;
  font-size: 16px;
  font-family: 'Talo-Regular';
`;
export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
