import styled from 'styled-components/native';

export const View = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;

  `;

export const ViewRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  align-items: center;
  `;

export const Row = styled.View`
  width: 90%;
  position: absolute;
  bottom: 140px;
  height: 1px;
  background-color: #000;

  `;

export const Title = styled.Text`
  color: #000;
  margin-top: 3%;
  font-size: 25px;

  `;