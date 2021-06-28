import styled, { css } from "styled-components/native";

type ButtonStyleProps = {  
  backgroundColor?: string;
  width?: number;
  height?: number;
}

type ButtonTextStyleProps = {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonStyleProps>`
  width: 80px;
  height: 50px;

  ${props => 
    props.width && css`
      width: ${props.width}  
  `}

  ${props => 
    props.height && css`
      height: ${props.height}  
  `}

  background-color: #020887;
  border-radius: 10px;

  ${props => 
    props.backgroundColor && css`
      background-color: ${props.backgroundColor}  
  `}

  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ButtonText = styled.Text<ButtonTextStyleProps>`
  font-size: 15px;
  color: #fff;

  ${props => 
    props.fontSize && css`
      font-size: ${props.fontSize}  
  `}

  ${props => 
    props.fontFamily && css`
      font-family: ${props.fontFamily}  
  `}

  ${props => 
    props.color && css`
      color: ${props.color}  
  `}
`;