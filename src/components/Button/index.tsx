import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  fontSize?: number;
  fontFamily?: string;
  fontColor?: string;
  buttonColor?: string;
  contentWidth?: number;
  contentHeight?: number;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  fontSize, 
  fontFamily,
  fontColor,
  buttonColor,
  contentWidth,
  contentHeight,
  buttonStyle, 
  ...rest
}) => {

  return (
    <ButtonContainer
      backgroundColor={buttonColor}
      width={contentWidth}
      height={contentHeight}
      style={buttonStyle}
      {...rest}
    >
      <ButtonText fontSize={fontSize} fontFamily={fontFamily} color={fontColor} >
        {children}
      </ButtonText>
    </ButtonContainer>
  )
}

export default Button;