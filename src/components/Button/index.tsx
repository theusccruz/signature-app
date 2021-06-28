import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  fontSize?: number;
  fontFamily?: string;
  fontColor?: string;
  buttonColor?: string;
  contentWidth?: number;
  contentHeight?: number;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  fontSize, 
  fontFamily,
  fontColor,
  buttonColor,
  contentWidth,
  contentHeight, 
  ...rest
}) => {

  return (
    <ButtonContainer
      backgroundColor={buttonColor}
      width={contentWidth}
      height={contentHeight}
      {...rest}
    >
      <ButtonText fontSize={fontSize} fontFamily={fontFamily} color={fontColor} >
        {children}
      </ButtonText>
    </ButtonContainer>
  )
}

export default Button;