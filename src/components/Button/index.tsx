import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
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
}) => {

  return (
    <ButtonContainer
      backgroundColor={buttonColor}
      width={contentWidth}
      height={contentHeight}
    >
      <ButtonText fontSize={fontSize} fontFamily={fontFamily} color={fontColor} >
        {children}
      </ButtonText>
    </ButtonContainer>
  )
}

export default Button;