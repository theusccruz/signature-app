import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

const ButtonNative: React.FC<ButtonProps> = ({children, ...rest}) => (
  <ButtonContainer {...rest}>
    <ButtonText>{children}</ButtonText>
  </ButtonContainer>
);

export default ButtonNative;
