import React from 'react';
import {Container, ButtonText, Content} from './styles';
import {RectButtonProperties} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {View} from 'react-native';

interface ButtonProps extends RectButtonProperties {
  children: string;
  color?: string;
  textColor?: string;
  hasBorder?: boolean;
  icon?: string;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  color,
  icon,
  textColor,
  hasBorder,
  ...rest
}) => {
  return (
    <Container hasBorder={hasBorder} color={color} {...rest}>
      <Content>
        <Icon
          name={icon}
          style={{marginRight: 15}}
          size={30}
          color={textColor}
        />
        <ButtonText textColor={textColor}>{children}</ButtonText>
      </Content>
    </Container>
  );
};

export default Button;
