import React, { useRef, useCallback } from 'react';
import SignatureScreen, {
  SignatureViewRef,
} from 'react-native-signature-canvas';

import { View, ViewRow, Row, Title } from './styles';
import Button from '../../components/Button';

interface Props {
  text: string;
  onOK: (signature: string) => void;
}

const Signature: React.FC<Props> = ({ onOK, text }) => {
  const ref = useRef<SignatureViewRef>(null);

  const handleSignature = useCallback((signature: string) => {
    alert(signature.replace("data:image/png;base64,", ""));
    onOK(signature);
  }, []);

  const handleClear = useCallback(() => {
    ref.current?.clearSignature();
  }, []);

  const handleConfirm = useCallback(() => {
    console.log('end');
    ref.current?.readSignature();
  }, []);

  const style = `
  .m-signature-pad--footer{
    display: none;
     margin: 0px;

  }
  .m-signature-pad--body {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    bottom: 60px;
    border: 1px solid #f4f4f4;
  }
    `;

  return (
    <View>
      <Title>Assinatura Digital</Title>
      <SignatureScreen ref={ref} onOK={handleSignature} webStyle={style} />
      <Row />
      <ViewRow>
        <Button
          contentWidth={120}
          contentHeight={60}
          fontSize={18}
          buttonColor="#cecccc"
          fontColor="#000"
          onPress={() => handleClear()}
        >
          Limpar
        </Button>
        <Button
          contentWidth={120}
          contentHeight={60}
          fontSize={18}
          onPress={() => handleConfirm()}
        >
          Confirmar
        </Button>
      </ViewRow>
    </View>
  );
};

export default Signature;
