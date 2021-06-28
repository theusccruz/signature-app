import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: #bdbbbb;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 75%;
  height: 450px;
  border-radius: 15px;

  background-color: #fff;
`;

export const PanelButtons = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  width: 70%;
`;

export const Title = styled.Text`
  font-size: 32px;
`;

export const Row = styled.View`
  background-color: #000;

  width: 860px;
  height: 1px;

  position: absolute;
  bottom: 140;
`;