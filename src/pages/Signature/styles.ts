import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  align-items: 'center';
  justify-content: 'center';
  height: 250;
  padding: 10px;
`;

export const ViewRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: 'center';
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  background-color: #f44;
`;
