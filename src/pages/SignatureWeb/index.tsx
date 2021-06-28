import React, { useRef, useCallback } from 'react'
import { Text } from 'react-native';
import SignatureCanvas from 'react-signature-canvas'

import { Container, Content, PanelButtons, Title, Row } from './styles';
import Button from '../../components/Button';

const SignatureWeb: React.FC = () => {
  const signRef = useRef<SignatureCanvas>(null);

  const clear = useCallback(() => {
    signRef.current?.clear();
  }, []);

  const save = useCallback(() => {
    console.log(
      signRef.current?.getTrimmedCanvas()
        .toDataURL("image/png")
        .replace("data:image/png;base64,", "")
    );
  }, []);

  return (
    <Container>
      <Content>
        <Title>Assinatura Digital</Title>
        <SignatureCanvas
          ref={signRef}
          backgroundColor="#fff"
          canvasProps={
            {
              width: 880,
              height: 260,
            }
          }
        />

        <Row />

        <PanelButtons>
          <Button
            buttonColor="#cecccc"
            fontColor="#000"
            contentWidth={90}
            contentHeight={45}
            onPress={clear}
          >
            Limpar
          </Button>

          <Button contentWidth={90} contentHeight={45} onPress={save}>
            Confirmar
          </Button>
        </PanelButtons>
      </Content>
    </Container>
  );
}

export default SignatureWeb