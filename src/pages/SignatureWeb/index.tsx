import React, { useRef, useCallback } from 'react'
import SignatureCanvas from 'react-signature-canvas'

import { Container, Content } from './styles';
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
        <h1>Signature example</h1>
        <SignatureCanvas
          ref={signRef}
          backgroundColor="#fff"
        />
        <Button onPress={() => console.log(123)}> 
          Apagar
        </Button>
        <Button> 
          Confirmar
        </Button>
        <button onClick={save}>SAVE</button>
      </Content>
    </Container>
  );
}

export default SignatureWeb